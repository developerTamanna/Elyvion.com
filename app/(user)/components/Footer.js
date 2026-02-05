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
    <footer className="bg-black text-white py-12 mb-7 sm:py-16 md:py-20 pb-20 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo */}
          <div>
              <Image src="/logo/logo.png" alt="Elyvion" width={200} height={200} />
     
          </div>

          {/* Spacing column */}
          <div className="hidden lg:block"></div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm sm:text-base">
            ©2025 Elyvion &nbsp;&nbsp; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

