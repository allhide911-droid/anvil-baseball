import Image from "next/image";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/team.jpg"
        fill
        alt="ANVILチームの集合写真"
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#dc2626]/15 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 border border-[#dc2626]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
          <span className="text-[#dc2626] text-xs font-bold tracking-widest uppercase">
            Join ANVIL
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          あの日、入れてよかった。
          <br />
          <span className="text-[#dc2626]">その一言のために。</span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          10年後、あなたのお子さんがそう言える日のために。
          <br />
          まずは、無料体験の一歩を。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-10 py-4 rounded text-base tracking-wide transition-colors duration-200 w-full sm:w-auto"
          >
            無料体験を申し込む
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-[#555555] hover:border-white text-white font-bold px-10 py-4 rounded text-base tracking-wide transition-colors duration-200 w-full sm:w-auto"
          >
            まずは相談してみる
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-8 text-gray-500 text-sm">
          完全無料 · 勧誘なし · グローブ不要
        </p>
      </div>
    </section>
  );
}
