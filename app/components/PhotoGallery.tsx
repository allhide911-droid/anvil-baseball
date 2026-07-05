import Image from "next/image";

const photos = [
  { src: "/images/gallery.jpg",        caption: "練習の軌跡" },
  { src: "/images/practice.jpg",       caption: "練習風景" },
  { src: "/images/coaching-scene.jpg", caption: "コーチ指導" },
  { src: "/images/joy.jpg",            caption: "チームの笑顔" },
  { src: "/images/team.jpg",           caption: "仲間との一コマ" },
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

        {/* Desktop: hover accordion */}
        <div className="hidden lg:flex h-[500px] gap-2 rounded-xl overflow-hidden">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-1 hover:[flex:3] transition-all duration-500 ease-in-out overflow-hidden group/photo"
            >
              <Image
                src={photo.src}
                fill
                alt={photo.caption}
                className="object-cover"
                sizes="(max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-bold opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex lg:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative w-[80vw] flex-shrink-0 aspect-[3/4] rounded-xl overflow-hidden snap-start"
            >
              <Image
                src={photo.src}
                fill
                alt={photo.caption}
                className="object-cover"
                sizes="80vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
