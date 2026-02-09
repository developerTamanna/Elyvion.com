'use client';

import { CheckCircle, Clock, FileText } from 'lucide-react';
import { useState } from 'react';

// 1. DATA
const CAMPAIGNS_DATA = [
  {
    id: 1072485,
    code: 'ZU28O7',
    type: 'Golden Egg Campaign',
    status: 'Pending',
    title: 'ROLLS ROYCE',
    subtitle: 'NikitaAshley',
    price: 16285.0,
    commissionRate: '50.00%',
    taskCode: 'ZU28O7',
    profit: 8142.5,
    showInsufficientButton: true,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rolls-Royce_Motor_Cars_logo.svg',
    typeStyle: 'bg-[#FFF8E1] text-[#D4A017]',
    statusStyle: 'bg-[#FFF3E0] text-[#FB8C00]',
    statusIcon: <Clock size={14} className="mr-1" />,
  },
  {
    id: 1072437,
    code: 'MN38O2',
    type: 'Exclusive Campaign',
    status: 'Completed',
    title: 'CHANEL',
    subtitle: 'LuxuryPerfume',
    price: 7456.0,
    commissionRate: '25.00%',
    taskCode: 'MN38O2',
    profit: 1864.0,
    showInsufficientButton: false,
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg',
    typeStyle: 'bg-[#F3E5F5] text-[#8E24AA]',
    statusStyle: 'bg-[#E8F5E9] text-[#43A047]',
    statusIcon: <CheckCircle size={14} className="mr-1" />,
  },
];

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCampaigns = CAMPAIGNS_DATA.filter((campaign) => {
    if (activeTab === 'All') return true;
    return campaign.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      {/* HEADER */}
      <div className="bg-white pt-20 sm:pt-24 mt-6 flex flex-col items-center justify-center">
        {/* Product Campaigns Title (aligned with tabs, slightly left) */}
        <div className="max-w-3xl w-full mx-auto px-4">
          <h1 className="text-xl font-bold text-slate-900">
            Product Campaigns
          </h1>
        </div>

        {/* Tabs */}
        <div className="inline-flex items-center mx-auto justify-between w-full max-w-3xl gap-4 border-b border-gray-200 md:mx-4 mb-6 mt-6">
          {['All', 'Pending', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 md:flex-none md:px-12 pb-3 text-sm font-medium transition-all duration-200 relative ${
                activeTab === tab
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CARD LIST */}
      <div className="px-4 w-full max-w-3xl mx-auto space-y-6">
        {filteredCampaigns.map((item) => (
          <div
            key={item.id}
            className="border border-slate-300 rounded-xl p-6 bg-white shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
              <div className="text-xs text-slate-500 font-medium tracking-wide">
                <span className="text-slate-900 font-bold">
                  Campaign #{item.id}
                </span>
                <span className="mx-2 text-slate-300">|</span>
                Code: {item.code}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] px-2 py-1 rounded font-bold ${item.typeStyle}`}
                >
                  {item.type}
                </span>
                <span
                  className={`text-[11px] px-2 py-1 rounded font-bold flex items-center ${item.statusStyle}`}
                >
                  {item.statusIcon}
                  {item.status}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-20 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-full object-contain max-h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-orange-400 font-bold text-xl">
                  RM{' '}
                  {item.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Commission: {item.commissionRate}
                </p>
              </div>
            </div>

            <hr className="border-slate-100 mb-6" />

            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="w-1/2 md:w-1/3">
                  <p className="text-[12px] text-slate-500 font-medium mb-1 flex items-center gap-1">
                    <FileText size={13} /> Task Code
                  </p>
                  <p className="text-base text-slate-700 font-medium">
                    {item.taskCode}
                  </p>
                </div>

                <div className="w-1/2 md:w-1/3">
                  <p className="text-[12px] text-slate-500 font-medium mb-1">
                    RM Profit
                  </p>
                  <p className="text-base font-bold text-[#00C853]">
                    RM{' '}
                    {item.profit.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>

              {item.showInsufficientButton && (
                <div className="flex justify-end mt-4">
                  <button
                    disabled
                    className="px-6 py-2.5 bg-[#CFD8DC] text-white text-sm font-bold rounded-lg cursor-not-allowed"
                  >
                    Insufficient Balance
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No campaigns found.
          </div>
        )}
      </div>
    </div>
  );
}
