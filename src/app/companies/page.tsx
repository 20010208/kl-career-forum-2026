"use client";

import { useState } from "react";
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

const jobCategories = [
  "エンジニア/開発",
  "営業",
  "マーケティング",
  "管理部門",
  "企画・PM",
  "その他",
];

type FormData = {
  companyName: string;
  contactName: string;
  position: string;
  email: string;
  phone: string;
  prefecture: string;
  jobCategories: string[];
  attendees: string;
  presentationRequest: string;
  remarks: string;
};

const initialForm: FormData = {
  companyName: "",
  contactName: "",
  position: "",
  email: "",
  phone: "",
  prefecture: "",
  jobCategories: [],
  attendees: "",
  presentationRequest: "",
  remarks: "",
};

export default function CompaniesPage() {
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

  const handleCheckbox = (category: string) => {
    setForm((prev) => ({
      ...prev,
      jobCategories: prev.jobCategories.includes(category)
        ? prev.jobCategories.filter((c) => c !== category)
        : [...prev.jobCategories, category],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.companyName.trim()) newErrors.companyName = "会社名を入力してください";
    if (!form.contactName.trim()) newErrors.contactName = "担当者氏名を入力してください";
    if (!form.email.trim()) newErrors.email = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.phone.trim()) newErrors.phone = "電話番号を入力してください";
    if (!form.prefecture.trim()) newErrors.prefecture = "所在地（都道府県）を入力してください";
    if (form.jobCategories.length === 0)
      newErrors.jobCategories = "採用予定職種を1つ以上選択してください";
    if (!form.attendees) newErrors.attendees = "参加予定人数を選択してください";
    if (!form.presentationRequest)
      newErrors.presentationRequest = "企業プレゼンの希望を選択してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // TODO: Connect to email service (Resend/SendGrid) or Supabase
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Company entry:", form);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

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
            <a href="#entry" className="btn-primary">
              ▶ 今すぐ参加申込
            </a>
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
        </div>
      </section>

      {/* ── Entry Form ── */}
      <section className="py-16 md:py-20 bg-white" id="entry">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-heading">
            企業<span className="teal-accent">参加申込フォーム</span>
          </h2>
          <div className="bg-forum-orange/10 border border-forum-orange/30 rounded-xl p-4 mb-8 flex items-start gap-3">
            <span className="text-forum-orange text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-forum-orange font-bold text-sm">先着10社限定</p>
              <p className="text-gray-600 text-sm">
                申込締切：2026年4月10日（金）。定員に達し次第締切となります。
              </p>
            </div>
          </div>

          {isSuccess ? (
            <div className="bg-teal/10 border border-teal/30 rounded-2xl p-10 text-center">
              <div className="text-teal text-6xl mb-6">✓</div>
              <h3 className="text-2xl font-black text-navy-900 mb-3">
                お申し込みを受け付けました！
              </h3>
              <p className="text-gray-600 mb-2">
                ご登録のメールアドレスに確認メールをお送りします。
              </p>
              <p className="text-gray-500 text-sm mb-8">
                事務局より数日以内にご連絡いたします。
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
              {/* 会社名 */}
              <div>
                <label className="form-label">
                  会社名 <span className="text-forum-orange">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="例：株式会社テクノコープ"
                  className="form-input"
                />
                {errors.companyName && (
                  <p className="text-forum-orange text-xs mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* 担当者 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    担当者氏名 <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="例：山田 太郎"
                    className="form-input"
                  />
                  {errors.contactName && (
                    <p className="text-forum-orange text-xs mt-1">{errors.contactName}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">役職・部署（任意）</label>
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="例：人事部 採用担当"
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
                    placeholder="example@company.co.jp"
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="text-forum-orange text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">
                    電話番号 <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03-0000-0000"
                    className="form-input"
                  />
                  {errors.phone && (
                    <p className="text-forum-orange text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* 所在地 */}
              <div>
                <label className="form-label">
                  本社所在地（都道府県） <span className="text-forum-orange">*</span>
                </label>
                <input
                  type="text"
                  name="prefecture"
                  value={form.prefecture}
                  onChange={handleChange}
                  placeholder="例：東京都"
                  className="form-input"
                />
                {errors.prefecture && (
                  <p className="text-forum-orange text-xs mt-1">{errors.prefecture}</p>
                )}
              </div>

              {/* 採用職種 */}
              <div>
                <label className="form-label">
                  採用予定職種（複数選択可） <span className="text-forum-orange">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {jobCategories.map((cat) => (
                    <label
                      key={cat}
                      className={`flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2.5 border transition-colors ${
                        form.jobCategories.includes(cat)
                          ? "bg-teal/20 border-teal text-teal"
                          : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.jobCategories.includes(cat)}
                        onChange={() => handleCheckbox(cat)}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{cat}</span>
                    </label>
                  ))}
                </div>
                {errors.jobCategories && (
                  <p className="text-forum-orange text-xs mt-1">{errors.jobCategories}</p>
                )}
              </div>

              {/* 参加人数・プレゼン希望 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    参加予定人数 <span className="text-forum-orange">*</span>
                  </label>
                  <select
                    name="attendees"
                    value={form.attendees}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">選択してください</option>
                    <option value="1">1名</option>
                    <option value="2">2名</option>
                  </select>
                  {errors.attendees && (
                    <p className="text-forum-orange text-xs mt-1">{errors.attendees}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">
                    企業プレゼン希望（30分枠） <span className="text-forum-orange">*</span>
                  </label>
                  <select
                    name="presentationRequest"
                    value={form.presentationRequest}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">選択してください</option>
                    <option value="yes">希望する</option>
                    <option value="no">希望しない</option>
                    <option value="undecided">未定</option>
                  </select>
                  {errors.presentationRequest && (
                    <p className="text-forum-orange text-xs mt-1">{errors.presentationRequest}</p>
                  )}
                </div>
              </div>

              {/* 備考 */}
              <div>
                <label className="form-label">備考・ご質問（任意）</label>
                <textarea
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                  rows={4}
                  placeholder="ご質問・ご要望等があればご記入ください"
                  className="form-textarea"
                />
              </div>

              {/* Privacy note */}
              <p className="text-gray-500 text-xs leading-relaxed">
                ご入力いただいた個人情報は、KL Career Forum 2026
                の運営目的のみに使用し、第三者に提供することはありません。
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forum-orange hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-black text-lg transition-colors flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    送信中...
                  </>
                ) : (
                  "▶ 参加申込を送信する"
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
