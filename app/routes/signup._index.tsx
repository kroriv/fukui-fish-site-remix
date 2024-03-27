import { json, redirect, MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, useActionData } from "@remix-run/react";
import { getSession, commitSession, destroySession } from "~/services/session.server";
import PreflightFormModal from "~/components/signup/PreflightFormModal";
import SigninFormModal from "~/components/signup/SigninFormModal";
import { useState, useEffect } from "react";
import { m, domAnimation, LazyMotion, AnimatePresence } from "framer-motion";

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return [
    { title: "サインイン | FUKUI BRAND FISH" },
    { name: "description", content: "FUKUI BRAND FISH" },
    { name: "preload", content: "/assets/images/signup/Bg_01.webp" },
    { name: "preload", content: "/assets/images/signup/Bg_02.webp" },
    { name: "preload", content: "/assets/images/signup/Bg_03.webp" },
    { name: "preload", content: "/assets/images/signup/Bg_04.webp" },
    { name: "preload", content: "/assets/images/signup/Bg_05.webp" },
  ];
};

type ActionApiResponse = {
  status?: number;
  messages: { message: string };
  signature?: string;
};

/**
 * Loader
 */
export async function loader({ request }: LoaderFunctionArgs) {
  // URLパラメータからrefを取得
  const ref = new URL(request.url).searchParams.get("ref");
  // JSON形式で返却
  return json({
    ref: ref
  });
}

/**
 * Action
 */
export async function action({ request }: ActionFunctionArgs) {
  // セッション取得
  const session = await getSession(request.headers.get("Cookie"));
  // フォームデータを取得
  const formData = await request.formData();
  // メールアドレス認証フォーム
  if (formData.get("form") === "preflight") {
    // APIへデータを送信(php spark serve --host 0.0.0.0)
    const apiResponse = await fetch(`${ process.env.API_URL }/signup/create.preflight`, { method: "POST", body: formData });
    // JSONデータに変換
    const jsonData = await apiResponse.json<ActionApiResponse>();
    // ステータスが200以外の場合はエラー
    if (jsonData.status !== 200) {
      return json({
        error: jsonData.messages.message!
      });
    }
    
    // 認証コード確認画面へリダイレクト
    return redirect(`/signup/preflight?signature=${ jsonData.signature }`, {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
  
  // サインインフォーム
  if (formData.get("form") === "signin") {
    // APIへデータを送信(php spark serve --host 0.0.0.0)
    const apiResponse = await fetch(`${ process.env.API_URL }/signup/auth.user`, { method: "POST", body: formData });
    // JSONデータに変換
    const jsonData = await apiResponse.json<ActionApiResponse>();
    // ステータスが200以外の場合はエラー
    if (jsonData.status !== 200) {
      return json({
        error: jsonData.messages.message
      });
    }
    // 認証署名をセッションに保存
    session.set("signin-auth-user-signature", jsonData.signature);
    // ほしいね一覧をセッションに保存
    
    // コメント一覧をセッションに保存
    
    
    // 認証後ホーム画面へリダイレクト
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
}

export default function Page() {
  // LOADER
  const loaderData = useLoaderData<typeof loader>();
  // ACTION
  const actionData = useActionData<typeof action>();
  
  // States
  const [currentImage, setCurrentImage] = useState<number>(0);
  // Effects
  useEffect(() => {
    // 一定時間ごとに次の画像に切り替える
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 切り替える間隔（ミリ秒）
    return () => clearInterval(interval); // アンマウント時にクリアする
  }, []);
  // Render
  return (
    <main id={ "signup" } className={ "relative z-10 h-screen" }>
      
      <LazyMotion features={ domAnimation }>
        <AnimatePresence>
          <m.img
            key={ currentImage }
            //src={images[currentImage]}
            src={ images[currentImage] }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={ "absolute w-full h-full object-cover -z-[2]" }
          />
        </AnimatePresence>
      </LazyMotion>
      
      <section className={ "container" }>
        {/*
        <div className={ "absolute bottom-32 left-0 w-full px-4 md:px-20 mx-auto" }>
          <div className={ "flex flex-col justify-center items-center gap-4 md:gap-8 w-full md:w-[50%] mx-auto" }>
            <Link to={ "/signup?ref=preflight" } className={ "button button--primary rounded-full" }>新規登録</Link>
            <Link to={ "/signup?ref=signin" } className={ "button button--secondary rounded-full" }>サインイン</Link>
          </div>
        </div>
        */}
      </section>
      
      { /* 仮登録フォームモーダル */ }
      <PreflightFormModal 
        loaderData={ loaderData! }
        actionData={ actionData! }
      />
      { /* サインインフォームモーダル */ }
      <SigninFormModal 
        loaderData={ loaderData! }
        actionData={ actionData! }
      />
    </main>
  );
}

const images = [
  "/assets/images/signup/Bg_01.webp",
  "/assets/images/signup/Bg_02.webp",
  "/assets/images/signup/Bg_03.webp",
  "/assets/images/signup/Bg_04.webp",
  "/assets/images/signup/Bg_05.webp",
];