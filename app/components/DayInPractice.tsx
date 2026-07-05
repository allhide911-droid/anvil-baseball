import Image from "next/image";

const timeline = [
  {
    time: "14:00",
    title: "集合・準備体操",
    body: "コーチと一緒に体と心をほぐします。その日の練習テーマをコーチが伝えます。",
  },
  {
    time: "14:15",
    title: "基礎ドリル",
    body: "その日のテーマ（打・投・守）に絞った反復練習。体の使い方を丁寧に確認します。",
  },
  {
    time: "15:00",
    title: "個別映像指導",
    body: "自分のフォームを映像で確認しながら修正。客観的に「自分の動き」を理解します。",
  },
  {
    time: "15:30",
    title: "実戦形式練習",
    body: "チームワークを意識したゲーム形式。試合の緊張感の中で技術を試します。",
  },
  {
    time: "15:50",
    title: "振り返り",
    body: "コーチと一緒に今日の成長を確認。次回の目標を自分で決めます。",
  },
  {
    time: "16:00",
    title: "終了・保護者報告",
    body: "コーチから保護者へ一言フィードバック。毎回の練習後に必ず行います。",
    last: true,
  },
];

export default function DayInPractice() {
  return (
    <section id="practice" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              A Day of Practice
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            2時間で、
            <span className="text-[#dc2626]">何が変わるか。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            ANVILの練習は、毎回の2時間に意味があります。何となく体を動かすのではなく、今日の自分が変わる2時間です。
          </p>
        </div>

        {/* Practice banner image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-16 bg-[#0f0f0f]">
          <Image
            src="/images/practice.jpg"
            fill
            alt="ANVILの練習風景"
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]/80" />
        </div>

        {/* Timeline + side image */}
        <div className="grid lg:grid-cols-[3fr_5fr] gap-12 items-start">
          {/* Timeline */}
          <div className="flex flex-col">
            {timeline.map((item) => (
              <div key={item.time} className="flex gap-5">
                {/* Left: time + line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#dc2626] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#dc2626] text-[10px] font-black tabular-nums leading-none">
                      {item.time.replace(":", "\n")}
                    </span>
                  </div>
                  {!item.last && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#dc2626]/40 to-[#333333] min-h-[2.5rem] mt-1" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-8 flex-1 ${item.last ? "pb-0" : ""}`}>
                  <h3 className="text-white font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden hidden lg:block bg-[#0f0f0f]">
            <Image
              src="/images/coaching-scene.jpg"
              fill
              alt="コーチによる個別指導"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
