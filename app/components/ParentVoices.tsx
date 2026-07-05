const voices = [
  {
    quote:
      "怒鳴り声が一度もなかった。子どもが「行きたい」と言うようになって、それが一番嬉しかったです。コーチの穏やかな言葉かけが、あの子に合っていたんだと思います。",
    name: "H.Mさん",
    detail: "40代・母 / 小4男子の保護者",
    initial: "H",
  },
  {
    quote:
      "3ヶ月で本人が変わりました。朝、自分で起きるようになったんです。野球のためだけど、それが嬉しくて。自分から動く子になってほしかったので、本当に感謝しています。",
    name: "T.Kさん",
    detail: "30代・父 / 小2男子の保護者",
    initial: "T",
  },
  {
    quote:
      "体験の日に、コーチが息子の名前を覚えてくれていた。それだけで、信頼できると思いました。子どもをちゃんと見てくれる場所だと、直感で分かりました。",
    name: "S.Nさん",
    detail: "40代・母 / 小5男子の保護者",
    initial: "S",
  },
];

export default function ParentVoices() {
  return (
    <section id="voices" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Parent Voices
            </span>
            <div className="h-px w-8 bg-[#dc2626]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            入れて、<span className="text-[#dc2626]">よかった。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            保護者の方の声が、ANVILの一番の答えです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((v) => (
            <div
              key={v.name}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-7 flex flex-col gap-5 hover:border-[#dc2626]/30 transition-colors duration-200"
            >
              {/* Large quote mark */}
              <div className="text-[#dc2626]/30 text-6xl font-black leading-none select-none -mb-4">
                &ldquo;
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {v.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a2a]">
                <div className="w-9 h-9 rounded-full bg-[#2a2a2a] border border-[#dc2626]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#dc2626] text-sm font-black">
                    {v.initial}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{v.name}</p>
                  <p className="text-gray-500 text-xs">{v.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
