"use client";

export default function CertificateSection() {
  return (
    <section className="py-4 sm:py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Icon and Content */}
            <div className="flex items-start gap-4 sm:gap-6 flex-1">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Certificate of Incorporation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  View our official Certificate of Incorporation issued by Companies House. This document verifies our status as a registered private limited company in accordance with the Companies Act 2006.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button className="inline-flex items-center gap-2 sm:gap-3 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>View Document</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

