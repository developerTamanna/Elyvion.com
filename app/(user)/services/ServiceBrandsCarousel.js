"use client";

import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "../../config/constants";

export default function BrandsAndCTA() {
  return (
    <>
      {/* BRANDS SECTION  */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="px-4 md:px-14 mx-auto py-8 sm:py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* LEFT TEXT */}
            <div className="h-[100px] p-2 w-fit text-center shrink-0">
              <h2 className="text-base text-left font-semibold text-black">
                We work with brands <br />
                across multiple <br />
                industries and <br />
                verticals…
              </h2>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="relative overflow-hidden w-full md:flex-1">
              {/* Fade edges */}
              <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex items-center gap-15 justify-center md:w-full h-[100px] whitespace-nowrap animate-scroll">
                {[...BRANDS, ...BRANDS].map((brand, index) => (
                  <div
                    key={index}
                    className="shrink-0 flex items-center justify-center md:w-[120px] h-[100px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="(max-width:640px) 150px, (max-width:768px) 170px, 190px"
                        className="object-contain max-w-[120px] max-h-[60px] opacity-90 hover:opacity-100 transition duration-300 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </>
  );
}
