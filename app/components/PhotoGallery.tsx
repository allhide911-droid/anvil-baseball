import Image from "next/image";

const subImages = [
  { src: "/images/practice.jpg", alt: "練習風景" },
  { src: "/images/coaching-scene.jpg", alt: "コーチ指導シーン" },
  { src: "/images/joy.jpg", alt: "子どもたちの笑顔" },
  { src: "/images/team.jpg", alt: "チーム集合写真" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            グラウンドの、
            <span className="text-[#dc2626]">リアルな日常。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            練習中の真剣な顔、試合後の笑顔、仲間との一コマ。ここで起きていることを、そのままお伝えします。
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          {/* Large main image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src="/images/gallery.jpg"
              fill
              alt="ANVILギャラリーメイン"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* 2×2 sub images */}
          <div className="relative aspect-[4/3] hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              {subImages.map((img) => (
                <div
                  key={img.src}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    fill
                    alt={img.alt}
                    className="object-cover object-[center_25%] group-hover:scale-110 transition-transform duration-700"
                    sizes="17vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 2×2 grid (lg以下で表示) */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {subImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  fill
                  alt={img.alt}
                  className="object-cover object-[center_25%] group-hover:scale-110 transition-transform duration-700"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Family watching accent */}
        <div className="mt-4 relative w-full aspect-[16/9] rounded-xl overflow-hidden group">
          <Image
            src="/images/family-watching.jpg"
            fill
            alt="練習を見守る保護者"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/70 text-sm font-bold tracking-wider">
              保護者の皆さんも、毎回の練習を見守ることができます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
