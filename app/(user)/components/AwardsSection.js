'use client';

import Image from 'next/image';
import { AWARDS } from '../../config/constants';

export default function AwardsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-8 xl:px-20 2xl:px-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Quote Icon (Same as AboutSection) */}
            <div className="mb-3 sm:mb-4">
              <svg
                viewBox="0 0 35 33"
                className="fill-current text-black w-4 h-4 md:w-6 md:h-6"
                aria-hidden="true"
              >
                <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              We're multi award-winning
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              We know awards aren't the be-all and end-all. But we're proud of
              what we've achieved and the quality of work our team produces for
              our clients. We've won awards across all of our departments, with
              some key highlights including:
            </p>

            {/* Awards List */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 list-none">
              {AWARDS.map((award, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-gray-800">
                    {award}
                  </span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 transition-all duration-300">
              <span>Learn More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/wining.png"
                alt="Award Winning Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}