const columns = [
  {
    tag: "指導法",
    title: "怒鳴らない指導が、子どもの自主性を育てる理由",
    excerpt:
      "スポーツ心理学の観点から、ANVILが実践するポジティブコーチングの効果を解説します。なぜ「褒める」ことが技術向上にも繋がるのか。",
    readTime: "3分で読める",
  },
  {
    tag: "成長",
    title: "野球で伸びる子の共通点 — コーチが見てきた10年間",
    excerpt:
      "入会から3年で飛躍的に成長した子どもたちに共通していたのは、技術ではなく「ある習慣」でした。10年の指導から見えてきた事実をお伝えします。",
    readTime: "4分で読める",
  },
  {
    tag: "メンタル",
    title: "「試合に負けた日」が、最も大切な練習だった",
    excerpt:
      "失敗を経験することの価値と、大人がどう言葉をかけるべきか。ANVILが大切にする「負けた日の過ごし方」について考えます。",
    readTime: "3分で読める",
  },
];

export default function ParentColumn() {
  return (
    <section id="column" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              {"Parent's Column"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            知っておきたい、
            <span className="text-[#dc2626]">野球と子育て</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            保護者の皆さんに読んでほしい、ANVILからのコラムです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.title}
              className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col hover:border-[#dc2626]/30 transition-colors duration-200 group"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#dc2626] to-[#dc2626]/30" />

              <div className="p-7 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#dc2626] bg-[#dc2626]/10 border border-[#dc2626]/20 px-3 py-1 rounded-full tracking-wide">
                    {col.tag}
                  </span>
                  <span className="text-gray-600 text-xs">{col.readTime}</span>
                </div>

                <h3 className="text-white font-black text-base leading-snug group-hover:text-[#dc2626]/90 transition-colors duration-200">
                  {col.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {col.excerpt}
                </p>

                <div className="pt-4 border-t border-[#2a2a2a]">
                  <span className="text-[#dc2626] text-xs font-bold tracking-wide group-hover:tracking-wider transition-all duration-200">
                    読む →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
