"use client";

import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full py-10 md:py-16 px-3 md:px-16 lg:px-12 bg-white md:mt-20">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">

        {/* Left Side */}
        <div className="relative rounded-3xl bg-amber-400 overflow-hidden aspect-square md:aspect-auto md:min-h-[520px] lg:min-h-[620px] group">
          <div className="absolute bottom-0 p-6 md:p-10 text-black max-w-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">How we help</h2>
            <p className="text-sm md:text-base text-black/90 leading-relaxed">
              We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast‑growth brands across the globe.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:min-h-[520px] lg:min-h-[620px] group">
          <Image
            src="/service/banner.png"
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