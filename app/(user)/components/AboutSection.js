'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-8 xl:px-20 2xl:px-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left Column: Image - বড় হবে এবং Y-axis বরাবর সম্পূর্ণ */}
          <div className="relative order-2 md:order-1">
            <div className="relative order-2 md:order-1 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1100px] w-full">
              <Image
                src="/images/hero.png"
                alt="Elyvion Team"
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="relative text-black text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-6">
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

            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Founded in 2010 by serial entrepreneurs, Elyvion was built to
              bring together a versatile team of senior experts dedicated to
              helping businesses of all sizes thrive.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Today, we're a team of 40+ entrepreneurs with a proven track
              record of success.
            </p>

            {/* Button Group - Exact same as your HTML */}
            <div
              className="inline-flex items-center justify-between transition-all duration-300 ease-in-out cursor-pointer"
              style={{ width: '240px' }}
            >
              {/* Left Circle Button (hidden) */}
              <div
                className="flex items-center justify-center bg-black rounded-full transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  width: '0px',
                  height: '40px',
                  opacity: 0,
                  transform: 'scale(0)',
                  flexShrink: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4 text-white"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>

              {/* Main Button */}
              <button
                className="
                  px-6 py-2 bg-black text-white font-medium rounded-full
                  transition-all duration-300 ease-in-out
                  flex-grow cursor-pointer
                  hover:shadow-md
                "
                style={{ width: 'calc(100% - 48px)' }}
              >
                See Our Services
              </button>

              {/* Right Circle Button */}
              <div
                className="flex items-center justify-center bg-black rounded-full transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  width: '40px',
                  height: '40px',
                  opacity: 1,
                  transform: 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4 text-white"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}