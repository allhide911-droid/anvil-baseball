import Image from "next/image";
import { getCoaches } from "@/app/lib/wordpress";

export default async function Coaches() {
  const coaches = await getCoaches();
  if (coaches.length === 0) return null;

  return (
    <section id="coaches" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#dc2626]" />
            <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
              Coaches
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            プロが教える
            <span className="text-[#dc2626]">コーチ陣</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            現役経験を持つコーチが一人ひとりに向き合い、確実な技術向上をサポートします。
          </p>
        </div>

        {/* Coach image banner */}
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-12 bg-[#0a0a0a]">
          <Image
            src="/images/coach-smile.jpg"
            fill
            alt="子どもに語りかけるANVILコーチ"
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <p className="text-white font-black text-xl sm:text-2xl max-w-lg leading-snug">
              「名前を覚えること、目を見て話すこと。」
              <br />
              <span className="text-[#dc2626]">「それが、指導のすべての始まりです。」</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#dc2626]/40 transition-colors duration-200 group"
            >
              {/* Photo */}
              {coach.imageUrl && (
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={coach.imageUrl}
                    fill
                    alt={coach.imageAlt || coach.name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {/* Info */}
              <div className="p-6">
                <div className="mb-1">
                  <span className="text-[#dc2626] text-xs font-bold tracking-widest uppercase">
                    {coach.nameEn}
                  </span>
                </div>
                <h3 className="text-white font-black text-xl mb-1">
                  {coach.name}
                </h3>
                <p className="text-gray-500 text-xs mb-4">{coach.position}</p>
                <div
                  className="text-gray-400 text-sm leading-relaxed mb-5 [&_p]:mb-2"
                  dangerouslySetInnerHTML={{ __html: coach.bio }}
                />

                {coach.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full border border-[#333333]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
