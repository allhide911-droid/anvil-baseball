const features = [
  {
    number: "01",
    title: "現役プロが直接指導",
    description:
      "NPBやアマチュア球界で活躍した経験を持つコーチ陣が直接指導。実戦で培われたリアルな知識と技術を伝えます。",
  },
  {
    number: "02",
    title: "データ分析による技術向上",
    description:
      "高速カメラと動作解析ソフトウェアを活用し、スイング・投球フォームを数値化。客観的なデータに基づいた改善プランを提供します。",
  },
  {
    number: "03",
    title: "少人数制の徹底指導",
    description:
      "1クラス最大6名の少人数制を採用。一人ひとりの課題を把握し、個別最適化されたフィードバックを毎回提供します。",
  },
  {
    number: "04",
    title: "充実した練習環境",
    description:
      "屋内ブルペン・ピッチングマシン・映像分析システムを完備。天候に左右されず、質の高いトレーニングを継続できます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              ANVIL が
              <br />
              <span className="text-[#dc2626]">選ばれる</span>
              <br />
              4つの理由
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ただ練習するだけでは成長は止まります。
              <br />
              ANVILでは、科学とプロの経験を融合させた
              独自のメソッドで確実な成果を出します。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-7 py-3.5 rounded tracking-wide transition-colors duration-200"
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
          </div>

          {/* Right: feature list */}
          <div className="flex flex-col gap-6">
            {features.map((f) => (
              <div
                key={f.number}
                className="flex gap-5 p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#dc2626]/30 transition-colors duration-200 group"
              >
                <div className="text-[#dc2626]/30 font-black text-2xl leading-none group-hover:text-[#dc2626]/60 transition-colors w-10 flex-shrink-0">
                  {f.number}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
