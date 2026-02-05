"use client";

import Image from "next/image";
import { BRANDS } from "../../config/constants";

export default function BrandsCarousel() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="container mx-auto  md:px-0 px-4 sm:px-6 py-8 sm:py-10 md:py-14">
        {/* Main Row */}
        <div
          className="
          flex flex-col
          md:flex-row
          items-center
          gap-6
          md:gap-8
        "
        >
          {/* LEFT TEXT */}
          <div
            className="
            w-full
            md:w-65
            text-center
            md:text-left
            shrink-0
          "
          >
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
              Brands that trust us
            </h2>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative overflow-hidden w-full md:flex-1">
            {/* Fade edges (desktop only) */}
            <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div
              className="
              flex items-center
              gap-8 sm:gap-10 md:gap-14
              whitespace-nowrap
              [animation:brand-scroll_22s_linear_infinite]
              md:[animation-duration:30s]
            "
            >
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    flex items-center justify-center
                    w-[140px] h-[72px]
                    sm:w-[160px] sm:h-[82px]
                    md:w-[190px] md:h-[100px]
                  "
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width:640px) 140px, (max-width:768px) 160px, 190px"
                      className="
                        object-contain
                        max-w-[110px] max-h-[44px]
                        sm:max-w-[130px] sm:max-h-[52px]
                        md:max-w-[165px] md:max-h-[64px]
                        opacity-90
                        transition duration-300 ease-out
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
