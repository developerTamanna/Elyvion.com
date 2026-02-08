import {
  Award,
  ChevronRight,
  Copy,
  History,
  KeyRound,
  LogOut,
  MinusCircle,
  PlusCircle,
  Settings,
  User,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

/* =======================
   MENU DATA (ARRAY)
======================= */
const menuLinks = [
  {
    icon: Wallet,
    label: 'Withdrawal information',
    href: '/account/withdrawalInfo',
  },
  {
    icon: KeyRound,
    label: 'Login password',
    href: '/account/login-password',
  },
  {
    icon: KeyRound,
    label: 'Withdrawal password',
    href: '/account/withdrawal-password',
  },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-10">
      <div className="bg-white pt-20 sm:pt-24 mt-6">
        {/* Title */}
        <div className="bg-white border-b-1 border-gray-100 pb-4">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-xl font-bold text-slate-900">Account</h1>
          </div>
        </div>

        <div className="px-4 max-w-2xl mx-auto space-y-5 mt-6">
          {/* PROFILE CARD */}
          <div className="bg-[#FAF6EC] rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                <User size={28} className="text-slate-300" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold">NikitaAshley</h2>
                  <span className="bg-[#f6e5c4] text-[10px] text-yellow-400 font-bold px-2.5 py-2 rounded-full">
                    VIP 1
                  </span>
                </div>
                <p className="text-sm text-slate-500">46683</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl px-4 py-3 flex gap-2 items-center">
                <span className="text-sm text-slate-500">Referral Code</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">IQMK315W4</span>
                  <Copy
                    size={16}
                    className="text-yellow-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl px-4 py-3 flex items-center">
                <span className="text-sm text-slate-500 mr-2">
                  Credit Score
                </span>
                <span className="font-bold text-yellow-500">100%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="bg-white py-3 rounded-2xl flex items-center justify-center gap-2">
                <PlusCircle className="text-yellow-500 transition-colors" />
                Deposit
              </button>

              <button className="bg-white py-3 rounded-2xl flex items-center justify-center gap-2">
                <MinusCircle className="text-yellow-500 transition-colors" />
                Withdraw
              </button>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 flex items-center justify-between text-white">
              <div className="flex gap-3">
                <Award className="text-yellow-400" />
                <div>
                  <p className="font-bold">Your current level VIP 1</p>
                  <p className="text-xs text-slate-400">
                    Membership class gets more privileges
                  </p>
                </div>
              </div>
              <button className="bg-slate-700 px-4 py-1.5 rounded-full text-xs">
                Check
              </button>
            </div>
          </div>

          {/* COMMON FUNCTIONS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold mb-5">Common functions</h3>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Member Level' },
                { icon: History, label: 'Transaction History' },
                { icon: Settings, label: 'Customer service' },
              ].map(({ icon: Icon, label }, i) => (
                <button
                  key={i}
                  className="group flex flex-col items-center gap-2 py-4 rounded-xl border border-slate-100"
                >
                  <div className="w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center">
                    <Icon
                      size={20}
                      className="text-slate-400 group-hover:text-yellow-500 transition-colors"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MENU LINKS */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {menuLinks.map((item, index) => (
              <MenuItem
                key={index}
                icon={<item.icon size={18} />}
                label={item.label}
                href={item.href}
                isLast={index === menuLinks.length - 1}
              />
            ))}
          </div>

          {/* LOGOUT */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <button className="group w-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <LogOut size={18} className="text-red-500 transition-colors" />
                <span className="text-sm font-medium text-red-500">Logout</span>
              </div>
              <ChevronRight
                size={18}
                className="text-slate-300 group-hover:text-yellow-400 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
   MENU ITEM COMPONENT
======================= */
function MenuItem({ icon, label, href, isLast = false }) {
  return (
    <Link href={href}>
      <button
        className={`group w-full flex items-center justify-between p-4
        ${!isLast ? 'border-b border-slate-100' : ''}`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-400 group-hover:text-yellow-500 transition-colors">
            {icon}
          </span>
          <span className="text-sm font-medium text-slate-700">{label}</span>
        </div>
        <ChevronRight
          size={18}
          className="text-slate-300 group-hover:text-yellow-400 transition-colors"
        />
      </button>
    </Link>
  );
}
