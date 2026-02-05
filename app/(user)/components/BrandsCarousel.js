"use client";

import { BRANDS } from "../../config/constants";

export default function BrandsCarousel() {
  const brands = BRANDS.map((brand) => ({
    name: brand.replace(/\n/g, ' '),
    logo: brand,
  }));

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-t border-gray-100" aria-label="Trusted brands">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-6 sm:mb-8">Brands that trust us</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 whitespace-pre-line text-center">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

