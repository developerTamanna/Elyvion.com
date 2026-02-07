"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const serviceLinks = [
    { name: "Social", href: "/services" },
    { name: "Paid", href: "/services" },
    { name: "Earn", href: "/services" },
    { name: "Growth", href: "/services" }
  ];

  const companyLinks = [
    { name: "Services", href: "/services" },
    { name: "Start Campaign", href: "/campaign" },
    { name: "Account", href: "/account" },
    { name: "Certificate", href: "/help" }
  ];

  return (
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
  );
}