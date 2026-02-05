'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-end overflow-hidden pb-24 sm:pb-32 lg:pb-40"
      aria-label="Hero section showcasing earning freedom"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cover.png"
          alt="Misty mountain landscape"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* LEFT-BOTTOM BLUE OVERLAY ONLY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-tr
            from-blue-300/55
            via-sky-100/25
            to-transparent
          "
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="font-extrabold leading-[1.05] mb-6 tracking-tight text-5xl sm:text-5xl md:text-6xl lg:text-6xl">
            <span className="block text-black">our gateway to earning</span>
            <span className="text-black">freedom </span>
            <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              wherever you are.
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-lg mb-8 text-sm sm:text-base text-black/80 font-medium">
            Experience curated shopping made simple, secure, and seamless.
          </p>

          {/* CTA */}
          <Link
            href="/services"
            className="group inline-flex items-center bg-black rounded-full p-1.5 pr-6 hover:pr-1.5 hover:pl-6 transition-all duration-500 ease-in-out w-fit"
          >
            <div className="order-2 group-hover:order-1 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <span className="order-1 group-hover:order-2 text-white font-medium text-sm sm:text-base px-3 whitespace-nowrap">
              Browse Our Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
