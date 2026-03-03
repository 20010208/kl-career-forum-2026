"use client";

import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    icon: "🏢",
    title: "日本のIT企業に直接会える",
    desc: "日本国内採用を積極的に行うIT企業が集まります。帰国後すぐに就職活動を始めなくても、この1日で内定への道が拓けます。",
  },
  {
    icon: "⚡",
    title: "1日でスピード選考",
    desc: "プレゼンを聞いて気になった企業に直接アプローチ。1対1の面談で当日中に次の選考ステップへ進めます。",
  },
  {
    icon: "💰",
    title: "参加費完全無料",
    desc: "学生・社会人問わず参加費は完全無料です。会場・設備は全て運営側が準備します。",
  },
  {
    icon: "🌏",
    title: "語学力・グローバル経験をアピール",
    desc: "マレーシアでの経験・語学力は日本のIT企業にとって大きな強みです。あなたのグローバルスキルを存分にアピールできます。",
  },
];

type FormData = {
  name: string;
  nameKana: string;
  category: string;
  affiliation: string;
  grade: string;
  email: string;
  phone: string;
  stayStatus: string;
  japaneseLevel: string;
  englishLevel: string;
  desiredJobs: string;
  selfPr: string;
  howDidYouKnow: string;
};

const initialForm: FormData = {
  name: "",
  nameKana: "",
  category: "",
  affiliation: "",
  grade: "",
  email: "",
  phone: "",
  stayStatus: "",
  japaneseLevel: "",
  englishLevel: "",
  desiredJobs: "",
  selfPr: "",
  howDidYouKnow: "",
};

export default function ParticipantsPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "お名前を入力してください";
    if (!form.nameKana.trim()) newErrors.nameKana = "ふりがなを入力してください";
    if (!form.category) newErrors.category = "区分を選択してください";
    if (!form.affiliation.trim()) newErrors.affiliation = "大学名・所属を入力してください";
    if (!form.email.trim()) newErrors.email = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.stayStatus) newErrors.stayStatus = "マレーシア滞在状況を選択してください";
    if (!form.japaneseLevel) newErrors.japaneseLevel = "日本語レベルを選択してください";
    if (!form.desiredJobs.trim()) newErrors.desiredJobs = "希望職種・業界を入力してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // TODO: Connect to email service (Resend/SendGrid) or Supabase
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Participant entry:", form);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0A2040] overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-teal/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-teal font-bold text-sm mb-3 uppercase tracking-widest">
            For Participants
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            マレーシアから
            <br />
            <span className="text-teal">日本のIT業界へ飛び込もう</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
            マレーシア留学中の日本人・日本語堪能なマレーシア人の方を対象に参加者を募集しています。
            日本のIT企業と1日でつながれる、唯一の場所です。
          </p>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 inline-block">
            <p className="text-white/80 text-sm">
              <span className="text-teal font-bold">対象：</span>
              マレーシア留学中の日本人大学生 ＋ 日本語堪能な現地学生・社会人（計50名）
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#entry" className="btn-secondary">
              ▶ 今すぐ参加登録
            </a>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="text-teal font-bold">参加費：完全無料</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Event at a glance ── */}
      <section className="py-10 bg-teal/5 border-y border-teal/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "開催日", value: "5月22日（金）" },
              { label: "時間", value: "10:00 – 16:00" },
              { label: "会場", value: "JACTIM（KL）" },
              { label: "参加費", value: "無料" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                <p className="text-teal font-black text-sm md:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-heading">
            参加する<span className="teal-accent">メリット</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4"
              >
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-black text-navy-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-heading">
            当日の<span className="teal-accent">流れ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "受付・整理券取得",
                desc: "10:00から受付開始。個別面談用の整理券を受け取ります。",
              },
              {
                num: "02",
                title: "企業プレゼンを聴講",
                desc: "興味のある企業のプレゼン（30分）に参加。気軽に質問できます。",
              },
              {
                num: "03",
                title: "個別面談・選考へ",
                desc: "気になった企業のデスクへ直接アプローチ。1対1面談でその日のうちに選考へ。",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-navy-900 font-black mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-black text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Entry Form ── */}
      <section className="py-16 md:py-20 bg-white" id="entry">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-heading">
            参加者<span className="teal-accent">エントリーフォーム</span>
          </h2>
          <div className="bg-teal/10 border border-teal/30 rounded-xl p-4 mb-8 flex items-start gap-3">
            <span className="text-teal text-xl flex-shrink-0">ℹ️</span>
            <div>
              <p className="text-teal font-bold text-sm">参加者申込締切：2026年4月15日（水）</p>
              <p className="text-gray-600 text-sm">定員50名になり次第、受付を終了します。</p>
            </div>
          </div>

          {isSuccess ? (
            <div className="bg-teal/10 border border-teal/30 rounded-2xl p-10 text-center">
              <div className="text-teal text-6xl mb-6">✓</div>
              <h3 className="text-2xl font-black text-navy-900 mb-3">
                エントリーを受け付けました！
              </h3>
              <p className="text-gray-600 mb-2">
                ご登録のメールアドレスに確認メールをお送りします。
              </p>
              <p className="text-gray-500 text-sm mb-8">
                当日の詳細情報（会場・持ち物等）は、開催前にメールでご案内いたします。
                <br />
                ご不明な点は{" "}
                <Link href="/contact" className="text-teal underline">
                  お問い合わせ
                </Link>{" "}
                よりご連絡ください。
              </p>
              <Link
                href="/"
                className="bg-teal hover:bg-teal-dark text-navy-900 px-8 py-3 rounded-lg font-black transition-colors inline-block"
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* 名前 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    お名前 <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例：山田 太郎 / Ahmad Bin Ali"
                    className="form-input"
                  />
                  {errors.name && (
                    <p className="text-forum-orange text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">
                    ふりがな <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="nameKana"
                    value={form.nameKana}
                    onChange={handleChange}
                    placeholder="例：やまだ たろう"
                    className="form-input"
                  />
                  {errors.nameKana && (
                    <p className="text-forum-orange text-xs mt-1">{errors.nameKana}</p>
                  )}
                </div>
              </div>

              {/* 区分 */}
              <div>
                <label className="form-label">
                  区分 <span className="text-forum-orange">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {["学生", "社会人"].map((cat) => (
                    <label
                      key={cat}
                      className={`flex items-center gap-2 cursor-pointer rounded-lg px-4 py-3 border transition-colors ${
                        form.category === cat
                          ? "bg-teal/20 border-teal text-teal"
                          : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={form.category === cat}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-medium">{cat}</span>
                    </label>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-forum-orange text-xs mt-1">{errors.category}</p>
                )}
              </div>

              {/* 所属・学年 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    大学名・所属 <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="affiliation"
                    value={form.affiliation}
                    onChange={handleChange}
                    placeholder="例：マラヤ大学 / ○○株式会社"
                    className="form-input"
                  />
                  {errors.affiliation && (
                    <p className="text-forum-orange text-xs mt-1">{errors.affiliation}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">学年・卒業年度（任意）</label>
                  <input
                    type="text"
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    placeholder="例：3年生 / 2026年3月卒業予定"
                    className="form-input"
                  />
                </div>
              </div>

              {/* メール・電話 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    メールアドレス <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="text-forum-orange text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">電話番号（任意）</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+60-12-000-0000"
                    className="form-input"
                  />
                </div>
              </div>

              {/* 滞在状況 */}
              <div>
                <label className="form-label">
                  マレーシア滞在状況 <span className="text-forum-orange">*</span>
                </label>
                <select
                  name="stayStatus"
                  value={form.stayStatus}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">選択してください</option>
                  <option value="studying">留学中（学生ビザ）</option>
                  <option value="living">在住（就労・MM2H等）</option>
                  <option value="local">マレーシア在住（現地の方）</option>
                  <option value="other">その他</option>
                </select>
                {errors.stayStatus && (
                  <p className="text-forum-orange text-xs mt-1">{errors.stayStatus}</p>
                )}
              </div>

              {/* 語学力 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    日本語レベル <span className="text-forum-orange">*</span>
                  </label>
                  <select
                    name="japaneseLevel"
                    value={form.japaneseLevel}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">選択してください</option>
                    <option value="native">ネイティブ（日本人）</option>
                    <option value="n1">N1相当</option>
                    <option value="n2">N2相当</option>
                    <option value="n3">N3相当</option>
                    <option value="n4">N4以下</option>
                  </select>
                  {errors.japaneseLevel && (
                    <p className="text-forum-orange text-xs mt-1">{errors.japaneseLevel}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">英語レベル（任意）</label>
                  <select
                    name="englishLevel"
                    value={form.englishLevel}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">選択してください</option>
                    <option value="native">ネイティブ・流暢</option>
                    <option value="business">ビジネスレベル</option>
                    <option value="conversational">日常会話</option>
                    <option value="basic">基礎レベル</option>
                  </select>
                </div>
              </div>

              {/* 希望職種 */}
              <div>
                <label className="form-label">
                  希望職種・業界 <span className="text-forum-orange">*</span>
                </label>
                <input
                  type="text"
                  name="desiredJobs"
                  value={form.desiredJobs}
                  onChange={handleChange}
                  placeholder="例：ITエンジニア、Webマーケティング、営業（IT業界）"
                  className="form-input"
                />
                {errors.desiredJobs && (
                  <p className="text-forum-orange text-xs mt-1">{errors.desiredJobs}</p>
                )}
              </div>

              {/* 自己PR */}
              <div>
                <label className="form-label">自己PR・アピールポイント（任意）</label>
                <textarea
                  name="selfPr"
                  value={form.selfPr}
                  onChange={handleChange}
                  rows={4}
                  placeholder="あなたの強みや、マレーシアでの経験などをご記入ください（200字程度）"
                  className="form-textarea"
                />
              </div>

              {/* 知ったきっかけ */}
              <div>
                <label className="form-label">KL Career Forum を知ったきっかけ（任意）</label>
                <select
                  name="howDidYouKnow"
                  value={form.howDidYouKnow}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">選択してください</option>
                  <option value="sns">SNS（Instagram / Twitter / Facebook）</option>
                  <option value="friend">友人・知人の紹介</option>
                  <option value="university">大学・学校の掲示板・教員</option>
                  <option value="jactim">JACTIM / ITCM</option>
                  <option value="search">インターネット検索</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Privacy */}
              <p className="text-gray-500 text-xs leading-relaxed">
                ご入力いただいた個人情報は、KL Career Forum 2026
                の運営目的（当日の参加管理・企業への情報共有）のみに使用します。
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal hover:bg-teal-dark disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 py-4 rounded-xl font-black text-lg transition-colors flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-navy-800/30 border-t-navy-900 rounded-full animate-spin" />
                    送信中...
                  </>
                ) : (
                  "▶ エントリーを送信する"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-heading">
            参加者向け <span className="teal-accent">FAQ</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "参加に条件はありますか？",
                a: "マレーシアに留学中または在住の日本人、あるいは日本語で会話ができるマレーシア人の方が対象です。学年・卒業年度の制限はありません。",
              },
              {
                q: "日本での就職が前提ですか？",
                a: "はい、今回のフォーラムに参加する企業は日本国内採用・勤務を前提としています。日本で働くことを希望されている方向けのイベントです。",
              },
              {
                q: "スーツや履歴書は必要ですか？",
                a: "服装はスマートカジュアル〜ビジネスカジュアルを推奨しています。履歴書の持参は任意ですが、持参することでアピールの機会が増えます。",
              },
              {
                q: "当日、すべての企業ブースに行けますか？",
                a: "はい、個別面談ルームは自由に訪問できます。企業プレゼンは事前予約制（空席があれば当日参加も可能）です。",
              },
              {
                q: "面接はその日に行われますか？",
                a: "1次面接に相当する個別面談がその日に実施されます。企業によっては当日中に次の選考日程が決まる場合があります。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-teal font-bold mb-2">Q. {item.q}</p>
                <p className="text-gray-700 text-sm leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">その他のご質問は</p>
            <Link href="/contact" className="btn-secondary">
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
