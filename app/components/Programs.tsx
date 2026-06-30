const programs = [
  {
    icon: "🏏",
    title: "バッティング強化",
    tag: "Hitting",
    description:
      "スイング軌道の分析から始まり、力強い打撃を生む身体の使い方を徹底指導。映像解析ツールを用いてフォームを可視化し、弱点を即座に改善します。",
    features: ["スイング解析", "ティーバッティング", "マシン打撃", "実戦形式"],
    price: "月額 ¥18,000〜",
  },
  {
    icon: "⚾",
    title: "ピッチング強化",
    tag: "Pitching",
    description:
      "投球フォームを科学的に分析し、制球力と球速を同時に向上させるプログラム。故障リスクを最小限に抑えながら、理想の投球メカニクスを習得します。",
    features: ["フォーム矯正", "球速向上", "変化球習得", "ブルペン実践"],
    price: "月額 ¥18,000〜",
    featured: true,
  },
  {
    icon: "🥊",
    title: "守備・走塁",
    tag: "Fielding",
    description:
      "基礎から応用まで、守備の基本姿勢・送球精度・走塁判断力を総合的に鍛えます。ポジション別の専門指導で即戦力となる守備力を育成します。",
    features: ["ゴロ・フライ処理", "送球トレーニング", "走塁判断", "連携プレー"],
    price: "月額 ¥16,000〜",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Programs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            3つの専門
            <span className="text-[#dc2626]">プログラム</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            個人の課題に合わせたカリキュラムで、確かな技術を最短ルートで習得します。
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative rounded-xl border p-8 flex flex-col gap-6 transition-all duration-200 group hover:-translate-y-1 ${
                program.featured
                  ? "bg-[#1a0a0a] border-[#dc2626] shadow-[0_0_30px_rgba(220,38,38,0.1)]"
                  : "bg-[#111111] border-[#2a2a2a] hover:border-[#444444]"
              }`}
            >
              {program.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    人気No.1
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{program.icon}</span>
                  <span className="text-[#dc2626]/60 text-xs font-bold tracking-[0.2em] uppercase">
                    {program.tag}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {program.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] flex-shrink-0" />
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-[#2a2a2a] flex items-center justify-between">
                <span className="text-white font-bold text-sm">
                  {program.price}
                </span>
                <a
                  href="#contact"
                  className={`text-xs font-bold px-4 py-2 rounded tracking-wide transition-colors ${
                    program.featured
                      ? "bg-[#dc2626] hover:bg-[#b91c1c] text-white"
                      : "border border-[#444444] hover:border-[#dc2626] text-gray-300 hover:text-white"
                  }`}
                >
                  詳しく見る →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
