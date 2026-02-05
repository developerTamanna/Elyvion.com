"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/hero.png" 
                  alt="Team" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" viewBox="0 0 40 40" fill="currentColor">
                <path d="M5 5 L15 5 L10 15 L5 15 Z M25 5 L35 5 L30 15 L25 15 Z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              We blend creative and performance
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Founded in 2010 by serial entrepreneurs, Elyvion was built to bring together a versatile team of senior experts dedicated to helping businesses of all sizes thrive.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our approach combines innovative thinking with data-driven strategies to deliver measurable results that drive growth and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

