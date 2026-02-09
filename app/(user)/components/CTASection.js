"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="px-6 sm:px-8 xl:px-24 pt-14 sm:pt-16 bg-transparent mb-14 sm:mb-14 md:-mb-25 relative z-20">
      <div className="relative w-full ">
        {/* decorative icon */}
        <span className="absolute -left-7  -top-7 ">
          <svg
            viewBox="0 0 35 33"
            className="fill-current text-black w-6 h-6 sm:w-8 sm:h-8"
          >
            <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z" />
          </svg>
        </span>

        <div className="grid sm:grid-cols-2 grid-cols-1 items-stretch bg-gradient-to-br from-[#0f5366] to-[#166e85] rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Content */}
          <div className="p-6  sm:h-auto sm:p-8 md:p-12 lg:p-16 flex flex-col justify-end items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 sm:mb-6 lg:mb-8">
              Grow with us. With Elyvion.
            </h2>

            <Link
              href="/campaign"
              className="group relative w-fit inline-flex items-center
  bg-black text-white rounded-full overflow-hidden
  px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4
  text-sm sm:text-base md:text-lg font-medium
  transition-all duration-500 ease-in-out"
            >
              {/* sliding circle */}
              <span
                className="absolute right-1 group-hover:left-1
    flex items-center justify-center
    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
    rounded-full bg-white text-black
    transition-all duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              {/* text */}
              <span className="relative z-10 pr-8 group-hover:pl-8 group-hover:pr-2 transition-all duration-500">
                Launch Campaign
              </span>
            </Link>
          </div>

          {/* Logo */}
          <div
            className="relative flex items-center justify-center 
            sm:min-h-[330px] min-h-[230px] sm:max-h-[180px] md:min-h-[430px] xl:min-h-[460px]
          bg-gradient-to-br from-gray-900 to-black p-0 md:p-8"
          >
            <Image
              src="/logo/logo.png"
              alt="Elyvion"
              width={320}
              height={320}
              className="w-32 sm:w-40 md:w-52 lg:w-64 h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
