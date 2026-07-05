import Image from "next/image";

const alumni = [
  {
    id: "K.Y",
    period: "小5〜小6在籍",
    quote:
      "ANVILで「諦めない」を教わった。あの2年間が今の自分をつくった。",
    note: "中学進学後、野球部のキャプテンに。",
  },
  {
    id: "T.M",
    period: "小3〜小5在籍",
    quote:
      "始めた頃はバットも振れなかった僕が、MVPをもらえるとは思っていなかった。",
    note: "未経験入会から2年後、地区大会でMVPを獲得。",
  },
  {
    id: "S.H",
    period: "小1〜小4在籍（現・高校生）",
    quote:
      "今は野球を続けていないけど、コーチに言われた「負けた日の立ち方」が、今の自分の仕事に活きている。",
    note: "高校卒業後、設計士として活躍中。",
  },
];

export default function Alumni() {
  return (
    <section id="alumni" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Award banner */}
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-16 bg-[#111111]">
          <Image
            src="/images/award.jpg"
            fill
            alt="卒業生表彰の瞬間"
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                Alumni
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-lg">
              ここから旅立った、
              <br />
              <span className="text-[#dc2626]">子どもたち。</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {alumni.map((a) => (
            <div
              key={a.id}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-7 flex flex-col gap-4 hover:border-[#dc2626]/30 transition-colors duration-200"
            >
              <div>
                <p className="text-white font-bold text-sm">{a.id}</p>
                <p className="text-gray-500 text-xs">{a.period}</p>
              </div>

              <p className="text-[#dc2626] text-xs font-bold leading-relaxed bg-[#dc2626]/5 border border-[#dc2626]/15 rounded-lg px-4 py-3">
                {a.note}
              </p>

              <div className="border-l-2 border-[#dc2626]/30 pl-4">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{a.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Joy image accent */}
        <div className="mt-12 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/joy.jpg"
            fill
            alt="喜びを分かち合う子どもたち"
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/80 text-lg sm:text-xl font-black tracking-wide text-center">
              あの日の経験が、今も生き続けています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
