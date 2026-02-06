import {
  Award,
  ChevronRight,
  Copy,
  History,
  KeyRound,
  LogOut,
  Medal,
  MinusCircle,
  PlusCircle,
  Settings,
  User,
  Wallet,
} from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-10">
      {/* Page Title */}
      <div className="bg-white pt-6 pb-4 px-4">
        <h1 className="text-xl font-bold text-slate-900">Account</h1>
      </div>

      <div className="px-4 max-w-xl mx-auto space-y-4 mt-4">
        {/* --- 1. MAIN PROFILE CARD --- */}
        <div className="bg-[#FAF6EC] rounded-2xl p-5 shadow-sm border border-slate-200">
          {/* User Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-slate-100">
              <User className="text-slate-300" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">
                  NikitaAshley
                </h2>
                <span className="bg-[#F6BC48] text-[10px] font-bold text-white px-2 py-0.5 rounded-full">
                  VIP 1
                </span>
              </div>
              <p className="text-sm text-slate-500">46683</p>
            </div>
          </div>

          {/* Referral Code & Credit Score */}
          <div className="space-y-3 mb-6">
            {/* Referral Code */}
            <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
              <span className="text-sm text-slate-500">Referral Code</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">IQMK315W4</span>
                <button className="text-orange-400">
                  <Copy size={16} />
                </button>
              </div>
            </div>
            {/* Credit Score */}
            <div className="bg-white rounded-xl px-4 py-3 flex items-center shadow-sm">
              <span className="text-sm text-slate-500 mr-2">Credit Score</span>
              <span className="font-bold text-orange-400">100%</span>
            </div>
          </div>

          {/* Deposit & Withdraw Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-white rounded-full py-3 flex items-center justify-center gap-2 shadow-sm font-semibold text-slate-800">
              <PlusCircle className="text-orange-400" size={20} />
              Deposit
            </button>
            <button className="bg-white rounded-full py-3 flex items-center justify-center gap-2 shadow-sm font-semibold text-slate-800">
              <MinusCircle className="text-orange-400" size={20} />
              Withdraw
            </button>
          </div>

          {/* VIP Banner */}
          <div className="bg-[#1E293B] rounded-xl p-4 flex items-center justify-between text-white shadow-sm">
            <div className="flex items-start gap-3">
              <Medal className="text-orange-400 mt-1" size={20} />
              <div>
                <p className="font-bold">Your current level VIP 1</p>
                <p className="text-xs text-slate-400">
                  Membership class gets more privileges
                </p>
              </div>
            </div>
            <button className="bg-[#334155] text-xs font-medium px-4 py-1.5 rounded-full hover:bg-[#475569] transition-colors">
              Check
            </button>
          </div>
        </div>

        {/* --- 2. COMMON FUNCTIONS CARD --- */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4">Common functions</h3>
          <div className="grid grid-cols-3 text-center">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                <Award className="text-slate-400" size={20} />
              </div>
              <span className="text-xs text-slate-600 font-medium">
                Member Level
              </span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                <History className="text-slate-400" size={20} />
              </div>
              <span className="text-xs text-slate-600 font-medium">
                Transaction History
              </span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                <Settings className="text-slate-400" size={20} />
              </div>
              <span className="text-xs text-slate-600 font-medium">
                Customer service
              </span>
            </button>
          </div>
        </div>

        {/* --- 3. MENU LINKS CARD --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <MenuItem
            icon={<Wallet size={18} />}
            label="Withdrawal information"
          />
          <MenuItem icon={<KeyRound size={18} />} label="Login password" />
          <MenuItem
            icon={<KeyRound size={18} />}
            label="Withdrawal password"
            isLast={true}
          />
        </div>

        {/* --- 4. LOGOUT BUTTON --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-red-500">
            <div className="flex items-center gap-3">
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </div>
            <ChevronRight className="text-slate-300" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Menu Items
function MenuItem({ icon, label, isLast = false }) {
  return (
    <button
      className={`w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors ${!isLast ? 'border-b border-slate-100' : ''}`}
    >
      <div className="flex items-center gap-3 text-slate-600">
        {icon}
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      <ChevronRight className="text-slate-300" size={18} />
    </button>
  );
}
