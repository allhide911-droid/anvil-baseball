const events = [
  {
    month: "4月",
    title: "新学年スタート体験会",
    description:
      "新小学生を対象とした特別無料体験イベント。春の陽気の中、はじめての一歩を踏み出します。",
    tag: "Spring",
  },
  {
    month: "6月",
    title: "ANVILカップ",
    description:
      "在校生によるANVIL内部試合大会。初めての「公式戦」を体験し、緊張感と達成感を学びます。",
    tag: "Tournament",
  },
  {
    month: "8月",
    title: "夏季集中合宿",
    description:
      "1泊2日の集中指導合宿（オプション参加）。仲間と過ごす時間が、チームの絆を深めます。",
    tag: "Summer",
    featured: true,
  },
  {
    month: "10月",
    title: "保護者参観デー",
    description:
      "普段の練習を保護者が見学できる特別開放日。お子さんの成長をその目で確かめてください。",
    tag: "Open",
  },
  {
    month: "12月",
    title: "年末表彰式",
    description:
      "1年間の成長を称える式典と特別トレーニング。最も頑張った選手へのMVP表彰があります。",
    tag: "Award",
  },
  {
    month: "3月",
    title: "卒業記念試合",
    description:
      "小6生が主役の最終試合と卒業セレモニー。ANVILで過ごした日々を、全員で締めくくります。",
    tag: "Graduation",
  },
];

export default function AnnualEvents() {
  return (
    <section id="events" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Annual Events
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            1年間の
            <span className="text-[#dc2626]">特別な瞬間</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            ANVILには、1年を通じて子どもたちの記憶に刻まれるイベントがあります。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className={`relative rounded-xl border p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 ${
                event.featured
                  ? "bg-[#1a0a0a] border-[#dc2626] shadow-[0_0_20px_rgba(220,38,38,0.08)]"
                  : "bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#444444]"
              }`}
            >
              {event.featured && (
                <div className="absolute -top-3 left-7">
                  <span className="bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    人気イベント
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-[#dc2626] text-3xl font-black tabular-nums leading-none">
                  {event.month}
                </span>
                <span className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase">
                  {event.tag}
                </span>
              </div>

              <div>
                <h3 className="text-white font-black text-base mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
