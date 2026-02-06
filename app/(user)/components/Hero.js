'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative mt-22    h-[100vh]  max-h-[470px] md:max-h-[470px] lg:max-h-[530px]  w-full flex items-end overflow-auto pb-16 sm:pb-20 lg:pb-24"
      >
      {/* Background */}
      <div className="absolute inset-0  -z-10 w-full">
        <Image
          src="/images/hero.jpeg"
          alt="Misty mountain landscape"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* LEFT-BOTTOM BLUE OVERLAY ONLY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-tr
            from-blue-300/55
            via-sky-100/25
            to-transparent
          "
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="w-full px-7 xl:px-20  absolute   left-0 bottom-20 ">
        <div className=" w-full lg:w-[63.81%]  md:items-center">
          {/* Heading */}
          <h1 className="font-bold h-auto  leading-none mb-6 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[50.5px]  2xl:text-7xl ">
            <span className="block text-black">our gateway to earning freedom<span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"> wherever you are.</span></span>
          </h1>

          {/* Subtext */}
          <p className="max-w-lg mb-10 leading-none text-[17px] text-black/80 ">
            Experience curated shopping made simple, secure, and seamless.
          </p>

          {/* CTA */}
          <Link
            href="/services"
            className="group hover:translate-x-10 relative inline-flex items-center bg-black rounded-full  transition-all duration-500 ease-in-out w-fit"
          >
            <div className="order-2  absolute -right-10 group-hover:-left-10   flex items-center justify-center w-10 h-10 rounded-full bg-black text-white   transition-all duration-1000 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5   font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <span className="order-1 z-10 text-white  text-base px-7 py-2 whitespace-nowrap">
              Browse Our Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
