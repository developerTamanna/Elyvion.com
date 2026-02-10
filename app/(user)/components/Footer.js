'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  // --- Modal State & Logic ---
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/Certificate/companies_house_document-01-Clz3w18j.jpg',
    '/Certificate/companies_house_document-02-Bz936KEd.jpg',
    '/Certificate/companies_house_document-03-BqMiy5BG.jpg',
    '/Certificate/companies_house_document-04-_KSqUXdV.jpg',
    '/Certificate/companies_house_document-05-C6aHcmKG.jpg',
    '/Certificate/companies_house_document-06-CIPxF54M.jpg',
    '/Certificate/companies_house_document-07-BF8w2CaQ.jpg',
    '/Certificate/companies_house_document-08-D-YT3fn9.jpg',
    '/Certificate/companies_house_document-09-bjVE9q7v.jpg',
    '/Certificate/companies_house_document-10-pLDVvW1s.jpg',
    '/Certificate/companies_house_document-11-BC8NSVP2.jpg',
    '/Certificate/companies_house_document-12-CSKd1nuJ.jpg',
    '/Certificate/companies_house_document-13-C7fdyiGb.jpg',
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

  // --- Links Configuration ---
  const serviceLinks = [
    { name: 'Social', href: '/services' },
    { name: 'Paid', href: '/services' },
    { name: 'Earn', href: '/services' },
    { name: 'Growth', href: '/services' },
  ];

  const companyLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Start Campaign', href: '/campaign' },
    { name: 'Account', href: '/account' },
    { name: 'Certificate', action: 'modal' }, // Marked to trigger modal
  ];

  return (
    <>
      <footer className="bg-black text-white py-12 md:py-24 relative z-10">
        <div className="w-full mx-auto px-6 md:px-24 md:mt-12">
          {/* Main Content Wrapper */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-12 md:gap-32 lg:gap-48">
            {/* 1. Logo Section */}
            <div className="shrink-0">
              <Image
                src="/logo/logo.png"
                alt="Elyvion"
                width={180}
                height={50}
                className="w-40 md:w-44 lg:w-48 h-auto object-contain"
              />
            </div>

            {/* 2. Links Section*/}
            <div className="grid grid-cols-2 gap-10 md:pl-14 md:flex md:flex-row md:gap-32 lg:gap-48 w-full md:w-auto">
              {/* Our Services Column */}
              <div className="flex flex-col">
                <h4 className="text-sm md:text-base font-bold mb-5 md:mb-6 text-white whitespace-nowrap">
                  Our Services
                </h4>
                <ul className="flex flex-col gap-3">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all text-sm md:text-base font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-col">
                <h4 className="text-sm md:text-base font-bold mb-5 md:mb-6 text-white whitespace-nowrap">
                  Company
                </h4>
                <ul className="flex flex-col gap-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      {link.action === 'modal' ? (
                        <button
                          onClick={toggleModal}
                          className="text-gray-300 hover:text-white transition-all text-sm md:text-base font-medium text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-all text-sm md:text-base font-medium"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar: Copyright Section */}
          <div className="mt-12 md:mt-20 pt-8 border-t border-gray-800 pb-8 md:pb-0">
            <div className="flex flex-row items-center gap-6 md:gap-10 text-gray-500 text-[10px] sm:text-xs md:text-sm font-medium">
              <span className="whitespace-nowrap">©2025 Elyvion</span>
              <span className="whitespace-nowrap">All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Certificate Modal Popup --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] shadow-2xl flex items-center justify-center px-4 sm:p-0 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl sm:p-7 p-4 bg-white rounded-lg shadow-2xl flex flex-col h-full max-h-[90vh] overflow-hidden">
            {/* header part */}
            <div className="flex items-center justify-between pb-5 ">
              <h2 className="text-base sm:text-lg font-semibold text-black sm:text-start text-center w-full">
                Certificate of Incorporation
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-700 hover:text-black text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="overflow-auto">
              {/* Inner part */}
              <div className="flex-1 max-h-[600px] h-screen border-3 sm:border-5 border-gray-100 rounded-tl-md rounded-bl-md bg-white p-2 sm:p-6 flex flex-col items-center justify-center">
                <div className="relative w-full max-h-[400px] sm:w-[350px] h-full sm:max-h-[500px] shadow-md rounded-md bg-white overflow-hidden">
                  <Image
                    src={images[currentIndex]}
                    alt={`Page ${currentIndex + 1}`}
                    fill
                    className="object-contain p-2"
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
            <div className="pt-4 flex sm:justify-end justify-center">
              <button
                onClick={toggleModal}
                className="px-4 py-2 sm:w-auto w-full bg-gray-50 text-base rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
