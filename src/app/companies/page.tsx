import Link from "next/link";

const steps = [
  {
    step: "STEP 1",
    date: "〜 2026年4月10日",
    color: "teal" as const,
    title: "企業参加申込み",
    desc: "申込フォームに企業情報・採用予定職種・担当者名を入力するだけ。先着10社に達し次第締切となります。",
    note: "締切り：2026年4月10日（先着順）\n参加企業はIT関連企業に限られます",
    badge: "準備物：担当者情報・企業紹介・採用ポジション概要",
  },
  {
    step: "STEP 2",
    date: "2026年4月20日",
    color: "orange" as const,
    title: "参加者受付開始\n運営から参加者情報を共有",
    desc: "事前に企業プレゼンに申し込みがあった学生の情報を共有。あらかじめ参加者の情報を収集して対策しておくことで当日の面談活動がスムーズになります。",
    note: "",
    badge: "準備物：プレゼン資料（30分用）・会社紹介チラシ",
  },
  {
    step: "STEP 3",
    date: "2026年5月22日（金）",
    color: "dark" as const,
    title: "当日参加 → 選考開始",
    desc: "担当者1〜2名がクアラルンプールへ渡航し、プレゼン30分＋個別面談で、1日に最大数十名と接触できます。",
    note: "",
    badge: "ゴール：面談後その日中に次回選考の日程を確定",
  },
];

export default function CompaniesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0A2040] overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-forum-orange/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-forum-orange font-bold text-sm mb-3 uppercase tracking-widest">
            For Companies
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            日本のIT企業様へ
            <br />
            <span className="text-forum-gold">グローバル人材を採用しませんか</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            マレーシアで磨かれた日英バイリンガルの即戦力人材と、1日で出会える採用イベントです。
            準備は最小限、コストはゼロ。先着10社限定のご参加をお待ちしています。
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col items-start gap-1">
              <a
                href="https://connection.com.my/event/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ▶ 今すぐ参加申込
              </a>
              <span className="text-white/70 text-xs">※ 外部サイトに移動します</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-forum-orange font-bold">申込締切：2026年4月10日（金）</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Numbers ── */}
      <section className="py-10 bg-teal/5 border-y border-teal/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
            {[
              { num: "10", unit: "社", label: "参加企業（先着）" },
              { num: "50", unit: "名", label: "参加者見込み数" },
              { num: "0", unit: "円", label: "参加費" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-teal font-black text-3xl md:text-4xl">
                  {item.num}
                  <span className="text-lg ml-1">{item.unit}</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="py-16 md:py-20 bg-gray-50" id="steps">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-heading">
            企業の<span className="teal-accent">参加ステップ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border ${
                  s.color === "teal"
                    ? "border-teal bg-teal/5"
                    : s.color === "orange"
                    ? "border-forum-orange bg-forum-orange/5"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div
                  className={`px-5 py-3 ${
                    s.color === "teal"
                      ? "bg-teal text-navy-900"
                      : s.color === "orange"
                      ? "bg-forum-orange text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p className="font-black text-sm">{s.step}</p>
                  <p className="font-bold text-xs opacity-80">{s.date}</p>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-navy-900 text-lg mb-3 whitespace-pre-line">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  {s.note && (
                    <p className="text-gray-500 text-xs mb-3 whitespace-pre-line">{s.note}</p>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-xs font-bold ${
                      s.color === "teal"
                        ? "bg-teal/20 text-teal"
                        : s.color === "orange"
                        ? "bg-forum-orange/20 text-forum-orange"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {s.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-teal/10 border border-teal/30 rounded-xl p-4 text-center">
            <p className="text-teal font-bold">
              ✓ 企業側のお申し込みは簡単です。複雑な手続きは一切ありません。
            </p>
          </div>
          <div className="mt-8 text-center flex flex-col items-center gap-1">
            <a
              href="https://connection.com.my/event/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              ▶ 企業として申し込む
            </a>
            <span className="text-gray-500 text-xs">※ 外部サイトに移動します</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-heading">
            企業向け <span className="teal-accent">FAQ</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "参加できる業種に制限はありますか？",
                a: "今回のフォーラムはIT関連企業に限られます。",
              },
              {
                q: "企業プレゼンは必須ですか？",
                a: "企業プレゼンは任意です。ただし、プレゼンを実施することで参加者との接触数が大幅に増えるため、強く推奨しています。",
              },
              {
                q: "マレーシアに拠点がない企業でも参加できますか？",
                a: "はい、参加可能です。日本国内採用・勤務を前提とした採用活動であれば、マレーシアに拠点がない企業様でもご参加いただけます。",
              },
              {
                q: "企業側で準備することを教えてください。",
                a: "・企業プレゼンの内容（30分用）\n・会社紹介パンフレットやチラシ（最大50枚程度、個別面談用）\n・マレーシアへの渡航（マレーシア在住者も可能）",
              },
              {
                q: "企業プレゼンの順番はどのように決まりますか？",
                a: "お申し込み後、先着順に企業プレゼン枠をご選択いただきます。事務局からご案内いたします。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-forum-orange font-bold mb-2">Q. {item.q}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  A. {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">その他のご質問は</p>
            <Link href="/contact" className="btn-primary">
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
