"use client";

import { Megaphone, BarChart3, Clapperboard, Users } from "lucide-react";

const data = [
  {
    title: "Social",
    icon: Megaphone,
    desc: "We grow cult‑like social communities with platform‑specific strategies",
    items: [
      "Social Strategy",
      "Channel & Community Management",
      "Social‑first Content Creation",
      "Social Listening & Insights",
    ],
  },
  {
    title: "Paid",
    icon: BarChart3,
    desc: "We deliver performance‑driven Paid Social & Search campaigns",
    items: [
      "Paid Social & Paid Search",
      "Full‑Funnel Media Strategy",
      "Creative, Analytics & Testing",
      "Feed Optimisation & Shopping",
    ],
  },
  {
    title: "Creative",
    icon: Clapperboard,
    desc: "Outstanding creative across Video, Design & Motion",
    items: [
      "Organic & Paid Social Video",
      "UGC to High‑Production",
      "Campaign Art Direction",
      "Motion & Animation Graphics",
    ],
  },
  {
    title: "Influencer",
    icon: Users,
    desc: "Brand awareness & direct‑response creator campaigns",
    items: [
      "End‑to‑end Campaign Management",
      "Brand Awareness & Direct Response",
      "UGC Creator Network",
      "Reports & Analysis",
    ],
  },
];

export default function ServicesCards() {
  return (
    <section className="bg-neutral-100 py-14 px-4 md:px-16 lg:px-12">
      <div className="w-full mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-white p-3 rounded-xl">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-5">{card.desc}</p>

              <ul className="space-y-2 text-sm flex-1">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-full border border-black py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                Initiate Campaign!
              </button>
            </div>
          );
        })}
      </div>

      {/* Working Across */}
      <div className="mt-14 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-700">Working Across</p>
        <div className="flex flex-wrap justify-center gap-4 text-black">
          {/* social icons */}
          {[
            require('lucide-react').Instagram,
            require('lucide-react').Facebook,
            require('lucide-react').Globe,
            require('lucide-react').Linkedin,
            require('lucide-react').Youtube,
            require('lucide-react').Twitter,
          ].map((Icon, i) => (
            <div key={i} className="border border-black rounded-xl p-2 hover:bg-black hover:text-white transition">
              <Icon size={22} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}