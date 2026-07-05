import Image from "next/image";

export default function CoachMessage() {
  return (
    <section id="coach-message" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: message */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                {"Coach's Message"}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              子どもたちへ、
              <br />
              <span className="text-[#dc2626]">伝えたいこと。</span>
            </h2>

            <blockquote className="relative">
              <div className="absolute -top-4 -left-2 text-[#dc2626]/20 text-8xl font-black leading-none select-none">
                &ldquo;
              </div>
              <div className="relative pl-4 border-l-2 border-[#dc2626]/40 flex flex-col gap-4 text-gray-300 text-base leading-relaxed">
                <p>
                  私がこの教室を作ったのは、「野球が強い子」ではなく、
                  「野球を通じて強くなった人間」を育てたかったからです。
                </p>
                <p>
                  試合に負けた日に、どれだけ前を向けるか。
                  仲間がミスをしたとき、どう声をかけるか。
                  そういう瞬間の積み重ねが、10年後の君たちをつくります。
                </p>
                <p>
                  うまくなってほしい。でもそれより、ずっと野球が好きでいてほしい。
                  この教室に来た日を、いつか誇りに思ってほしい。
                </p>
              </div>
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#2a2a2a]" />
              <div className="text-right">
                <p className="text-white font-black text-sm">田中 雄一</p>
                <p className="text-gray-500 text-xs tracking-wide">
                  ヘッドコーチ / ANVIL BASEBALL ACADEMY 代表
                </p>
              </div>
            </div>
          </div>

          {/* Right: coach-talk image */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/images/coach-talk.jpg"
              fill
              alt="コーチが子どもたちに語りかける場面"
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
