import Image from "next/image";
import { getGalleryItems } from "@/app/lib/wordpress";

export default async function PhotoGallery() {
  const galleryItems = await getGalleryItems();
  const items = galleryItems.filter((item) => item.imageUrl !== null);
  if (items.length === 0) return null;

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
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-1 hover:[flex:3] transition-all duration-500 ease-in-out overflow-hidden group/photo"
            >
              <Image
                src={item.imageUrl!}
                fill
                alt={item.imageAlt || item.title}
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 40vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-bold opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex lg:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative w-[80vw] flex-shrink-0 aspect-[3/4] rounded-xl overflow-hidden snap-start"
            >
              <Image
                src={item.imageUrl!}
                fill
                alt={item.imageAlt || item.title}
                className="object-cover"
                sizes="80vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
