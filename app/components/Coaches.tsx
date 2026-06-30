const coaches = [
  {
    name: "田中 雄一",
    nameEn: "Yuichi Tanaka",
    role: "ヘッドコーチ / バッティング担当",
    career: "元NPBプロ野球選手。通算12年間の現役生活を経て指導者へ転身。",
    specialties: ["スイング理論", "打撃フォーム", "メンタルコーチング"],
    initial: "T",
  },
  {
    name: "佐藤 健吾",
    nameEn: "Kengo Sato",
    role: "ピッチングコーチ",
    career:
      "大学野球・社会人野球でエースとして活躍。現在は投球理論の研究者としても活動。",
    specialties: ["投球メカニクス", "変化球習得", "フォーム分析"],
    initial: "S",
  },
  {
    name: "中村 翔太",
    nameEn: "Shota Nakamura",
    role: "守備・走塁コーチ",
    career:
      "高校・大学で全国大会出場経験を持つ守備のスペシャリスト。守備範囲と送球精度に定評。",
    specialties: ["守備フォーム", "走塁判断", "連携プレー"],
    initial: "N",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Coaches
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            プロが教える
            <span className="text-[#dc2626]">コーチ陣</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            現役経験を持つコーチが一人ひとりに向き合い、確実な技術向上をサポートします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#dc2626]/40 transition-colors duration-200 group"
            >
              {/* Avatar area */}
              <div className="relative bg-[#1a1a1a] h-48 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#2a2a2a] border-2 border-[#dc2626]/30 flex items-center justify-center group-hover:border-[#dc2626] transition-colors">
                  <span className="text-4xl font-black text-[#dc2626]">
                    {coach.initial}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dc2626]/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="mb-1">
                  <span className="text-[#dc2626] text-xs font-bold tracking-widest uppercase">
                    {coach.nameEn}
                  </span>
                </div>
                <h3 className="text-white font-black text-xl mb-1">
                  {coach.name}
                </h3>
                <p className="text-gray-500 text-xs mb-4">{coach.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {coach.career}
                </p>

                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full border border-[#333333]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
