'use client';

import { ChevronLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

/* 🔹 DATA ARRAYS */
const withdrawalMethods = [
  'Bank Account',
  "Touch 'n Go eWallet",
  'USDT wallet address',
];

const banks = [
  'Maybank',
  'CIMB Bank',
  'Public Bank',
  'Hong Leong Bank',
  'RHB Bank',
  'Bank Islam',
  'AmBank',
  'Bank Rakyat',
  'BSN (Bank Simpanan Nasional)',
  'HSBC',
  'Standard Chartered',
  'OCBC Bank',
  'UOB Bank',
  'Alliance Bank',
  'Affin Bank',
  'Bank Muamalat',
  'Agrobank',
  'MBSB Bank',
];

export default function WithdrawalInformationPage() {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Withdrawal Data:', data);

    toast.success('Withdrawal information updated successfully!');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* HEADER */}
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
              Withdrawal Information
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* FORM CARD */}
        <div className="bg-white rounded-lg p-6 ring-1 ring-black ring-opacity-5">
          <p className="text-gray-600 mb-6">
            Set up your withdrawal information to enable withdrawals from your
            account. This information will be used when you request to withdraw
            funds.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Withdrawal Method */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Withdrawal Method
              </label>
              <select
                {...register('withdrawalMethod', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              >
                {withdrawalMethods.map((method) => (
                  <option key={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Bank Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <select
                {...register('bankName', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              >
                <option>Select bank</option>
                {banks.map((bank) => (
                  <option key={bank}>{bank}</option>
                ))}
              </select>
            </div>

            {/* Account Holder */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Account Holder Name
              </label>
              <input
                type="text"
                defaultValue="Nikita Ashley Fernandez"
                {...register('accountHolder', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Account Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                defaultValue="23650218816"
                {...register('accountNumber', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-colors
                ${
                  submitted
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                }`}
            >
              <Save className="w-5 h-5" />
              {submitted ? 'Updated' : 'Update Information'}
            </button>
          </form>
        </div>

        {/* NOTICE */}
        <div className="bg-yellow-50 rounded-lg p-6 ring-1 ring-black ring-opacity-5 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Important Notice
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Please ensure all the information provided is accurate.</p>
            <p>• Withdrawals must match your personal details.</p>
            <p>• Changes may require verification.</p>
            <p>• Processing time is typically 24–48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
