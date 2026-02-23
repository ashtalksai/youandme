"use client";

import Link from "next/link";
import { useState } from "react";

export default function OperatorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    experienceType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f1419]/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <span className="font-serif text-2xl text-[#f5f5f0]">You&Me</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/experiences" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Experiences</Link>
              <Link href="/about" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">About</Link>
              <Link href="/login" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Log in</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-[#c9a961] text-[#c9a961] text-sm font-mono uppercase tracking-wider mb-6">
            For Experience Creators
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#f5f5f0] leading-tight mb-6">
            Turn your passion<br />into bookings
          </h1>
          <p className="text-xl text-[#9ca3af]">
            You create the experience. We bring the couples. No upfront costs, flexible scheduling, you set the price.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#242d38] border border-white/10 rounded-sm p-6">
              <div className="w-12 h-12 bg-[#7f263a]/20 rounded-full flex items-center justify-center text-2xl mb-4">
                💰
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">No upfront costs</h3>
              <p className="text-[#9ca3af]">
                List your experience for free. We only take a small commission when you get booked.
              </p>
            </div>

            <div className="bg-[#242d38] border border-white/10 rounded-sm p-6">
              <div className="w-12 h-12 bg-[#2d4a3e]/20 rounded-full flex items-center justify-center text-2xl mb-4">
                📅
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Flexible calendar</h3>
              <p className="text-[#9ca3af]">
                Set your own availability. Block dates when you&apos;re busy. Run experiences on your schedule.
              </p>
            </div>

            <div className="bg-[#242d38] border border-white/10 rounded-sm p-6">
              <div className="w-12 h-12 bg-[#c9a961]/20 rounded-full flex items-center justify-center text-2xl mb-4">
                🏷️
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">You set the price</h3>
              <p className="text-[#9ca3af]">
                Full control over your pricing. Adjust seasonally, offer specials, maximize your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12 text-center">How it works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7f263a] rounded-full flex items-center justify-center text-[#f5f5f0] font-mono text-sm">
                1
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Apply to list</h3>
                <p className="text-[#9ca3af]">
                  Tell us about your experience. We review every application to ensure quality and uniqueness.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7f263a] rounded-full flex items-center justify-center text-[#f5f5f0] font-mono text-sm">
                2
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Create your listing</h3>
                <p className="text-[#9ca3af]">
                  Add photos, write your story, set pricing and availability. We help you craft a compelling page.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7f263a] rounded-full flex items-center justify-center text-[#f5f5f0] font-mono text-sm">
                3
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Start getting booked</h3>
                <p className="text-[#9ca3af]">
                  Couples discover and book your experience. You get paid within 48 hours of completion.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7f263a] rounded-full flex items-center justify-center text-[#f5f5f0] font-mono text-sm">
                4
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Grow your business</h3>
                <p className="text-[#9ca3af]">
                  Build reviews, get featured, expand availability. We handle marketing so you can focus on experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-4">Simple, fair pricing</h2>
          <p className="text-[#9ca3af] mb-8">We only make money when you do</p>
          <div className="bg-[#242d38] border border-white/10 rounded-sm p-8 max-w-md mx-auto">
            <div className="text-5xl font-serif text-[#c9a961] mb-2">10%</div>
            <div className="text-[#f5f5f0] font-medium mb-4">commission per booking</div>
            <ul className="text-[#9ca3af] text-sm space-y-2">
              <li>✓ Free to list</li>
              <li>✓ No monthly fees</li>
              <li>✓ No minimum bookings</li>
              <li>✓ Payments within 48 hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-8 text-center">Apply to list your experience</h2>
          
          {submitted ? (
            <div className="bg-[#2d4a3e]/20 border border-[#2d4a3e] rounded-sm p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">Application received!</h3>
              <p className="text-[#9ca3af]">
                We&apos;ll review your experience and get back to you within 3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#1a2129] border border-white/10 rounded-sm p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#9ca3af] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors"
                  placeholder="Jane Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#9ca3af] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm text-[#9ca3af] mb-2">
                  Business or experience name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors"
                  placeholder="Harbor Adventures"
                  required
                />
              </div>

              <div>
                <label htmlFor="experienceType" className="block text-sm text-[#9ca3af] mb-2">
                  What vibe does your experience create?
                </label>
                <select
                  id="experienceType"
                  value={formData.experienceType}
                  onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                  className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] focus:outline-none focus:border-[#7f263a] transition-colors"
                  required
                >
                  <option value="">Select a vibe</option>
                  <option value="romantic">Romantic & Intimate</option>
                  <option value="adventurous">Adventurous & Active</option>
                  <option value="creative">Creative & Hands-on</option>
                  <option value="competitive">Competitive & Playful</option>
                  <option value="relaxing">Relaxing & Cozy</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm text-[#9ca3af] mb-2">
                  Tell us about your experience
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] placeholder-[#6b7280] focus:outline-none focus:border-[#7f263a] transition-colors resize-none"
                  placeholder="What makes your experience special? What will couples remember?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7f263a] hover:bg-[#9d3e4b] disabled:opacity-50 text-[#f5f5f0] px-6 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/">
              <span className="font-serif text-xl text-[#f5f5f0]">You&Me</span>
            </Link>
            <div className="flex gap-6 text-sm text-[#6b7280]">
              <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
              <Link href="/operators" className="hover:text-[#f5f5f0] transition-colors">Become an Operator</Link>
              <Link href="/login" className="hover:text-[#f5f5f0] transition-colors">Login</Link>
            </div>
            <p className="text-sm text-[#6b7280]">© 2026 You&Me</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
