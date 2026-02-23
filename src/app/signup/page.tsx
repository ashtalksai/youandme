"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    // Simulate signup - replace with real auth
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created! Signup functionality coming soon.");
    }, 1000);
  };

  const handleGoogleSignup = () => {
    // Replace with real Google OAuth
    alert("Google signup coming soon!");
  };

  return (
    <div className="min-h-screen bg-[#0f1419] flex items-center justify-center px-4 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link href="/" className="block text-center mb-8">
          <span className="font-serif text-3xl text-[#f5f5f0]">You&Me</span>
        </Link>

        {/* Signup Card */}
        <div className="bg-[#1a2129] border border-white/10 rounded-sm p-8">
          <h1 className="font-serif text-2xl text-[#f5f5f0] text-center mb-2">Create your account</h1>
          <p className="text-[#9ca3af] text-center mb-8">Start discovering unforgettable experiences</p>

          {/* Google OAuth Button */}
          <button 
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 bg-[#242d38] border border-white/10 rounded-sm px-6 py-3 text-[#f5f5f0] hover:border-white/20 transition-colors mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1a2129] text-[#6b7280]">or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-[#9ca3af] mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full bg-[#242d38] border ${errors.name ? 'border-[#ef4444]' : 'border-white/10'} rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-[#ef4444] text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#9ca3af] mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full bg-[#242d38] border ${errors.email ? 'border-[#ef4444]' : 'border-white/10'} rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-[#ef4444] text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-[#9ca3af] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                className={`w-full bg-[#242d38] border ${errors.password ? 'border-[#ef4444]' : 'border-white/10'} rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-[#ef4444] text-sm mt-1">{errors.password}</p>
              )}
              {!errors.password && (
                <p className="text-[#6b7280] text-xs mt-1">Must be at least 8 characters</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-[#9ca3af] mb-2">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" });
                }}
                className={`w-full bg-[#242d38] border ${errors.confirmPassword ? 'border-[#ef4444]' : 'border-white/10'} rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-[#ef4444] text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 accent-[#7f263a]" 
                required 
              />
              <label htmlFor="terms" className="text-sm text-[#9ca3af]">
                I agree to the{" "}
                <a href="#" className="text-[#c9a961] hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-[#c9a961] hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7f263a] hover:bg-[#9d3e4b] disabled:opacity-50 text-[#f5f5f0] px-6 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-center text-[#9ca3af] mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a961] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
