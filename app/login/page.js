"use client";
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  /* const searchParams = useSearchParams(); */
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirect = /* searchParams.get("redirect") || */ "/";
      router.push(redirect);
    }
  }, [isAuthenticated, router,/*  searchParams */]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    // Basic validation - you can replace this with actual API call
    if (formData.username && formData.password) {
      // Simulate login - replace with actual authentication logic
      login();
      
      // Redirect to the intended page or home
      const redirect = /* searchParams.get("redirect")  */ "/";
      router.push(redirect);
    } else {
      setError("Please enter both username and password");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2f7] to-[#cfe8f3] flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="">
        <div className="flex flex-col items-center">
          <Image 
            src="/logo/logo.png" 
            alt="ELYVION" 
            width={100} 
            height={100}
            className=""
          />
        </div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative mt-10">
        {/* Back Arrow */}
        <button 
          onClick={() => router.back()}
          className="absolute left-6 top-8 text-[#4db8ac] hover:text-[#3a9488] transition-colors"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8 mt-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600 text-sm">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-900 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5f6f] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5f6f] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link 
              href="/forgot-password" 
              className="text-sm text-[#1a5f6f] hover:text-[#164d5c] font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#1a5f6f] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#164d5c] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link 
              href="/signup" 
              className="text-[#1a5f6f] font-semibold hover:text-[#164d5c] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}