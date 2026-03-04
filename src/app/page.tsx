import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const overview = [
  { label: "イベント名", value: "KL Career Forum 2026" },
  { label: "開催日時", value: "2026年5月22日（金）10:00 – 16:00" },
  {
    label: "会場",
    value: "マレーシア日本人商工会議所（JACTIM）セミナールーム\n※クアラルンプール市内",
  },
  { label: "対象企業", value: "日本のIT企業 最大10社（日本国内採用・勤務前提）" },
  { label: "参加企業の締切日", value: "2026年4月10日（先着順）" },
  {
    label: "対象参加者",
    value:
      "マレーシア留学中の日本人 ＋ 日本語堪能な現地学生/社会人 計50名\n※日本での採用・就労を前提としています",
  },
  {
    label: "募集職種",
    value: "制限なし（エンジニア、営業、マーケティング、管理部門、企画など全職種）",
  },
  { label: "参加費", value: "企業・学生ともに 無料" },
  {
    label: "設備",
    value: "セミナールーム（各社テーブル1・椅子2）＋ 企業プレゼン専用ルーム2室（10名程度収容）",
  },
  { label: "主催", value: "Bridge International Asia Sdn Bhd" },
  { label: "協力", value: "マレーシア日本人商工会議所\nITCM（IT Community Malaysia）" },
];

const merits = [
  {
    num: "01",
    tag: "ハイスペック",
    color: "teal" as const,
    heading: "マレーシアに留学中の\n将来性のあるグローバル人材",
    body: "参加者はマレーシアに留学している日本人の大学生、もしくは日本語で会話ができるマレーシア人の学生または社会人。\n\n語学力（英語・日本語）、異文化適応力、海外で学び抜くバイタリティ、多様な専攻分野を専攻。\n\nグローバルな競争力を求める企業にとって、即戦力となる可能性があります。",
    badge: "質の高いグローバル人材に出会う機会",
  },
  {
    num: "02",
    tag: "ハイスピード",
    color: "orange" as const,
    heading: "その場で1次面接・次回選考予約が可能",
    body: "プレゼン→個別面談→選考予約が1日で完結。\n\n通常なら数週間かかる初期スクリーニングを1日で終わらせる超効率フローを実現します。",
    badge: "採用リードタイムを最短化",
  },
  {
    num: "03",
    tag: "ローコスト",
    color: "gold" as const,
    heading: "最小限の準備でOK。参加費無料",
    body: "会場・設備・学生集客は全て主催側が用意。企業側は担当者1〜2名、プレゼン資料、会社紹介チラシを持参するだけ。\n\n今回のフォーラム参加費は無料ですので、出張採用の中で最も低コストな選択肢です。",
    badge: "準備コスト・工数ゼロに近い",
  },
];

const scheduleItems = [
  {
    time: "10:00",
    title: "開場・個別面談の受付開始",
    desc: "個別面談用の整理券の配布を開始します。",
    dot: "teal",
  },
  {
    time: "10:20",
    title: "企業プレゼン開始",
    desc: "プレゼンルームA・B 同時進行。2社ずつ30分枠＋10分の入れ替え時間で実施。企業プレゼンは事前予約制（空席があれば当日参加も可能）。",
    dot: "dark",
  },
  {
    time: "13:30",
    title: "企業プレゼン終了",
    desc: "プレゼン終了後も個別面談は引き続き実施します。",
    dot: "dark",
  },
  {
    time: "16:00",
    title: "閉会",
    desc: "閉会後、企業間の情報交換も歓迎します。",
    dot: "teal",
  },
];

const scheduleTable = [
  { time: "10:20 – 10:50", a: "企業A", b: "企業B" },
  { time: "11:00 – 11:30", a: "企業C", b: "企業D" },
  { time: "11:40 – 12:10", a: "企業E", b: "企業F" },
  { time: "12:20 – 12:50", a: "企業G", b: "企業H" },
  { time: "13:00 – 13:30", a: "企業I", b: "企業J" },
];

const faqs = [
  {
    q: "どのような業種の企業が参加できますか？",
    a: "今回のフォーラムはIT関連企業に限られます。",
  },
  {
    q: "どのような参加者が来場されますか？",
    a: "マレーシアに留学中の日本人大学生、日本語で会話ができるマレーシア人（学生および社会人）を対象に参加者を募集いたします。参加する学生の学年の制限は設けていませんので、卒業するまでに1年以上かかる場合があります。",
  },
  {
    q: "参加者の見込み人数は？",
    a: "50名程度を予定しています。",
  },
  {
    q: "企業プレゼンや個別面談は日本語で行いますか？",
    a: "はい、日本語で実施してください。",
  },
  {
    q: "企業プレゼンの順番はどのように決めますか？",
    a: "お申し込みいただいた企業から先着順に企業プレゼン枠をご選択いただきます。（お申し込み後、事務局からご案内いたします。）",
  },
  {
    q: "企業側で準備することを教えてください。",
    a: "・企業プレゼンの内容\n・会社紹介パンフレットやチラシ（最大50枚程度、個別面談用）\n・マレーシアへの渡航（マレーシア在住者も可能）",
  },
];

const colorMap = {
  teal: {
    bar: "bg-teal",
    border: "border-t-4 border-teal",
    text: "text-teal",
    badge: "bg-teal/10 text-teal border border-teal/30",
    label: "text-white",
  },
  orange: {
    bar: "bg-forum-orange",
    border: "border-t-4 border-forum-orange",
    text: "text-forum-orange",
    badge: "bg-orange-50 text-forum-orange border border-forum-orange/30",
    label: "text-white",
  },
  gold: {
    bar: "bg-forum-gold",
    border: "border-t-4 border-forum-gold",
    text: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 border border-amber-200",
    label: "text-white",
  },
};

export default function Home() {
  return (
    <>
      {/* ── Hero (image overlay) ── */}
      <section className="relative h-screen flex flex-col">
        {/* Background image slideshow */}
        <HeroSlider />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy-950/55" />

        {/* Centered text + buttons */}
        <div className="relative z-10 flex-1 flex flex-col pt-16">
          {/* Main text — vertically centered、独立して中央固定 */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white font-black text-[min(10rem,14vw)] tracking-tight leading-none mb-0 drop-shadow-lg uppercase">
                KL CAREER FORUM
              </p>
              <p className="text-white font-black text-[min(10rem,14vw)] tracking-tight leading-none mb-8 drop-shadow-lg">
                2026
              </p>
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-forum-orange via-amber-400 to-forum-gold rounded-2xl px-10 py-3 shadow-xl gap-4">
                <span className="text-white font-black text-2xl md:text-3xl tracking-widest drop-shadow">
                  5 / 22 &nbsp; Fri
                </span>
                <span className="text-white font-black text-2xl md:text-3xl tracking-widest drop-shadow">
                  10:00 ～ 16:00
                </span>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom bar */}
        <div className="relative z-10 bg-navy-950/75 backdrop-blur-sm border-t border-white/10 py-3">
          <p className="text-white text-xs text-center">
            ⚠️ 企業申込締切：2026年4月10日（先着10社）／参加者申込締切：2026年4月15日
          </p>
        </div>
      </section>

      {/* ── Overview (light) ── */}
      <section className="py-16 md:py-20 bg-gray-50" id="overview">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading">
            KL Career Forum 2026 <span className="teal-accent">開催概要</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <tbody>
                {overview.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-gray-100 last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-5 py-4 font-bold text-navy-900 whitespace-nowrap w-48 border-r border-gray-100 align-top">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-gray-700 whitespace-pre-line leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Merits (white) ── */}
      <section className="py-16 md:py-20 bg-white" id="merits">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading">
            本イベントの<span className="teal-accent">参加メリット</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {merits.map((m) => {
              const c = colorMap[m.color];
              return (
                <div
                  key={m.num}
                  className={`bg-white rounded-xl overflow-hidden flex flex-col shadow-md border border-gray-200 ${c.border}`}
                >
                  <div className={`${c.bar} px-5 py-3 flex items-center gap-3`}>
                    <span className={`font-black text-2xl ${c.label}`}>{m.num}</span>
                    <span className={`font-black text-lg ${c.label}`}>【{m.tag}】</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className={`font-black text-lg mb-4 whitespace-pre-line ${c.text}`}>
                      {m.heading}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line flex-1">
                      {m.body}
                    </p>
                    <div className={`mt-5 rounded-lg px-4 py-2.5 text-sm font-bold ${c.badge}`}>
                      ✓ {m.badge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process (light) ── */}
      <section className="py-16 md:py-20 bg-gray-50" id="process">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading">
            会場構成：<span className="teal-accent">2ステップの採用プロセス</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-300">
            {/* STEP 1 */}
            <div className="bg-white p-8 border-t-4 border-teal">
              <p className="text-teal font-black text-xs tracking-widest mb-2 uppercase">
                STEP 1　企業プレゼンルーム
              </p>
              <h3 className="text-teal font-black text-xl mb-4">
                定員10名程度 × 2ルーム同時進行
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                自社の強み・働き方・キャリアパスをプレゼン形式で10名に深く伝える。
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                質疑応答で双方向の対話を創出し、「この会社で働きたい」という動機を当日中に醸成できます。
              </p>
              <p className="text-teal text-sm font-bold">1社あたり30分枠（Q&A込み）</p>
            </div>
            {/* STEP 2 */}
            <div className="relative bg-orange-50 p-8 border-t-4 border-forum-orange">
              <div className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-forum-gold rounded-full items-center justify-center text-navy-900 font-black text-xl z-10 shadow-lg">
                →
              </div>
              <p className="text-forum-orange font-black text-xs tracking-widest mb-2 uppercase">
                STEP 2　個別面談ルーム 面談デスク
              </p>
              <h3 className="text-forum-orange font-black text-xl mb-4">
                各社テーブル1・椅子2（1対1面談）
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                プレゼンで興味を持った学生が各社デスクへ直接アプローチ。
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                1対1の深掘り面談で即座にスキル・モチベーションを確認し、その場で次の選考ステップへ。
              </p>
              <p className="text-forum-orange text-sm font-bold">1次面接をその場で完結可能</p>
            </div>
          </div>
          <div className="bg-teal/10 border border-teal/30 rounded-xl p-4 text-center">
            <p className="text-teal font-bold">
              企業プレゼンで「動機」を作り →個別面談ルームで個別面談するプロセスとなります。
            </p>
          </div>
        </div>
      </section>

      {/* ── Schedule (white) ── */}
      <section className="py-16 md:py-20 bg-white" id="schedule">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading">
            当日<span className="teal-accent">タイムスケジュール</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              {scheduleItems.map((item, i) => (
                <div key={i} className="relative flex gap-5 mb-8 last:mb-0">
                  <div
                    className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-black text-xs z-10 ${
                      item.dot === "teal"
                        ? "bg-teal text-navy-900 shadow-md"
                        : "bg-gray-100 border border-gray-300 text-gray-700"
                    }`}
                  >
                    {item.time}
                  </div>
                  <div className="pt-3">
                    <p className="font-black text-navy-900 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-gray-400 text-xs mt-4 ml-20">
                ※参加企業の状況しだいで、プレゼン時間は変更になる場合があります。
              </p>
            </div>

            {/* Table */}
            <div>
              <h3 className="font-bold text-navy-900 mb-4">企業プレゼン スケジュール（予定）</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-teal text-navy-900">
                      <th className="px-4 py-3 font-black text-left">時間割</th>
                      <th className="px-4 py-3 font-black text-center">ルームA</th>
                      <th className="px-4 py-3 font-black text-center">ルームB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleTable.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-navy-900 font-bold">{row.time}</td>
                        <td className="px-4 py-3 text-gray-700 text-center">{row.a}</td>
                        <td className="px-4 py-3 text-gray-700 text-center">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (light) ── */}
      <section className="py-16 md:py-20 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-heading">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-teal font-bold mb-2">Q. {item.q}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  A. {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-teal/10 border border-teal/30 rounded-xl p-4 text-center">
            <p className="text-teal font-bold">
              ✓ ご質問がございましたら{" "}
              <Link href="/contact" className="underline hover:text-teal-dark transition-colors">
                運営事務局にお問合せ
              </Link>{" "}
              ください。
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA (dark, kept for contrast) ── */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-navy-950 via-[#0A1B3A] to-navy-900 relative overflow-hidden"
        id="register"
      >
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-teal/5 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-teal font-bold mb-2 text-lg">先着10社限定。</p>
          <h2 className="text-3xl md:text-5xl font-black text-forum-gold mb-4">
            今すぐ参加申込をご検討ください。
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            「このレベルの人材に無料で会えるなら、マレーシアへ飛んでいく価値があった」
            <br />
            と感じていただけるフォーラムを目指しています。
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex flex-col items-center gap-1">
              <a href="https://connection.com.my/event/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xl px-10 py-5">
                ▶ 企業として申込む
              </a>
              <span className="text-white/70 text-xs">※ 外部サイトに移動します</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Link href="/participants#entry" className="btn-secondary text-xl px-10 py-5">
                ▶ 参加者として申込む
              </Link>
              <span className="text-transparent text-xs select-none">_</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "📅", label: "企業申込締切", value: "2026年4月10日（金）" },
              { icon: "📅", label: "参加者申込締切", value: "2026年4月15日（水）" },
              { icon: "📧", label: "お問い合わせ", value: "contact", isLink: true },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <p className="text-teal text-sm font-bold mb-1">
                  {item.icon} {item.label}
                </p>
                {item.isLink ? (
                  <Link href="/contact" className="text-teal hover:underline font-black">
                    お問い合わせはこちら →
                  </Link>
                ) : (
                  <p className="text-white font-black">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
