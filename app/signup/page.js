"use client";
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    country: "+49",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "Male",
    referral: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.phone || !formData.password) {
      return setError("Please fill all required fields");
    }
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }
    if (!formData.terms) {
      return setError("You must accept Terms & Conditions");
    }

    // API call here
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-teal-50 p-4 pt-10">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/logo/logo.png" alt="ELYVION" width={90} height={90} />
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-[#0f5366] text-sm mt-1">
            Start your journey toward financial independence with us
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-sm font-semibold">Username</label>
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f6f] outline-none" />
          </div>

          {/* Country + Phone */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-sm font-semibold">Country</label>
              <select name="country" value={formData.country} onChange={handleChange} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg">
                <option value="+49">DE (+49)</option>
                <option value="+880">BD (+880)</option>
                <option value="+1">US (+1)</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-sm font-semibold">Phone Number</label>
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f6f] outline-none" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f6f] outline-none" />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-semibold">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Enter your password again" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f6f] outline-none" />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="max-w-[25%] mt-1 px-3 py-2 border border-gray-300 rounded-lg">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Referral */}
          <div>
            <label className="text-sm font-semibold">Referral Code</label>
            <input name="referral" value={formData.referral} onChange={handleChange} placeholder="Enter referral code" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
            I accept the <span className="text-[#1a5f6f] font-medium">Terms and Conditions</span>
          </label>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Button */}
          <button className="w-full bg-[#1a5f6f] text-white py-3 rounded-lg font-semibold hover:bg-[#164d5c] transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? {" "}
          <Link href="/login" className="text-[#1a5f6f] font-semibold">Sign in</Link>
        </p>
      </div>
    </div>
  );
}