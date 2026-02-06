"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full pt-14 md:px-6 lg:px-14 bg-transparent md:-mb-15 mb-14 relative z-10">
      <div className="md:px-20 w-full px-6 mx-auto relative">
        <span className="absolute left-6 -top-5">
          <svg viewBox="0 0 35 33" className="fill-current text-black w-8 h-8">
            <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z"></path>
          </svg>
        </span>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end bg-[#0f5366] rounded-3xl overflow-hidden">
          {/* Content */}
          <div className="p-8 sm:p-12 md:p-16">
            <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-extra-tight text-white mb-6 sm:mb-8">
              Grow with us. With Elyvion.
            </h2>

            <Link
              href="/campaign"
              className="group mr-11 hover:translate-x-10 relative inline-flex items-center bg-black rounded-full  transition-all duration-500 ease-in-out w-fit"
            >
              <div className="order-2  absolute -right-10 group-hover:-left-10   flex items-center justify-center w-10 h-10 rounded-full bg-black text-white   transition-all duration-1000 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5   font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              <span className="order-1 z-10 text-white  text-base px-7 py-2 whitespace-nowrap">
                Launch Campaign!
              </span>
            </Link>
          </div>

          {/* Logo image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <Image
              src="/service/footer-CI6-gFlc.jpg"
              alt="Elyvion"
              fill
              priority
              className="object-cover scale-110 brightness-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
