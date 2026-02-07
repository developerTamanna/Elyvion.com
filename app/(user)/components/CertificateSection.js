"use client";

import { useState } from "react";
import Image from "next/image";

export default function CertificateSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Certificate/companies_house_document-01-Clz3w18j.jpg",
    "/Certificate/companies_house_document-02-Bz936KEd.jpg",
    "/Certificate/companies_house_document-03-BqMiy5BG.jpg",
    "/Certificate/companies_house_document-04-_KSqUXdV.jpg",
    "/Certificate/companies_house_document-05-C6aHcmKG.jpg",
    "/Certificate/companies_house_document-06-CIPxF54M.jpg",
    "/Certificate/companies_house_document-07-BF8w2CaQ.jpg",
    "/Certificate/companies_house_document-08-D-YT3fn9.jpg",
    "/Certificate/companies_house_document-09-bjVE9q7v.jpg",
    "/Certificate/companies_house_document-10-pLDVvW1s.jpg",
    "/Certificate/companies_house_document-11-BC8NSVP2.jpg",
    "/Certificate/companies_house_document-12-CSKd1nuJ.jpg",
    "/Certificate/companies_house_document-13-C7fdyiGb.jpg",
  ];

  const totalPages = images.length;

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setCurrentIndex(0);
  };

  const nextPage = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 bg-gray-50 py-10">
      {/* Main section */}
      <div className="bg-white border border-black rounded-3xl p-6">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="w-full inline-flex items-center gap-4">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Certificate of Incorporation</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              View our official Certificate of Incorporation issued by Companies House.
            </p>
          </div>
          <div className="w-full text-right">
            <button onClick={toggleModal} className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-teal-700 transition-all">
              View Document
            </button>
          </div>
        </div>
      </div>

      {/* --- PopUp --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl flex flex-col h-full max-h-[96vh] overflow-hidden">
            
            {/* header part */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-sm text-black">Certificate of Incorporation</h2>
              <button onClick={toggleModal} className="text-gray-400 hover:text-black text-2xl leading-none">&times;</button>
            </div>

            {/* Inner part */}
            <div className="flex-1 overflow-hidden bg-white p-4 sm:p-6 flex flex-col items-center">
              <div className="relative w-full h-full max-h-[75vh] border border-gray-300 rounded-md shadow-inner bg-white overflow-hidden">
                <Image 
                  src={images[currentIndex]} 
                  alt={`Page ${currentIndex + 1}`} 
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* navigation buttons */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <button 
                  onClick={prevPage} 
                  disabled={currentIndex === 0}
                  className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded text-xs font-semibold text-gray-700 transition-colors"
                >
                  Previous
                </button>
                
                <span className="text-xs font-bold text-gray-800">
                  Page {currentIndex + 1} of {totalPages}
                </span>

                <button 
                  onClick={nextPage} 
                  disabled={currentIndex === totalPages - 1}
                  className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded text-xs font-semibold text-gray-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            {/* close button */}
            <div className="px-6 py-4 border-t flex justify-end">
              <button 
                onClick={toggleModal}
                className="px-6 py-1.5 bg-gray-50 border rounded-md text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}