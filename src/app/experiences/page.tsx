"use client";

import Link from "next/link";
import { useState } from "react";

const vibes = [
  { id: "all", name: "Show all", emoji: "✨" },
  { id: "romantic", name: "Romantic", emoji: "❤️" },
  { id: "adventurous", name: "Adventurous", emoji: "🌲" },
  { id: "creative", name: "Creative", emoji: "🎨" },
  { id: "playful", name: "Playful", emoji: "🎲" },
  { id: "competitive", name: "Competitive", emoji: "🏆" },
];

const experiences = [
  { id: 1, slug: "rooftop-dinner", title: "Private Rooftop Dinner", operator: "Chef Marcus", vibe: "romantic", price: 180, image: "🌆", description: "3-course meal under the stars" },
  { id: 2, slug: "midnight-kayaking", title: "Midnight Kayaking", operator: "Harbor Adventures", vibe: "adventurous", price: 95, image: "🛶", description: "Explore the harbor by moonlight" },
  { id: 3, slug: "rooftop-pottery", title: "Rooftop Pottery Class", operator: "Clay & Co", vibe: "creative", price: 120, image: "🎨", description: "Create together, keep forever" },
  { id: 4, slug: "comedy-night", title: "Comedy Date Night", operator: "Laugh Factory", vibe: "playful", price: 75, image: "🎭", description: "VIP seats + backstage access" },
  { id: 5, slug: "wine-tasting", title: "Sunset Wine Tasting", operator: "Valley Vineyards", vibe: "romantic", price: 150, image: "🍷", description: "Private vineyard experience" },
  { id: 6, slug: "escape-room", title: "Escape Room Challenge", operator: "Puzzle Masters", vibe: "competitive", price: 85, image: "🔐", description: "Race against time together" },
  { id: 7, slug: "cooking-class", title: "Couples Cooking Class", operator: "Kitchen Collective", vibe: "creative", price: 130, image: "👨‍🍳", description: "Learn pasta from scratch" },
  { id: 8, slug: "stargazing", title: "Private Stargazing", operator: "Observatory Tours", vibe: "romantic", price: 95, image: "🌌", description: "Telescope + champagne + you" },
  { id: 9, slug: "axe-throwing", title: "Axe Throwing Date", operator: "Urban Lumberjacks", vibe: "competitive", price: 65, image: "🪓", description: "Release some energy together" },
];

export default function ExperiencesPage() {
  const [activeVibe, setActiveVibe] = useState("all");

  const filteredExperiences = activeVibe === "all" 
    ? experiences 
    : experiences.filter(e => e.vibe === activeVibe);

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f1419]/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl text-[#f5f5f0]">You&Me</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/experiences" className="text-[#f5f5f0]">Experiences</Link>
              <a href="#" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">About</a>
              <Link href="/login" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Log in</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Vibe Filter Bar */}
      <div className="fixed top-16 w-full bg-[#1a2129]/95 backdrop-blur-sm z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => setActiveVibe(vibe.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeVibe === vibe.id
                    ? "bg-[#7f263a] text-[#f5f5f0]"
                    : "border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961]/10"
                }`}
              >
                {vibe.emoji} {vibe.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-[#f5f5f0] mb-2">
            {activeVibe === "all" ? "All experiences" : vibes.find(v => v.id === activeVibe)?.name}
          </h1>
          <p className="text-[#9ca3af] mb-8">{filteredExperiences.length} experiences</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((exp) => (
              <Link key={exp.id} href={`/experiences/${exp.slug}`}>
                <div className="bg-[#242d38] rounded-sm overflow-hidden border border-white/5 hover:border-[#7f263a]/50 transition-all hover:-translate-y-1 group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-[#7f263a]/20 to-[#2d4a3e]/20 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform">{exp.image}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 rounded-full border border-[#c9a961] text-[#c9a961] text-xs font-mono uppercase mb-3">
                      {exp.vibe}
                    </span>
                    <h3 className="font-serif text-xl text-[#f5f5f0] mb-1">{exp.title}</h3>
                    <p className="text-[#6b7280] text-sm mb-1">by {exp.operator}</p>
                    <p className="text-[#9ca3af] text-sm mb-3">{exp.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#c9a961] font-mono">From ${exp.price}</span>
                      <span className="text-[#f5f5f0] text-sm group-hover:text-[#7f263a] transition-colors">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-[#f5f5f0] mb-2">No experiences match this vibe</p>
              <p className="text-[#9ca3af]">Try selecting &ldquo;Show all&rdquo;</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
