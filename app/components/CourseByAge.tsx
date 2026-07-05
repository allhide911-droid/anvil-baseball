const courses = [
  {
    grade: "小1・2年生",
    name: "キッズベースボール",
    tag: "Kids",
    color: "from-[#dc2626]/20 to-transparent",
    description:
      "ボールに慣れる・動く楽しさを体験。勝ち負けより笑顔優先。野球の楽しさを体全体で感じるところから始めます。",
    points: ["ボール・バットに慣れる", "動く楽しさを体験", "友達をつくる"],
  },
  {
    grade: "小3・4年生",
    name: "ジュニアベースボール",
    tag: "Junior",
    color: "from-[#dc2626]/15 to-transparent",
    description:
      "基礎技術の習得。バット・グローブの正しい使い方を体系的に学び、試合に出られる力を育てます。",
    points: ["バッティング基礎", "守備フォームの習得", "ルール・走塁判断"],
  },
  {
    grade: "小5・6年生",
    name: "アドバンスベースボール",
    tag: "Advance",
    color: "from-[#dc2626]/20 to-transparent",
    description:
      "チーム戦術・ポジション専門指導。試合を想定した実践的な内容で、中学野球への土台をつくります。",
    points: ["ポジション専門指導", "実戦形式の練習", "中学野球への準備"],
    featured: true,
  },
];

export default function CourseByAge() {
  return (
    <section id="courses" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Course by Age
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            小学1年生から、
            <span className="text-[#dc2626]">始められる。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            学年に合わせたカリキュラムで、どの年齢からでも最適なスタートが切れます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className={`relative rounded-xl border flex flex-col transition-all duration-200 hover:-translate-y-1 ${
                course.featured
                  ? "bg-[#1a0a0a] border-[#dc2626] shadow-[0_0_30px_rgba(220,38,38,0.1)]"
                  : "bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#444444]"
              }`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    中学野球を目指すなら
                  </span>
                </div>
              )}

              {/* Top gradient accent */}
              <div
                className={`h-1.5 w-full rounded-t-xl overflow-hidden bg-gradient-to-r ${course.color}`}
              />

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#dc2626] text-xs font-bold tracking-[0.2em] uppercase bg-[#dc2626]/10 border border-[#dc2626]/20 px-3 py-1 rounded-full">
                      {course.grade}
                    </span>
                    <span className="text-gray-600 text-xs font-bold tracking-widest uppercase">
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">
                    {course.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 mt-auto">
                  {course.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] flex-shrink-0" />
                      <span className="text-gray-300">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-[#2a2a2a]">
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center text-xs font-bold px-4 py-2.5 rounded tracking-wide transition-colors ${
                      course.featured
                        ? "bg-[#dc2626] hover:bg-[#b91c1c] text-white"
                        : "border border-[#444444] hover:border-[#dc2626] text-gray-300 hover:text-white"
                    }`}
                  >
                    このコースを体験する →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
