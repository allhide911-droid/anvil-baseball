"use client";

import { useState } from "react";

const faqs = [
  {
    q: "野球経験がなくても入れますか？",
    a: "はい。入会者の70%以上が未経験からのスタートです。バットの握り方から丁寧に指導しますので、全くの初めてでも安心してお越しください。",
  },
  {
    q: "何歳から参加できますか？",
    a: "小学1年生（6歳）から受け付けています。学年に合わせたコース（キッズ・ジュニア・アドバンス）を用意しています。",
  },
  {
    q: "道具（グローブ・バット）は自分で用意が必要ですか？",
    a: "体験時はすべて無料で貸し出します。入会後は担当コーチが一人ひとりに合った選び方をアドバイスします。",
  },
  {
    q: "少年野球チームに所属しながら通えますか？",
    a: "もちろん可能です。チーム練習の補強・技術向上として活用されている方も多くいます。スケジュールも柔軟に対応します。",
  },
  {
    q: "無料体験はいつ開催していますか？",
    a: "毎週土曜・日曜に開催しています。フォームから希望日時をお知らせください。コーチが直接ご連絡します。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "月額16,000〜18,000円です（コース・学年によって異なります）。入会金・追加費用は入会前にすべて開示します。隠れた費用は一切ありません。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              よくある
              <br />
              <span className="text-[#dc2626]">ご質問</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              お気軽にお問い合わせください。
              <br />
              ここにない質問も、いつでも
              <a href="#contact" className="text-[#dc2626] hover:underline">
                お問い合わせ
              </a>
              からどうぞ。
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  openIndex === i
                    ? "bg-[#1a1a1a] border-[#dc2626]/40"
                    : "bg-[#111111] border-[#2a2a2a] hover:border-[#444444]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#dc2626] font-black text-sm flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="text-white font-bold text-sm leading-relaxed">
                      {faq.q}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-[#dc2626] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-5 border-t border-[#2a2a2a]">
                    <div className="flex gap-3 pt-4">
                      <span className="text-gray-500 font-black text-sm flex-shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
