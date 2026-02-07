"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Calendar, Clock, User } from 'lucide-react';
import { NAVIGATION } from '../../config/constants';

const iconMap = {
  home: Home,
  services: Info,
  campaign: Calendar,
  history: Clock,
  account: User,
};

export default function NavigationBar() {
  const pathname = usePathname();
  
  // Hide navigation bar on login page
  if (pathname === "/login") {
    return null;
  }
  
  const navItems = useMemo(() => 
    NAVIGATION.bottom.map(item => ({
      ...item,
      Icon: iconMap[item.icon],
    })), []
  );

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      aria-label="Bottom navigation"
      role="navigation"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-around items-center py-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center min-w-[60px] py-2 px-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
                aria-label={item.name}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  className={`w-6 h-6 mb-1 transition-colors ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 group-hover:text-gray-900'
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span
                  className={`text-xs transition-colors ${
                    isActive
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-500 group-hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}