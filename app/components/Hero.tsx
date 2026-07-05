import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        fill
        priority
        alt=""
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#dc2626]/10 to-transparent pointer-events-none" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.025] select-none leading-none tracking-tighter">
          ANVIL
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 border border-[#dc2626]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
            <span className="text-[#dc2626] text-xs font-bold tracking-widest uppercase">
              Baseball Academy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
            10年後、あの教室に
            <br />
            <span className="text-[#dc2626]">入れてよかった。</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            ANVIL BASEBALL ACADEMYは、野球の技術だけでなく、
            10年後に誇れる人間力を育てる本格的なベースボールスクールです。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded text-base tracking-wide transition-colors duration-200"
            >
              プログラムを見る
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
              className="inline-flex items-center justify-center gap-2 border border-[#444444] hover:border-white text-white font-bold px-8 py-4 rounded text-base tracking-wide transition-colors duration-200"
            >
              無料体験を申し込む
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-px bg-[#333333] rounded-lg overflow-hidden max-w-2xl">
          {[
            { value: "150+", label: "在籍生徒数" },
            { value: "10年+", label: "指導実績" },
            { value: "12名", label: "甲子園出場者" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111111] px-6 py-5 text-center"
            >
              <div className="text-3xl font-black text-[#dc2626] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#444444] to-transparent" />
      </div>
    </section>
  );
}
