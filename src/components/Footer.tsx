import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-teal/20 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="text-teal font-black text-xl">KL Career Forum</span>
              <span className="text-forum-gold font-black text-xl ml-2">2026</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              マレーシアで磨かれたグローバル基準の才能を日本へ。
              <br />
              クアラルンプール初開催のキャリアフォーラムです。
            </p>
            <div className="flex gap-3">
              <Link
                href="/companies#entry"
                className="bg-forum-orange hover:bg-orange-600 text-white px-4 py-2 rounded font-bold text-sm transition-colors"
              >
                企業申込
              </Link>
              <Link
                href="/participants#entry"
                className="bg-teal hover:bg-teal-dark text-navy-900 px-4 py-2 rounded font-bold text-sm transition-colors"
              >
                参加者申込
              </Link>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-white font-bold mb-4">開催概要</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-0.5">📅</span>
                <span>2026年5月22日（金）10:00 – 16:00</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-0.5">📍</span>
                <span>マレーシア日本人商工会議所（JACTIM）クアラルンプール</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-0.5">💰</span>
                <span>参加費：企業・参加者ともに無料</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-0.5">🏢</span>
                <span>主催：Bridge International Asia Sdn Bhd</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-0.5">🤝</span>
                <span>協力：JACTIM / ITCM</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal text-sm transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-400 hover:text-teal text-sm transition-colors"
                >
                  企業の方へ
                </Link>
              </li>
              <li>
                <Link
                  href="/participants"
                  className="text-gray-400 hover:text-teal text-sm transition-colors"
                >
                  参加者の方へ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-teal text-sm transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
            <div className="mt-6 bg-navy-800 rounded-lg p-4 border border-gray-700">
              <p className="text-teal text-xs font-bold mb-1">企業申込締切</p>
              <p className="text-white font-black text-sm">2026年4月10日（金）先着10社</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Bridge International Asia Sdn Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
