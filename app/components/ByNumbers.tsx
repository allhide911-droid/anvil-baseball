import Image from "next/image";

const stats = [
  { value: "2014年", label: "創業", note: "10年以上の指導実績" },
  { value: "500名+", label: "卒業生総数", note: "小学生から巣立った仲間たち" },
  { value: "72%", label: "未経験入会率", note: "ほとんどがゼロからのスタート" },
  { value: "60%+", label: "少年野球選抜率", note: "卒業生の多くがチームの主軸に" },
  { value: "93%", label: "月平均継続率", note: "「続けたい」と言う子が後を絶たない" },
  { value: "6名", label: "コーチ陣", note: "全員が実戦経験者" },
];

export default function ByNumbers() {
  return (
    <section id="numbers" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: stats */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                By the Numbers
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              数字が語る、
              <br />
              <span className="text-[#dc2626]">ANVILの実力</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              10年間、グラウンドで積み重ねてきた実績です。
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#2a2a2a] rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#1a1a1a] px-5 py-6 hover:bg-[#1f1f1f] transition-colors duration-200"
                >
                  <div className="text-3xl font-black text-[#dc2626] mb-1 tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-white font-bold text-sm mb-1">
                    {s.label}
                  </div>
                  <div className="text-gray-500 text-xs leading-snug">
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: team image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
            <Image
              src="/images/team.jpg"
              fill
              alt="ANVILのチーム集合写真"
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#111111]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
