/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type LinksFunction, type MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/shared/Header";
import InViewFigure from "~/components/home/InViewFigure";
import homeCssBunbleHref from "~/styles/home.scss?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: homeCssBunbleHref },
];

export const meta: MetaFunction = () => {
  return [
    { title: "FUKUI BAND FISH" },
    {
      name: "description",
      content: "福井の海で育まれた新鮮な魚介類「FUKUI BRAND FISH」をご紹介します。私たちが厳選した海の恵みを、豊富な種類と鮮度抜群でお届けします。福井の海の味をご家庭でお楽しみいただけるよう、品質にこだわった海産物を提供しています。",
    },
  ];
};

export default function Page() {
  // Render
  return (
    <>
      <Header/>
      <main id={ "home" }>
        <section id={ "home-hero" } className={ "original-gradient pt-0" }>
          <div className={ "wrapper" }>
            <div className={ "item" }>
              <div>
                <InViewFigure src={ "/assets/images/hero-01.webp" } alt={ "地形・自然" }/>
              </div>
              <div className={ "bg-transparent" }>
                <span>Nature</span>
                <h3>地形・自然</h3>
                <p>
                  福井県は日本海のほぼ中央に位置し、若狭湾沿岸部のリアス海岸と海底から立ち上がる玄達瀬などの天然礁により複雑な潮の流れが発生することで、豊かな漁場となっています。
                  その豊かな漁場を利用して、多彩な漁業が行われています。<br/>
                  中でも、主要な漁業となっている海の底を網で曳く底曳網漁業や、魚の通り道に罠を仕掛ける定置網漁業は、この地で数百年以上に渡っ
                  て営まれています。
                </p>
              </div>
            </div>
            <div className={ "item" }>
              <div>
                <InViewFigure src={ "/assets/images/hero-02.webp" } alt={ "歴史" }/>
              </div>
              <div>
                <span>History</span>
                <h3>歴史</h3>
                <p>
                  福井県の若狭は、古くから「御食国（みけつくに）」として、塩や海産物など豊富な食材を都に運び、都の食文化を支えてきました。<br/>
                  御食国の時代以降も「若狭の美物（うましもの）」を都に運び、京の食文化を支えてきました。<br/>
                  食材を運んだ街道群は、様々な物資や人、文化を運んだ交流の道としても知られていますが、特に18世紀以降、多くの鯖を運んだことから、近年では「鯖街道」と呼ばれています。
                </p>
              </div>
            </div>
            <div className={ "item" }>
              <div>
                <InViewFigure src={ "/assets/images/hero-03.webp" } alt={ "鮮度" }/>
              </div>
              <div>
                <span>Freshness</span>
                <h3>鮮度</h3>
                <p>
                  福井県は漁場が近く、水揚げした魚を新鮮なまま持ち帰り、いち早く出荷でき、美味しい状態で食べることができるのが大きな特徴です。<br/>
                  福井県を代表する水産物「越前がに」の漁場も、漁港から約1～2時間程の距離と近く、水揚げ後すぐに港へ運び、新鮮なまま出荷することができます。<br/>
                  最近では、漁獲された魚に活締めや神経抜きをすることで、さらに鮮度を高める取り組みが広がっています。
                </p>
              </div>
            </div>
            <div className={ "item" }>
              <div>
                <InViewFigure src={ "/assets/images/hero-04.webp" } alt={ "養殖" }/>
              </div>
              <div>
                <span>Aquaculture</span>
                <h3>養殖</h3>
                <p>
                  地形が複雑に入り組んだリアス海岸のおかげで、波も穏やか若狭湾。<br/>
                  海と山が近く、山からの栄養分が川を通して海に流れ込こみ、豊かな漁場が形成されます。<br/>
                  そんな環境を活かして、トラフグやマダイ、カキなどの養殖業が行われています。<br/>
                  トラフグやマダイの海面養殖が行われている場所としては、日本最北端。身がぎゅっと締まった美味しい魚が育ちます。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id={ "home-brand" }>
          <div className={ "container" }>
            <h2>福井のブランドフィッシュ</h2>
            <div className={ "wrap" }>
              <div>
                <InViewFigure src={ "/assets/images/brand-01.webp" } alt={ "越前がに" }/>
                <div>
                  <h3>越前がに</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>11～3月</span>
                  </div>
                </div>
                <p>
                  「福井が誇るトップブランド」<br/>
                  日本海の豊かな海の幸に恵まれた福井県。越前がにの漁が解禁になると待ちわびたファンが全国から訪れます。<br/>
                  絶妙な塩と茹で加減で旨味を最大限引き出す「浜茹でガニ」をはじめ、「カニ刺し」や「焼きガニ」、濃厚な内子と外子がたまらない「せいこがに」の美味しさは冬の味覚の王者です。<br/>
                  その中でも、極上の「越前がに極」は最高級の逸品です。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-02.webp" } alt={ "若狭ぐじ" }/>
                <div>
                  <h3>若狭ぐじ</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「御食國の代表で京料理の主役を務める雅な魚」<br/>
                  若狭湾で獲れるアカアマダイは、古来、最高級食材として京の都に運ばれていました。<br/>
                  その中でも、500g以上で釣りや延縄で漁獲され、姿形、鮮度管理などの厳しい基準を満たしたものを「若狭ぐじ」、さらに800gで船上活締め・神経抜きをしたものを「若狭ぐじ極」として水揚港と船名が入ったラベルを貼り、出荷しています。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-03.webp" } alt={ "越前がれい" }/>
                <div>
                  <h3>越前がれい</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>9～5月</span>
                  </div>
                </div>
                <p>
                  「絶品は刺身。その味、ヒラメ以上」<br/>
                  福井県で水揚げされるアカガレイは、水揚げ量が多い越前漁港にちなんで「越前がれい」と呼ばれます。<br/>
                  煮て良し、焼いて良しですが、活きたまま港まで持ち帰り、丁寧に処理をされた白く透き通る鮮度抜群の刺身は、弾力ある食感と口に広がる甘味が絶妙。<br/>
                  その中でも、産卵に向けて身に脂がのる9月～翌1月に漁獲された800g以上の雌は「越前がれい極」として出荷されます。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-04.webp" } alt={ "甘えび" }/>
                <div>
                  <h3>甘えび</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「福井県の海から、真っ赤な幸せ届けます。」<br/>
                  甘えびの語源は、食べた時に甘みを感じることから。<br/>
                  その名のとおり、一口頬張れば‘ぷりぷり’と身がはじけて、口の中いっぱいに甘さが広がります。<br/>
                  中サイズ以上で、5月～翌1月（7、8月を除く）に漁獲され、24時間以内に競りにかけられた鮮度抜群の「ふくい甘えび」は、透明感があ
                  り、真っ赤に輝く体が目を引きます。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-05.webp" } alt={ "若狭ふぐ" }/>
                <div>
                  <h3>若狭ふぐ</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>11～2月</span>
                  </div>
                </div>
                <p>
                  「最北端の海で育ったフグの王様」<br/>
                  雪解けの冷たい水が流れ込むため、他の養殖産地に比べて低水温期間が長い若狭湾。<br/>
                  そんな日本一寒い環境で育ったトラフグは、「若狭ふぐ」として、福井県内の宿泊施設をはじめ、京阪神を中心とした県外へも出荷されています。<br/>
                  ぎゅっと締まった身に十分詰まった旨味が最大の特徴で、「てっさ（ふぐの薄造り）」や「てっちり（ふぐ鍋）」は絶品です。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-06.webp" } alt={ "若狭まはた" }/>
                <div>
                  <h3>若狭まはた</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「知られざる、食感のヌシ」<br/>
                  若狭ふぐに並ぶ、新しい養殖魚として注目されています。<br/>
                  暖かい海に生息する高級魚で、寒さいに弱い0歳漁を陸上水槽で育て、1歳になる頃に海での養殖スタート、1年から1年半かけ育てます。<br/>
                  上品白身で味わい深く、お刺身にすると赤と白のコントラストがとても鮮やかです。<br/>
                  加熱するとより旨味が際立つので、鍋や煮魚、蒸し料理などもオススメです。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-07.webp" } alt={ "ふくいサーモン" }/>
                <div>
                  <h3>ふくいサーモン</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「福井産まれ、福井育ちのサーモンご当地サーモン」<br/>
                  福井県の冬の冷たい海を利用して育てられたトラウトサーモン（ニジマス）。<br/>
                  完全活締めして脱血処理することで、身の色は美しく、上品な脂のりとモチモチの食感が味わえます。<br/>
                  4月～5月の水揚期を過ぎると、高品質の冷凍加工品が周年流通されます。<br/>
                  新しい取り組みとして、大野市の陸上養殖施設では、淡水のみで育てた「ふくい名水サーモン」が鮮魚で周年出荷されます。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-08.webp" } alt={ "敦賀真鯛" }/>
                <div>
                  <h3>敦賀真鯛</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「養殖の概念が変わる」<br/>
                  敦賀の海で育ったマダイで、冬の日本海という厳しい環境を耐え抜く、強い生命力を持っています。<br/>
                  エサにはカニ殻などの栄養価の高い飼料を与えることで、身質、魚体の色味、脂のりともに非常にいい状態に仕上がります。<br/>
                  その中でも、抜群の歯応えと甘味の強さは、養殖の概念が変わったと料理人達を唸らせます。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-09.webp" } alt={ "小浜よっぱらいサバ" }/>
                <div>
                  <h3>小浜よっぱらいサバ</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「酒粕を食べて育った珠玉で、日本随一のサバ」<br/>
                  「かつては、天然のサバが大漁に水揚げされた小浜市田烏で、鯖、復活プロジェクトがスタート。<br/>
                  山々に囲まれた美しい海で、鯖街道の終点である京都で作った酒粕をエサに混ぜ込み、育てています。<br/>
                  ほどよく身が引き締まり、コリっとした食感と脂のり、爽やかな風味が特徴です。<br/>
                  毎日、愛と情熱を注いで育て、自信をもってお届けします。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-10.webp" } alt={ "寒ぶり ひるが響" }/>
                <div>
                  <h3>寒ぶり ひるが響</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>11月～1月</span>
                  </div>
                </div>
                <p>
                  「美浜三段締めにより、最大限に鮮度を守る」<br/>
                  11月下旬から翌1月に美浜町日向の定置網で漁獲された8㎏以上のブリを、活かした状態で漁港に持ち帰り、暗い水槽に収容し、興奮状態を落ち着かせる「活け越し処理」と、出荷に併せて「血抜き処理」、「神経締め処理」をすることで、抜群に鮮度を高めます。<br/>
                  この旨さが全国に響きわたりますようにとの願いを込めて、この名前が付けられました。
                </p>
              </div>
              
              <div>
                <InViewFigure src={ "/assets/images/brand-11.webp" } alt={ "若狭のかき・岩牡蠣" }/>
                <div>
                  <h3>若狭のかき・岩牡蠣</h3>
                  <div>
                    <p>漁獲時期</p>
                    <span>通年</span>
                  </div>
                </div>
                <p>
                  「夏も冬も。美味しさふっくら、ミルクたっぷり」<br/>
                  大きな身と、磯の風味豊かな味わいが魅力の夏の岩牡蠣は、素潜り漁で漁獲されるほか、新しい取り組みとして、養殖が始まりました。<br/>
                  栄養豊富な小浜湾で90年以上前から養殖されている冬のマガキは、熱を加えても身が縮まらず、濃厚な味わいが特徴です。夏カキ（岩牡蠣）と冬カキ（牡蠣））で、一年中美味しいカキが食べられます。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}