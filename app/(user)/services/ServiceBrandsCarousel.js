"use client";

import Image from "next/image";
import { BRANDS } from "../../config/constants";

export default function BrandsAndCTA() {
  return (
    <>
      {/* BRANDS SECTION */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="px-4 md:px-14 mx-auto py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
            {/* LEFT TEXT */}
            <div className="w-full md:w-fit md:h-[100px] p-2 text-center md:text-left shrink-0">
              <h2 className="text-lg md:text-base font-semibold text-black leading-tight">
                We work with brands <br className="hidden md:block" />
                across multiple <br className="hidden md:block" />
                industries and <br className="hidden md:block" />
                verticals…
              </h2>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="relative overflow-hidden w-full md:flex-1">
              <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Logo Wrapper */}
              <div className="flex items-center gap-10 md:gap-15 whitespace-nowrap animate-scroll">
                {[...BRANDS, ...BRANDS].map((brand, index) => (
                  <div
                    key={index}
                    className="shrink-0 flex items-center justify-center w-[100px] md:w-[120px] h-[80px] md:h-[100px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="(max-width:640px) 100px, 120px"
                        className="object-contain opacity-90 hover:opacity-100 transition duration-300 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
