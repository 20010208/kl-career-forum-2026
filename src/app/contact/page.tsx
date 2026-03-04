"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  category: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  category: "",
  message: "",
};

export default function ContactPage() {
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
    if (!form.email.trim()) newErrors.email = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.category) newErrors.category = "お問い合わせ種別を選択してください";
    if (!form.message.trim()) newErrors.message = "メッセージを入力してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // TODO: Connect to email service (Resend/SendGrid) or Supabase
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form:", form);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0A2040]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            <span className="text-teal">お問い合わせ</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            KL Career Forum 2026 に関するご質問・ご要望はこちらからお気軽にご連絡ください。
            <br />
            事務局より通常 2〜3 営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="py-8 bg-teal/5 border-y border-teal/20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-4">よくあるご質問はこちら：</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://connection.com.my/event/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              企業向け FAQ →
            </a>
            <Link
              href="/participants#faq"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              参加者向け FAQ →
            </Link>
            <Link
              href="/#faq"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              一般 FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {isSuccess ? (
            <div className="bg-teal/10 border border-teal/30 rounded-2xl p-10 text-center">
              <div className="text-teal text-6xl mb-6">✓</div>
              <h3 className="text-2xl font-black text-navy-900 mb-3">
                お問い合わせを受け付けました
              </h3>
              <p className="text-gray-600 mb-2">
                ご登録のメールアドレスに確認メールをお送りします。
              </p>
              <p className="text-gray-500 text-sm mb-8">
                通常 2〜3 営業日以内にご返信いたします。
              </p>
              <Link
                href="/"
                className="bg-teal hover:bg-teal-dark text-navy-900 px-8 py-3 rounded-lg font-black transition-colors inline-block"
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* 名前 */}
                <div>
                  <label className="form-label">
                    お名前 <span className="text-forum-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例：山田 太郎"
                    className="form-input"
                  />
                  {errors.name && (
                    <p className="text-forum-orange text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* メール */}
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

                {/* 種別 */}
                <div>
                  <label className="form-label">
                    お問い合わせ種別 <span className="text-forum-orange">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">選択してください</option>
                    <option value="company">企業として参加について</option>
                    <option value="participant">参加者として参加について</option>
                    <option value="press">取材・メディアについて</option>
                    <option value="sponsor">協賛・協力について</option>
                    <option value="other">その他</option>
                  </select>
                  {errors.category && (
                    <p className="text-forum-orange text-xs mt-1">{errors.category}</p>
                  )}
                </div>

                {/* メッセージ */}
                <div>
                  <label className="form-label">
                    メッセージ <span className="text-forum-orange">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="ご質問・ご要望の内容をご記入ください"
                    className="form-textarea"
                  />
                  {errors.message && (
                    <p className="text-forum-orange text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Privacy */}
                <p className="text-gray-500 text-xs leading-relaxed">
                  ご入力いただいた個人情報は、お問い合わせへの回答目的のみに使用します。
                  第三者への提供は行いません。
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
                    "▶ 送信する"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ── Event Info ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-black text-navy-900 mb-6">運営事務局</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                { label: "主催", value: "Bridge International Asia Sdn Bhd" },
                { label: "協力", value: "マレーシア日本人商工会議所（JACTIM）\nITCM（IT Community Malaysia）" },
                { label: "開催日", value: "2026年5月22日（金）10:00 – 16:00" },
                { label: "会場", value: "JACTIM セミナールーム（クアラルンプール）" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                  <p className="text-navy-900 font-medium whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://connection.com.my/event/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              企業申込はこちら
            </a>
            <Link href="/participants#entry" className="btn-secondary">
              参加者申込はこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
