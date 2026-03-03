import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KL Career Forum 2026 | マレーシア×日本IT企業 採用フォーラム",
  description:
    "クアラルンプールで初開催。マレーシア留学中の日本人・日本語堪能なマレーシア人と日本のIT企業をつなぐキャリアフォーラム。2026年5月22日（金）開催。参加費無料。",
  keywords: ["KL Career Forum", "マレーシア", "就職活動", "日系IT企業", "クアラルンプール", "採用"],
  openGraph: {
    title: "KL Career Forum 2026 | マレーシアで磨かれたグローバル人材を日本へ",
    description:
      "マレーシア留学中の日本人・日本語堪能な現地学生と日本のIT企業をつなぐキャリアフォーラム。2026年5月22日（金）クアラルンプール初開催。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
