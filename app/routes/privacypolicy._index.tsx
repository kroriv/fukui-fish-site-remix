import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "個人情報保護方針 | FUKUI BAND FISH" },
    {
      name: "description",
      content: "福井の海で育まれた新鮮な魚介類「FUKUI BRAND FISH」をご紹介します。私たちが厳選した海の恵みを、豊富な種類と鮮度抜群でお届けします。福井の海の味をご家庭でお楽しみいただけるよう、品質にこだわった海産物を提供しています。",
    },
  ];
};

export default function Page() {
  // Render
  return (
    <main id={ "privacypolicy" }>
      <section>
        <div className={ "container content" }>
          <h2 className={ "!text-[120%] whitespace-nowrap" }>個人情報の取扱いについて</h2>
          <p className={ "!text-[80%] mb-4" }>福井中央魚市株式会社(以下「当社」といいます。)は、個人情報(氏名、電子メールアドレス、電話番号、住所等個人を特定できる情報。以下「個人情報」といいます。)を重要なものと認識しております。</p>
          <p className={ "!text-[80%] mb-4" }>当社は、「適切かつ的確な個人情報保護・管理による信頼と信用の獲得」を個人情報保護の基本方針として、個人情報保護マネジメントシステムの完全履行に努め、これを実現致します。</p>
          <p className={ "!text-[80%]" }>当社は、個人情報保護の重要性に鑑み、以下の取組みを実施致します。</p>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <h3 className={ "font-semibold mb-4" }>プライバシーポリシー</h3>
          <ul className={ "list-decimal [padding-inline-start:22px] flex flex-col gap-4" }>
            <li className={ "!text-[80%]" }>当社は、個人情報を取り扱う責任者を置き、適切な管理を行います。</li>
            <li className={ "!text-[80%]" }>当社は、生鮮水産物等の卸売業を営んでおり、個人情報をご提供いただく際には利用目的をお知らせし、その利用目的の範囲内で利用し、利用目的の範囲を超えた個人情報の取扱い（以下「目的外利用」といいます。）を行わず、又そのための適切な措置を講じます。</li>
            <li className={ "!text-[80%]" }>当社は、適切なセキュリティー技術施策を取ることにより、ご提供いただいた個人情報を厳重に保管・管理し、個人情報への不正アクセス、個人情報の漏えい、滅失又はき損等に対し、適切な予防策ならびに是正措置を講じます。</li>
            <li className={ "!text-[80%]" }>当社は、従業者に対する教育啓蒙活動を実施するほか、個人情報を取扱う部署ごとに管理責任者を置くとともに当社所定の管理基準に基づき、個人情報の適切な管理を行います。</li>
            <li className={ "!text-[80%]" }>当社は、事前に同意を得ている場合を除き、ご提供いただいた個人情報を第三者に提供又は開示致しません。但し個人情報を前第２項の目的の為関連会社に提供する場合、当社と機密保持契約を締結する業務委託先あるいは業務提携先に開示する場合、及び法令に基づく開示などの正当な理由がある場合はこの限りではありません。</li>
            <li className={ "!text-[80%]" }>当社が前５項に基づき個人情報を提供・開示する関連会社等に対しては、ご提供いただいた個人情報の漏洩等を行わないよう機密保持契約によりこれを義務付け、適切な取扱いと保護を行わせます。</li>
            <li className={ "!text-[80%]" }>当社は、本人からの苦情及び相談の要請に対して、誠実かつ合理的な期間内に対応させて頂きます。</li>
            <li className={ "!text-[80%]" }>当社は、「個人情報の保護に関する法律」等、個人情報の取扱いに関する法令、国が定める指針及びその他の規範等を遵守するとともに、個人情報保護マネジメントシステムを適宜見直し、継続的改善に努めて参ります。</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div className={ "container content" }>
          <p className={ "!text-[80%] text-right" }>制定	令和6年3月28日</p>
          <p className={ "!text-[80%] text-right" }>福井中央魚市株式会社</p>
          <p className={ "!text-[80%] text-right" }>代表取締役社長	三木讓</p>
        </div>
      </section>
    </main>
  );
}