'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

/* 🔹 INPUT DATA (same pattern as Change Login Password) */
const inputFields = [
  {
    id: 'currentWithdrawPassword',
    label: 'Current Withdraw Password',
    placeholder: 'Enter your current withdraw password',
    type: 'password',
  },
  {
    id: 'newWithdrawPassword',
    label: 'New Withdraw Password',
    placeholder: 'Enter your new withdraw password',
    type: 'password',
  },
  {
    id: 'confirmWithdrawPassword',
    label: 'Confirm New Withdraw Password',
    placeholder: 'Confirm your new withdraw password',
    type: 'password',
  },
];

export default function ChangeWithdrawPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newWithdrawPassword = watch('newWithdrawPassword');

  const onSubmit = (data) => {
    console.log('Withdraw Password:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* HEADER — SAME AS Change Login Password */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center gap-4">
            <Link
              href="/account"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Link>

            <h1 className="text-xl font-semibold text-gray-800">
              Change Withdraw Password
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT — SAME spacing as Change Login Password */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg p-6 ring-1 ring-black ring-opacity-5">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map(({ id, label, placeholder, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {label}
                </label>

                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  {...register(id, {
                    required: `${label} is required`,
                    ...(id === 'confirmWithdrawPassword' && {
                      validate: (value) =>
                        value === newWithdrawPassword ||
                        'Passwords do not match',
                    }),
                  })}
                  className={`border rounded-md w-full px-3 py-1 text-base outline-none focus:ring-2 ${
                    errors[id]
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />

                {errors[id] && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors[id].message}
                  </p>
                )}
              </div>
            ))}

            {/* BUTTON — SAME POSITION */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-white rounded-lg font-medium hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              Change Withdraw Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
