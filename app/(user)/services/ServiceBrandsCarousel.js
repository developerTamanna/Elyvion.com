"use client";

import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "../../config/constants";

export default function BrandsAndCTA() {
  return (
    <>
      {/* BRANDS SECTION  */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-4 lg:px-8 mx-auto py-8 sm:py-10 md:py-19">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* LEFT TEXT */}
            <div className="h-[100px] p-2 w-fit text-center shrink-0">
              <h2 className="text-base text-left font-semibold text-gray-900">
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

      {/* CTA SECTION */}
      <section className="pt-8 sm:pt-12 md:pt-16 bg-white -mb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-br bg-amber-300 rounded-3xl overflow-hidden">
            {/* Content */}
            <div className="p-8 sm:p-12 md:p-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                Don’t be sheepish let’s talk
              </h2>

              <Link
                href="/campaign"
                className="inline-flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Launch Campaign!</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Logo */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/service/CTA.png"
                alt="Elyvion"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
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
