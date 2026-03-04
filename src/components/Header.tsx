"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/companies", label: "企業の方へ" },
  { href: "/participants", label: "参加者の方へ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
          <div className="leading-tight">
            <span className="text-teal font-black text-sm md:text-base tracking-wide">
              KL Career Forum
            </span>
            <span className="text-forum-gold font-black text-sm md:text-base ml-2">2026</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-teal" : "text-gray-600 hover:text-teal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <div className="flex flex-col items-center gap-0.5">
            <a
              href="https://connection.com.my/event/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forum-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-black transition-colors"
            >
              企業申込
            </a>
            <span className="text-gray-400 text-[10px]">※ 外部サイト</span>
          </div>
          <Link
            href="/participants#entry"
            className="bg-teal hover:bg-teal-dark text-navy-900 px-4 py-2 rounded-lg text-sm font-black transition-colors"
          >
            参加者申込
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="メニュー開閉"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium py-1 ${
                pathname === link.href ? "text-teal" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-gray-200">
            <div className="flex-1 flex flex-col items-center gap-0.5">
              <a
                href="https://connection.com.my/event/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-forum-orange text-white py-2.5 rounded-lg font-black text-sm"
                onClick={() => setIsOpen(false)}
              >
                企業申込
              </a>
              <span className="text-gray-400 text-[10px]">※ 外部サイト</span>
            </div>
            <Link
              href="/participants#entry"
              className="flex-1 text-center bg-teal text-navy-900 py-2.5 rounded-lg font-black text-sm"
              onClick={() => setIsOpen(false)}
            >
              参加者申込
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
