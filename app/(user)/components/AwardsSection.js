"use client";

import Image from "next/image";
import { AWARDS } from "../../config/constants";

export default function AwardsSection() {

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" viewBox="0 0 40 40" fill="currentColor">
                <path d="M5 5 L15 5 L10 15 L5 15 Z M25 5 L35 5 L30 15 L25 15 Z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              We're multi award-winning
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              We know awards aren't the be-all and end-all. But we're proud of what we've achieved and the quality of work our team produces for our clients. We've won awards across all of our departments, with some key highlights including:
            </p>

            {/* Awards List */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 list-none">
              {AWARDS.map((award, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-gray-800">{award}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 transition-all duration-300">
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image 
                  src="/images/wining.png" 
                  alt="Award Winning Team" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

