"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-start overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cover.png" 
          alt="Misty mountain landscape background representing freedom and opportunity"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-blue-300/60" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-black">our gateway to earning</span>
            <br />
            <span className="text-black">freedom </span>
            <span className="text-white drop-shadow-lg">wherever you are.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-2xl drop-shadow-sm">
            Experience curated shopping made simple, secure, and seamless.
          </p>

          <div className="flex items-center gap-4">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Browse our services"
            >
              <span>Browse Our Services</span>
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

