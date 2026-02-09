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
    <section className="px-2 md:px-6 lg:px-10 xl:px-11 2xl:px-20  bg-gray-50">
      {/* Main section */}
      <div className="bg-white border border-black rounded-3xl p-6">
        <div className="flex flex-col items-start  gap-6">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="w-full inline-flex items-center gap-4">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Certificate of Incorporation</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              View our official Certificate of Incorporation issued by Companies House. This document verifies our status as a registered private limited company in accordance with the Companies Act 2006.
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
        <div className="fixed inset-0 z-[999] shadow-2xl flex items-center justify-center px-4 sm:p-0  bg-black/50 backdrop-blur-none">
          <div className="relative w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl sm:p-7 p-4  bg-white rounded-lg shadow-2xl flex flex-col h-full max-h-[90vh] overflow-hidden">
            
            {/* header part */}
            <div className="flex items-center justify-between pb-5 ">
              <h2 className=" text-base sm:text-lg font-semibold text-black sm:text-start text-center w-full">Certificate of Incorporation</h2>
              <button onClick={toggleModal} className="text-gray-700 hover:text-black text-2xl leading-none">&times;</button>
            </div>
            <div className=" overflow-auto ">
              {/* Inner part */}
              <div className="flex-1  max-h-[600px] h-screen border-3 sm:border-5 border-gray-100 rounded-tl-md rounded-bl-md bg-white p-2 sm:p-6 flex flex-col items-center justify-center">
                <div className="relative w-full max-h-[400px] sm:w-[350px] h-full sm:max-h-[500px] shadow-md rounded-md  bg-white overflow-hidden">
                  <Image 
                    src={images[currentIndex]} 
                    alt={`Page ${currentIndex + 1}`} 
                    fill
                    className="object-fit  p-2"
                    priority
                  />
                </div>

                {/* navigation buttons */}
                <div className="mt-4 flex items-center justify-center sm:gap-4 gap-2">
                  <button 
                    onClick={prevPage} 
                    disabled={currentIndex === 0}
                    className="sm:px-4 px-2 py-1.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded text-xs font-semibold text-gray-700 transition-colors"
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
            </div>

            {/* close button */}
            <div className=" pt-4  flex sm:justify-end justify-center">
              <button 
                onClick={toggleModal}
                className="px-4 py-2 sm:w-auto w-full bg-gray-50  text-base rounded-lg shadow-sm  text-gray-700 hover:bg-gray-100 transition-colors"
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