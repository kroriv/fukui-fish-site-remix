import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "サービスご利用規約 | FUKUI BAND FISH" },
    {
      name: "description",
      content: "福井の海で育まれた新鮮な魚介類「FUKUI BRAND FISH」をご紹介します。私たちが厳選した海の恵みを、豊富な種類と鮮度抜群でお届けします。福井の海の味をご家庭でお楽しみいただけるよう、品質にこだわった海産物を提供しています。",
    },
  ];
};

export default function Page() {
  // Render
  return (
    <main id={ "guideline" }>
      <section>
        <div className={ "container content" }>
          <h2 className={ "!text-[120%] whitespace-nowrap" }>サービスご利用規約</h2>
          <p className={ "!text-[80%]" }>福井中央魚市株式会社（以下「当社」）は、当社が運営・提供するサービス「ふくいのお魚つながるアプリ」（以下「本サービス」）のご利用規約（以下「本規約」）について以下の通り定めます。</p>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第１条 利用者</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>本規約は、本サービスの提供を希望して本サービスに登録する利用者（以下「利用者」）に適用されます。</li>
            <li className={ "!text-[80%]" }>利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。</li>
            <li className={ "!text-[80%]" }>本サービスの利用にかかる通信費用は、利用者が負担するものとします。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第２条 サービスの範囲</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>本サービスは、第１条の利用者（当社が運用するサービス「ふくいのお魚つながるアプリ」に登録した会員（以下FUKUI BRAND FISH会員）を含む。）に対するサービスプログラムとなります。</li>
            <li className={ "!text-[80%]" }>会員登録を行うことにより、本サービスの全機能がご利用いただけます。</li>
            <li className={ "!text-[80%]" }>会員登録については、当社の定める「<a href="/privacypolicy.html" className="text-[#294c81] underline">プライバシーポリシー</a>」 に同意したものとみなされます。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第３条 利用者情報</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>当社は、本サービスの利用に関連して知り得た利用者の個人情報（以下「利用者情報」）を、「個人情報の保護に関する法律」その他関連諸法令の他、別途当社が定める<a href="/privacypolicy.html" className="text-[#294c81] underline">プライバシーポリシー</a>に基づき取扱います。</li>
            <li className={ "!text-[80%]" }>当社は、利用者情報を、本サービスの提供、マーケティング、新規サービス開発、及びサービス向上の目的に使用します。</li>
            <li className={ "!text-[80%]" }>
              当社は利用者情報を原則として第三者に開示することはありませんが、以下の場合には第三者に利用者情報を提供することがあります。
              ただし、提供する利用者情報は必要最低限の情報に限り、利用情報が漏えい、滅失、改ざんされないように図ります。
              <ul className={ "list-decimal [padding-inline-start:22px] mt-2" }>
                <li className={ "!text-[90%]" }>本サービスの提供、マーケティング、新規サービスの開発、及びサービス向上に関する業務を第三者に委託する場合</li>
                <li className={ "!text-[90%]" }>公的機関から正当な理由により開示を要求された場合</li>
              </ul>
            </li>
            <li className={ "!text-[80%]" }>
              第三者企業からのデータの取得について<br/>
              お客様の利便性およびサービスの品質向上のため、当社は、第三者である業務委託先からお客様のアプリ内での閲覧ログデータ・行動ログデータ（個人情報を含みません）の提供を受け、これを個人情報として取得する場合があります。
お客様は、当社が当該データを個人情報として取得することにつき同意するものとします。
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第４条 本サービスの権利</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>本サービス中の表示、及びアプリを構成するプログラム等に係る著作権、商標権等すべての知的財産権は、当社に帰属します。</li>
            <li className={ "!text-[80%]" }>本サービスは、利用者本人が個人として使用する目的でのみ利用することができます。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第５条 禁止行為</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>
              利用者は次の各号に該当する行為は行ってはならず、利用者が次の各号に該当する行為を行った場合、当社は、利用者に事前通知することなく本サービスの提供を停止します。
              <ul className={ "list-decimal [padding-inline-start:22px] mt-2" }>
                <li className={ "!text-[90%]" }>本サービスを複製、修正、変更、改変、または翻案する行為</li>
                <li className={ "!text-[90%]" }>本サービスを構成するプログラム（オブジェクトコード、ソースコード等全てを含みます）を複製し、または第三者に開示する行為</li>
                <li className={ "!text-[90%]" }>本サービスの運営を妨げる行為、またはその恐れのある行為</li>
                <li className={ "!text-[90%]" }>本サービスの内容を本サービス利用以外の目的に使用する行為</li>
                <li className={ "!text-[90%]" }>他の利用者、第三者もしくは当社に損害、不利益を与える行為、またはその恐れのある行為</li>
                <li className={ "!text-[90%]" }>公序良俗に反する行為、法令に違反する行為、またはその恐れのある行為</li>
                <li className={ "!text-[90%]" }>本規約に違反する行為</li>
                <li className={ "!text-[90%]" }>その他、当社が不適当と判断する行為</li>
              </ul>
            </li>
            <li className={ "!text-[80%]" }>利用者の前項各号に該当する行為により、他の利用者、第三者もしくは当社に損害が生じた場合、もしくは利用者が本サービスの利用について別途当社が定める諸規定に違反して当社に損害が生じた場合、当社は利用者に対し、当該損害の賠償を請求することがあります。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第６条 利用の中止</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>利用者はいつでも本サービスの利用を中止することができます。利用者が本サービスの利用を中止する場合は、利用者本人の端末から本アプリを削除するものとします。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第７条 免責</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>
              当社は以下の場合において、利用者に生じる損害、トラブルに関して、いかなる責任も負いません。
              <ul className={ "list-decimal [padding-inline-start:22px] mt-2" }>
                <li className={ "!text-[90%]" }>利用者が本サービスを利用することにより、他の利用者または第三者に対して損害を与えた場合</li>
                <li className={ "!text-[90%]" }>利用者が本サービスを利用できなかった場合、または本サービスの利用に関し、当社の責のない事由により損害を被った場合</li>
                <li className={ "!text-[90%]" }>利用者の使用環境等により、本サービスが使用できない場合</li>
                <li className={ "!text-[90%]" }>当社が本サービスを変更し、または本サービスを中止した場合</li>
                <li className={ "!text-[90%]" }>本サービスの利用により、利用者の使用端末、コンピュータ、OS、ブラウザ、各種ソフトウェア、その他付属機器に不具合が生じ、または利用者のデータが消失、毀損等した場合</li>
              </ul>
            </li>
            <li className={ "!text-[80%]" }>当社は、本サービスがすべての利用者の端末に対応することを保証しません。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>第８条 その他</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>当社は、利用者の事前の承諾を得ることなく、本サービスの内容の全部または一部を変更することがあります。</li>
            <li className={ "!text-[80%]" }>当社は、利用者の事前の承諾を得ることなく本規約を変更することがあります。なお、変更後の本規約は、変更時に効力を生じます。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>【附則】</h3>
          <p className={ "!text-[80%]" }>このご利用規約は、令和6年3月28日から適用します。</p>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <p className={ "!text-[80% text-right" }>福井中央魚市株式会社</p>
        </div>
      </section>
      
    </main>
  );
}