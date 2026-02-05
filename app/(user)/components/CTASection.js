"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-br from-teal-700 to-teal-600 rounded-3xl overflow-hidden">
          {/* Content */}
          <div className="p-8 sm:p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Grow with us. With Elyvion.
            </h2>
            
            <Link 
              href="/campaign"
              className="inline-flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Launch Campaign!</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Logo */}
          <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
            <div className="text-center">
              <div className="mb-6">
                <Image src="/logo/logo.png" alt="Elyvion" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

