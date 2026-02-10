'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../../config/constants';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Auto scroll functionality
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    }, 5000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  // Scroll to the current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth =
        container.querySelector('.service-card')?.offsetWidth || 0;
      const gap = 32;
      const scrollPosition = currentIndex * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    }, 5000);
  };

  return (
    <section className="w-full md:px-2 xl:px-4 2xl:px-14 py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
            Our full-service
            <br />
            offering...
          </h2>

          {/* View All Button - Visible only on Desktop in header */}
          <Link
            href="/services"
            className="hidden md:inline-flex group mr-11 hover:translate-x-10 relative items-center bg-black rounded-full transition-all duration-500 ease-in-out w-fit"
          >
            <div className="absolute -right-10 group-hover:-left-10 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white transition-all duration-1000 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <span className="z-10 text-white text-base px-7 py-2 whitespace-nowrap">
              View All Services
            </span>
          </Link>
        </div>

        {/* Scrollable Container with Mobile Arrow */}
        <div className="relative">
          {/* Mobile Specific Arrow - Centered Right */}
          <button
            onClick={handleNext}
            className="flex md:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full items-center justify-center text-white shadow-lg z-20"
            aria-label="Next service"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-8  overflow-x-auto w-full scrollbar-hide scroll-smooth "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES.map((service, index) => (
              <article
                key={index}
                className="service-card  flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33%-20px)] bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-t-4 border-black flex flex-col"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  {/* UPDATED: Injects the SVG directly from data.
                      Added [&>svg]:w-full [&>svg]:h-full to ensure the SVG fills the w-14 h-14 container */}
                  <div
                    className="w-14 h-14 shrink-0 [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: service.icon }}
                  />

                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base font-semibold text-black mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 border-2 border-black rounded-full text-base font-medium text-gray-900 hover:bg-black hover:text-white transition-all">
                  Initiate Campaign
                </button>
              </article>
            ))}
          </div>

          {/* Desktop Navigation Arrow */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-black rounded-full items-center justify-center text-white hover:bg-gray-800 transition-all shadow-lg z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile View All Button - Visible only on Mobile at the bottom */}
        <div className="mt-10 flex justify-center md:hidden ">
          <Link
            href="/services"
            className="group inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold text-base transition-all active:scale-95"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
