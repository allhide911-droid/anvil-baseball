const pillars = [
  {
    number: "01",
    title: "技術より先に、人をつくる",
    body: "打てる、投げられる——それだけでは足りません。ANVILでは、挨拶・時間を守る・仲間を思いやるという当たり前のことを、野球の練習を通じて徹底して身につけます。グラウンドで身につけた習慣は、教室でも、社会に出てからも、ずっとその子の財産になります。",
  },
  {
    number: "02",
    title: "「負けた日」こそ、一番大事にする",
    body: "思い通りにいかないとき、悔しくて泣きたいとき——そういう瞬間を、私たちは大切にしています。失敗から立ち直る力、諦めずに考え続ける力。それは野球が教えてくれる最高の授業です。うまくいかない経験を積み重ねてこそ、10年後に折れない人間が育ちます。",
  },
  {
    number: "03",
    title: "親御さんも、一緒に育てていきます",
    body: "子どもの成長を一番近くで見守るのは、保護者の皆さんです。ANVILでは練習後に必ずコーチから一言フィードバックをお伝えし、ご家庭でも成長を感じていただける工夫をしています。「うちの子、変わってきた」と感じていただく瞬間が、私たちの一番の喜びです。",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-[#0f0f0f] py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-[#dc2626]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            私たちの
            <span className="text-[#dc2626]">理念</span>
          </h2>
        </div>

        {/* Main message */}
        <div className="mb-16 max-w-3xl">
          <p className="text-2xl sm:text-3xl font-black text-white leading-snug mb-6">
            野球は、子どもを
            <span className="text-[#dc2626]">一人前の人間</span>
            に育てる、最高の教科書だと思っています。
          </p>
          <div className="flex flex-col gap-4 text-gray-400 text-base leading-relaxed">
            <p>
              「うちの子に野球をやらせたい」と思うとき、多くの保護者の方が求めているのは、
              強いチームに入ることや、甲子園を目指すことだけではないはずです。
            </p>
            <p>
              礼儀を知っている子に育ってほしい。
              くじけても立ち上がれる子に育ってほしい。
              仲間を大切にできる子に育ってほしい。
            </p>
            <p>
              ANVILは、そういう10年後の姿を見据えて、日々の指導をしています。
              技術は後から必ずついてきます。でも人としての土台は、
              <strong className="text-white font-bold">今この時期にしか</strong>
              つくれません。
            </p>
            <p>
              「あの教室に入れてよかった」——
              10年後に保護者の方にそう言っていただけることが、
              私たちの変わらない目標です。
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-7 hover:border-[#dc2626]/30 transition-colors duration-200"
            >
              <div className="text-[#dc2626]/25 font-black text-4xl leading-none mb-5 tabular-nums">
                {pillar.number}
              </div>
              <h3 className="text-white font-black text-base mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
