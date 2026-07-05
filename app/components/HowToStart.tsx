import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "申し込み",
    body: "フォームから希望日時を送るだけ。所要1分です。電話でのご相談も受け付けています。",
    note: "24時間受付中",
  },
  {
    number: "2",
    title: "確認のご連絡",
    body: "2営業日以内にコーチから直接ご連絡します。日程・場所・持ち物を一緒に確認します。",
    note: "2営業日以内に返信",
  },
  {
    number: "3",
    title: "体験当日",
    body: "動きやすい服装のみでOK。完全無料・その場での勧誘は一切しません。お気軽にどうぞ。",
    note: "勧誘なし・完全無料",
  },
];

export default function HowToStart() {
  return (
    <section id="how-to-start" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: steps */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                How to Start
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              無料体験まで、
              <br />
              <span className="text-[#dc2626]">3ステップ。</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-12">
              難しい手続きは一切ありません。思い立ったらすぐ申し込めます。
            </p>

            <div className="flex flex-col gap-px">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-5">
                  {/* Number column */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#dc2626] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm tabular-nums">
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-[#dc2626]/20 mt-1 min-h-[2.5rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 flex-1 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-black text-base">
                        {step.title}
                      </h3>
                      <span className="text-[#dc2626] text-xs font-bold bg-[#dc2626]/10 border border-[#dc2626]/20 px-2 py-0.5 rounded-full">
                        {step.note}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded tracking-wide transition-colors duration-200"
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
          </div>

          {/* Right: trial image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/trial.jpg"
              fill
              alt="無料体験の様子"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
