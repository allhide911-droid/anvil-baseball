import Image from "next/image";

const checklist = [
  "グローブ・バットは体験時に無料貸出",
  "初回は保護者の見学・同伴OK",
  "ユニフォーム不要で参加可能",
  "経験者とクラスを分けた専用指導",
];

export default function BeginnerWelcome() {
  return (
    <section id="beginners" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image with overlay quote */}
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/nervous.jpg"
              fill
              alt="初めての野球に緊張する子ども"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm italic leading-relaxed">
                「うちの子、ルールも知らないし、<br />
                まわりに迷惑かけるんじゃ…」
              </p>
            </div>
          </div>

          {/* Right: reassurance */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                Beginners Welcome
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              はじめてでも、
              <br />
              <span className="text-[#dc2626]">大丈夫。</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              そのご心配、ご安心ください。
            </p>
            <p className="text-white text-lg font-bold mb-2">
              入会者の{" "}
              <span className="text-[#dc2626] text-3xl font-black">70%</span>
              {" "}以上が、
            </p>
            <p className="text-white text-lg font-bold mb-10">
              野球未経験からのスタートです。
            </p>

            <div className="flex flex-col gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#dc2626] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-7 py-3.5 rounded tracking-wide transition-colors duration-200"
              >
                まず無料体験してみる
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
        </div>
      </div>
    </section>
  );
}
