'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-2  bg-white overflow-hidden">
      <div className=" mx-auto px-5 md:px-10 lg:px-17 xl:px-30  2xl:px-48">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-0.5  items-center justify-center">
          {/* Left Column: Image - বড় হবে এবং Y-axis বরাবর সম্পূর্ণ */}
          <div className="relative inline-flex items-center justify-center  h-auto w-full  md:px-0 md:pr-10">
            <div className="relative  w-full max-w-[500px] md:max-w-full aspect-[8/12] min-h-[500px] max-h-[750px] overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Elyvion Team"
                fill
                className="object-fit  rounded-3xl w-full h-full object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className=" flex flex-col justify-center md:pt-0 pt-10 md:pl-0 pl-2">
            <h2 className="relative text-black text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight md:mb-10 mb-7">
              We blend creative and performance
              <span className="absolute left-0 top-0 transform -translate-y-full -translate-x-full md:pr-2">
                <svg
                  viewBox="0 0 35 33"
                  className="fill-current text-black w-4 h-4 md:w-6 md:h-6"
                >
                  <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z"></path>
                </svg>
              </span>
            </h2>

            <p className="text-base leading-snug text-black  mb-6">
              Founded in 2010 by serial entrepreneurs, Elyvion was built to
              bring together a versatile team of senior experts dedicated to
              helping businesses of all sizes thrive. Today, we're a team of 40+
              entrepreneurs with a proven track record of success.
            </p>

            {/* Button Group - Exact same as your HTML */}
            <Link
              href="/services"
              className="group hover:translate-x-10 relative inline-flex items-center bg-black rounded-full  transition-all duration-500 ease-in-out w-fit"
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
                See Our Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
