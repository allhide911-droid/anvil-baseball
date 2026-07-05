import Image from "next/image";

const coaches = [
  {
    name: "田端 勇二",
    nameEn: "TABATA YUUJI",
    role: "ヘッドコーチ / バッティング担当",
    career: "元プロ選手。10年間の現役生活を経て指導者へ転身。独自の打撃理論で多数の選手を指導。",
    specialties: ["スイング解析", "打撃向上の鍵", "メンタルトレーニング"],
    photo: "/images/coach-tabata.jpg",
  },
  {
    name: "佐藤 健一",
    nameEn: "SATO KENICHI",
    role: "ピッチングコーチ",
    career: "大学野球・社会人野球で活躍。投球理論の科学的アプローチによる指導。",
    specialties: ["投球メカニクス", "球種習得", "フォーム改善"],
    photo: "/images/coach-sato.jpg",
  },
  {
    name: "中村 翔介",
    nameEn: "NAKAMURA SHOSUKE",
    role: "守備・走塁コーチ",
    career: "全国大会出場経験を持つスペシャリスト。守備範囲と送球の正確さは随一。連携プレーの要。",
    specialties: ["守備フォーム指導", "走塁判断", "連携プレー"],
    photo: "/images/coach-nakamura.jpg",
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

        {/* Coach image banner */}
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-12 bg-[#0a0a0a]">
          <Image
            src="/images/coach-smile.jpg"
            fill
            alt="子どもに語りかけるANVILコーチ"
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <p className="text-white font-black text-xl sm:text-2xl max-w-lg leading-snug">
              「名前を覚えること、目を見て話すこと。」
              <br />
              <span className="text-[#dc2626]">「それが、指導のすべての始まりです。」</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#dc2626]/40 transition-colors duration-200 group"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={coach.photo}
                  fill
                  alt={coach.name}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
