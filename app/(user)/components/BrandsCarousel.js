"use client";

import Image from "next/image";
import { BRANDS } from "../../config/constants";

export default function BrandsCarousel() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-0 py-8 sm:py-10 md:py-14">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* LEFT TEXT */}
          <div className="w-full md:w-65 text-center md:text-left shrink-0">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Brands that trust us
            </h2>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative overflow-hidden w-full md:flex-1">
            {/* Fade edges (desktop only) */}
            <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex items-center gap-8 sm:gap-10 md:gap-14 whitespace-nowrap animate-scroll">
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center w-[150px] h-[80px] sm:w-[170px] sm:h-[90px] md:w-[190px] md:h-[100px]"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width:640px) 150px, (max-width:768px) 170px, 190px"
                      className="object-contain max-w-[165px] max-h-[64px] opacity-90 hover:opacity-100 transition duration-300 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
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
          animation: scroll 28s linear infinite;
        }
      `}</style>
    </section>
  );
}