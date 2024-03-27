import { Link } from "@remix-run/react";
import Wave from "react-wavify";
import Logo from "~/components/shared/Logo";

export default function Footer() {
  // Render
  return (
    <footer className={ "relative z-10 pt-32 pb-12" }>
      <div className={ "container bg-blue-250 pt-8 px-8" }>
        
        <div className={ "grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 z-10" }>
          <div>
            <div className={ "flex flex-col-reverse md:flex-col justify-center items-center md:items-start gap-4" }>
              {/* LOGO */}
              <div className={ "flex justify-center items-center" }>
                <Link to={ "/" }>
                  <Logo className={ "fill-blue-550 w-60" }/>
                </Link>
              </div>
              <div className={ "hidden md:flex gap-4 justify-center items-center pb-8" }>
                <Link to={ "/guideline" } className={ "text-blue-550 text-[80%] md:text-12ptr hover:underline" }>サービスご利用規約</Link>
                <Link to={ "/privacypolicy" } className={ "text-blue-550 text-[80%] md:text-12ptr hover:underline" }>プライバシーポリシー</Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className={ "md:!text-left !mb-8 md:!mb-12" }>関連サイト</h2>
            <div className={ "flex flex-col gap-8" }>
              <div>
                <p className={ "text-20ptr md:text-24ptr lg:text-28ptr font-notoserifjp" }>美食福井</p>
                <a className={ "text-16ptr md:text-20ptr lg:text-24ptr text-blue-550 font-notoserifjp hover:underline" } href={ "https://bisyoku-fukui.jp/" } target={ "_blank" } rel={ "noopener noreferrer" }>https://bisyoku-fukui.jp/</a>
              </div>
              <div>
                <p className={ "text-20ptr md:text-24ptr lg:text-28ptr font-notoserifjp" }>プライドフィッシュ公式サイト</p>
                <a className={ "text-16ptr md:text-20ptr lg:text-24ptr text-blue-550 font-notoserifjp hover:underline" } href={ "https://www.pride-fish.jp/JPF/pref/?pk=1549616252" } target={ "_blank" } rel={ "noopener noreferrer" }>https://www.pride-fish.jp/JPF/pref/?pk=1549616252</a>
              </div>
            </div>
          </div>
          <div className={ "flex md:hidden gap-4 justify-center items-center pb-8" }>
            <Link to={ "/guideline" } className={ "text-blue-550 text-[80%] hover:underline" }>サービスご利用規約</Link>
            <Link to={ "/privacypolicy" } className={ "text-blue-550 text-[80%] hover:underline" }>プライバシーポリシー</Link>
          </div>
        </div>
      </div>
      
      {/* Waves */}
      <div className={ "absolute top-0 left-0 w-full h-full -z-10" }>
        <Wave 
          className={ "wave" }
          fill={ "#dae2ea" }
          paused={ false }
          options={{
            height: 40,
            amplitude: 50,
            speed: 0.05,
            points: 7
          }}
        />
        <Wave 
          className={ "wave" }
          fill={ "rgba(218, 226, 234, .5)" }
          options={{
            height: 50,
            amplitude: 40,
            speed: 0.15,
            points: 3
          }}
        />
        <Wave 
          className={ "wave" }
          fill={ "rgba(218, 226, 234, .5)" }
          paused={ false }
          options={{
            height: 40,
            amplitude: 60,
            speed: 0.15,
            points: 6
          }}
        />
      </div>
      
    </footer>
  );
}