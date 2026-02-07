import React from 'react';

export default function InitiateCampaign() {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center py-6 px-2 font-sans text-slate-800">
      {/* Main Container */}
              {/* Page Header (Centered text with border bottom) */}
        <div className="flex w-full py-2 border-b border-slate-200 justify-start items-start">
          <div className='w-full px-4 md:px-40'>
            <h1 className="text-lg items-start md:ml-[33.5%] font-semibold text-slate-700">
            Initiate Campaign
          </h1>
          </div>
        </div>
      <main className="w-full max-w-xl bg-white overflow-hidden min-h-[90vh] md:min-h-fit">
      

        <div className="p-4 md:p-8">
          {/* Campaign Type Label */}
          <div className="mb-6 text-sm font-semibold flex items-center gap-1">
            <span className="text-slate-900">Campaign Type:</span>
            <span className="text-slate-600 font-medium">Golden Egg Campaign</span>
          </div>


          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
            
            {/* Account Balance */}
            <div className="border border-slate-600 rounded-xl p-4 md:gap-y-2 bg-white flex flex-col justify-between h-28 sm:aspect-4/3 md:aspect-auto md:h-20">
              <div>
                <p className="text-[16px] md:text-xs text-slate-400 md:font-medium text-semibold leading-none mb-2">Account Balance</p>
                <p className="md:text-base text-xl font-semibold text-slate-900 leading-none">RM -6,965.00</p>
              </div>
              <p className="text-[10px] md:text-xs pb-1 text-red-500 font-bold">
                Insufficient Balance
              </p>
            </div>

            {/* Number of Campaigns */}
            <div className="border border-slate-600 rounded-xl p-4 bg-white flex flex-col justify-start h-28 sm:aspect-4/3 md:aspect-auto md:h-20">
              <p className="text-[16px] md:text-xs text-slate-400 md:font-medium text-semibold leading-none mb-2">Number of Campaigns</p>
              <p className="md:text-base text-xl font-semibold text-slate-900">30/30</p>
            </div>

            {/* Today's Commission */}
            <div className="border border-slate-600 rounded-xl p-4 bg-white flex flex-col justify-start h-28 sm:aspect-4/3 md:aspect-auto md:h-20">
              <p className="text-[16px] md:text-xs text-slate-400 md:font-medium text-semibold leading-none mb-2">Today's Commission</p>
              <p className="md:text-base text-xl font-semibold text-slate-900">RM 0.00</p>
            </div>

            {/* Withdrawal Amount */}
            <div className="border border-slate-600 rounded-xl p-4 bg-white flex flex-col justify-start h-28 sm:aspect-4/3 md:aspect-auto md:h-20">
              <p className="text-[16px] md:text-xs text-slate-400 md:font-medium text-semibold leading-none mb-2">Withdrawal Amount</p>
              <p className="md:text-base text-xl font-semibold text-slate-900">RM 24,427.50</p>
            </div>

            {/* Trial Balance (Full Width) */}
            <div className="col-span-2 border border-slate-600 rounded-xl p-4 bg-[#f2e9d7] flex items-center justify-between h-14 md:h-14 mt-2">
              <p className="text-xs md:text-sm text-slate-500">Trial Balance</p>
              <p className="text-sm md:text-base font-semibold text-slate-900">RM 0.00</p>
            </div>
          </div>

          {/* Action Button: Rounded-full for pill shape */}
          <div className="mt-8">
            <button className="w-full bg-[#F6BC48] hover:bg-[#e0ab41] text-white font-bold py-3.5 md:py-4 rounded-full shadow-sm transition-all text-sm md:text-base active:scale-95">
              Insufficient Balance
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}