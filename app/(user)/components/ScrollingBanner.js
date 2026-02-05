"use client";

export default function ScrollingBanner() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex items-center gap-12 sm:gap-16 md:gap-24 animate-scroll-banner whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <h2 key={i} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Gain with Elyvion
            </h2>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-banner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-banner {
          animation: scroll-banner 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

