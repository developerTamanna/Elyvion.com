'use client';

import Image from 'next/image';
import { BRANDS } from '../../config/constants';

export default function BrandsCarousel() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="px-4 lg:px-8 mx-auto py-10 sm:py-12 md:py-16">
        {/* Main Row: Mobile এ column এবং Desktop এ row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          
          {/* LEFT/TOP TEXT */}
          {/* Mobile এ text-center এবং md (Desktop) এ text-left */}
          <div className="h-auto md:h-[100px] p-2 w-full md:w-fit text-center md:text-left shrink-0">
            <h2 className="text-base font-semibold text-gray-900 whitespace-normal md:whitespace-nowrap mb-2">
              Brands that trust us
            </h2>
          </div>

          {/* RIGHT/BOTTOM CAROUSEL */}
          <div className="relative overflow-hidden w-full md:flex-1">
            {/* Fade edges (desktop only) */}
            <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Animation Container */}
            <div className="flex items-center gap-10 md:gap-15 justify-center md:w-full h-[100px] whitespace-nowrap animate-scroll">
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center w-[100px] md:w-[120px] h-[100px]"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width:640px) 120px, 150px"
                      className="object-contain max-w-[100px] md:max-w-[120px] max-h-[50px] md:max-h-[60px] opacity-90 hover:opacity-100 transition duration-300 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          /* Speed komanor jonno duration bariye 30s kora hoyeche */
          animation: scroll 30s linear infinite;
        }

        /* Media query remove kora hoyeche jate sob device e eki speed thake */
        @media (min-width: 768px) {
          .animate-scroll {
            /* Desktop eo slow thakbe */
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}