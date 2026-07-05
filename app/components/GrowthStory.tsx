import Image from "next/image";

export default function GrowthStory() {
  return (
    <section id="growth" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Growth Story
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            たった6ヶ月で、
            <span className="text-[#dc2626]">こんなに変わった。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            技術だけではなく、顔つきが変わります。自信が生まれます。
          </p>
        </div>

        {/* Before / After images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
              <Image
                src="/images/before.jpg"
                fill
                alt="入会当初の練習風景"
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#1a1a1a] border border-[#333333] text-gray-400 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  Before
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  はじめて参加した日。バットの握り方も知らなかった。
                </p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
              <Image
                src="/images/after.jpg"
                fill
                alt="成長後の練習風景"
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#dc2626] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  After
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  6ヶ月後。少年野球チームの4番に選ばれた。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-8 max-w-3xl mx-auto">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#dc2626]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
            「まさか半年でここまで変わるとは思っていませんでした。でも、それより何より、顔が変わったんです。自信に満ちた顔になった。あの子があんなに輝いた表情をするとは——入れてよかったと、心から思っています。」
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2a2a2a] border border-[#333333] flex items-center justify-center">
              <span className="text-gray-400 text-xs font-bold">Y</span>
            </div>
            <div>
              <p className="text-white text-sm font-bold">Y.Yさんのお母様</p>
              <p className="text-gray-500 text-xs">小3男子（入会当時）の保護者</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
