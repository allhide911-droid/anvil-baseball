import Image from "next/image";

const concerns = [
  {
    worry: "野球経験ゼロで大丈夫？",
    answer:
      "入会者の70%以上が未経験スタートです。バットの握り方から、丁寧に始めます。",
  },
  {
    worry: "怒鳴る・厳しすぎる指導では？",
    answer:
      "感情的な指導は一切禁止。コーチ全員が定期研修を受け、指導の質を管理しています。",
  },
  {
    worry: "集団に馴染めるか心配…",
    answer:
      "最大6名の少人数制。コーチが必ず橋渡しし、一人ひとりを見守ります。",
  },
  {
    worry: "費用が続けられるか不安",
    answer:
      "月謝は明朗です。入会金・追加費用は入会前にすべて開示します。隠れた費用はありません。",
  },
];

export default function ParentConcerns() {
  return (
    <section id="concerns" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/parents.jpg"
              fill
              alt="子どもの野球について考える保護者"
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Right: concerns */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                Parent Concerns
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              入れる前に、
              <br />
              <span className="text-[#dc2626]">不安になっていませんか？</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              多くの保護者の方が、最初は同じ不安を抱えています。
              <br />
              ANVILは、その一つひとつに正直にお答えします。
            </p>

            <div className="flex flex-col gap-4">
              {concerns.map((c) => (
                <div
                  key={c.worry}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex gap-4 hover:border-[#dc2626]/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/40 text-[#dc2626] text-xs font-black">
                      Q
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1.5">
                      {c.worry}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {c.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
