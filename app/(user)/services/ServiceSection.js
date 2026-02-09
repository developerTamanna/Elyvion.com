"use client";

import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full py-10 md:py-16 px-4 md:px-10 lg:px-28 bg-white mt-20 md:mt-20">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">

        {/* Left Card */}
        <div className="relative rounded-3xl bg-[#0f5366] overflow-hidden max-h-[256px] min-h-[256px]  sm:max-h-[256px] sm:min-h-[256px] lg:aspect-auto  lg:max-h-auto lg:min-h-[600px] flex items-center md:items-end">

          {/* Content */}
          <div className="text-white px-8 md:pb-12 lg:px-14 lg:pb-20">
            <h2 className=" md:text-3xl  lg:text-5xl font-bold mb-4">
              How we help
            </h2>

            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              We specialise in Social, Paid, Creative, Influencer and Strategy
              and work with fast-growth brands and household names across the globe.
            </p>
          </div>

        </div>

        {/* Right Card */}
        <div className="relative rounded-3xl overflow-hidden max-h-[256px] min-h-[256px] sm:max-h-[256px] sm:min-h-[256px] lg:aspect-auto lg:max-h-auto lg:min-h-[600px]">
          <Image
            src="/images/Best-Large-Social-Agency-AgJAdqlO.webp"
            alt="Service Right"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

      </div>
    </section>
  );
}