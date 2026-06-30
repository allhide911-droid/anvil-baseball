"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#programs", label: "プログラム" },
    { href: "#features", label: "選ばれる理由" },
    { href: "#coaches", label: "コーチ陣" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[#dc2626] text-2xl font-black tracking-widest leading-none">
              ⬟
            </span>
            <div className="leading-tight">
              <span className="block text-white font-black text-sm tracking-[0.2em] uppercase">
                Anvil
              </span>
              <span className="block text-[#dc2626] font-bold text-[10px] tracking-[0.15em] uppercase">
                Baseball Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2 rounded transition-colors duration-200 tracking-wide"
            >
              無料体験申込
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#333333]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium py-1 border-b border-[#222222]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2.5 rounded text-center transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              無料体験申込
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
