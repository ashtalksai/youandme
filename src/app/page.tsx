import Link from "next/link";

const vibes = [
  { id: "laugh", name: "Make them laugh", emoji: "😂" },
  { id: "competitive", name: "Get competitive", emoji: "🎯" },
  { id: "together", name: "Just be together", emoji: "💫" },
];

const featuredExperiences = [
  { id: 1, title: "Private Rooftop Dinner", operator: "Chef Marcus", vibe: "romantic", price: 180, image: "🌆" },
  { id: 2, title: "Midnight Kayaking", operator: "Harbor Adventures", vibe: "adventurous", price: 95, image: "🛶" },
  { id: 3, title: "Rooftop Pottery", operator: "Clay & Co", vibe: "creative", price: 120, image: "🎨" },
  { id: 4, title: "Comedy Date Night", operator: "Laugh Factory", vibe: "playful", price: 75, image: "🎭" },
  { id: 5, title: "Sunset Wine Tasting", operator: "Valley Vineyards", vibe: "romantic", price: 150, image: "🍷" },
  { id: 6, title: "Escape Room Challenge", operator: "Puzzle Masters", vibe: "competitive", price: 85, image: "🔐" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f1419]/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-serif text-2xl text-[#f5f5f0]">You&Me</span>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/experiences" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Experiences</Link>
              <a href="#" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">About</a>
              <Link href="/login" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Log in</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#c9a961] text-[#c9a961] text-sm font-mono uppercase tracking-wider mb-6">
                Curated Experiences
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#f5f5f0] leading-tight mb-6">
                Make tonight<br />unforgettable
              </h1>
              <p className="text-xl text-[#9ca3af] mb-8 max-w-md">
                Not just dinner. Real experiences, real connection. Curated date nights for couples who want more.
              </p>
              
              {/* Vibe Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {vibes.map((vibe) => (
                  <button
                    key={vibe.id}
                    className="px-4 py-2 rounded-full border border-[#c9a961] text-[#c9a961] text-sm hover:bg-[#c9a961]/10 transition-colors"
                  >
                    {vibe.emoji} {vibe.name}
                  </button>
                ))}
              </div>

              <Link href="/experiences">
                <button className="bg-[#7f263a] hover:bg-[#9d3e4b] text-[#f5f5f0] px-8 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all hover:scale-[1.02]">
                  Explore Experiences
                </button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#7f263a]/20 to-[#2d4a3e]/20 rounded-sm p-1">
                <div className="bg-[#1a2129] rounded-sm p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {featuredExperiences.slice(0, 4).map((exp) => (
                      <div key={exp.id} className="bg-[#242d38] rounded-sm p-4 border border-white/5 hover:border-[#7f263a]/50 transition-colors">
                        <div className="text-4xl mb-3">{exp.image}</div>
                        <div className="text-[#f5f5f0] font-medium text-sm mb-1">{exp.title}</div>
                        <div className="text-[#6b7280] text-xs">by {exp.operator}</div>
                        <div className="text-[#c9a961] text-sm mt-2 font-mono">${exp.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-2">Featured experiences</h2>
          <p className="text-[#9ca3af] mb-12">Hand-picked by our team</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperiences.map((exp) => (
              <div key={exp.id} className="bg-[#242d38] rounded-sm overflow-hidden border border-white/5 hover:border-[#7f263a]/50 transition-all hover:-translate-y-1 group">
                <div className="h-48 bg-gradient-to-br from-[#7f263a]/20 to-[#2d4a3e]/20 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{exp.image}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 rounded-full border border-[#c9a961] text-[#c9a961] text-xs font-mono uppercase mb-3">
                    {exp.vibe}
                  </span>
                  <h3 className="font-serif text-xl text-[#f5f5f0] mb-1">{exp.title}</h3>
                  <p className="text-[#6b7280] text-sm mb-3">by {exp.operator}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#c9a961] font-mono">From ${exp.price}</span>
                    <button className="text-[#f5f5f0] text-sm hover:text-[#7f263a] transition-colors">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12">Meet our operators</h2>
          <div className="bg-[#242d38] rounded-sm p-8 border border-white/5">
            <p className="font-serif text-2xl text-[#f5f5f0] italic mb-6">
              &ldquo;We started midnight kayaking because we wanted couples to see the city in a way they never had before.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#7f263a]/20 rounded-full flex items-center justify-center text-[#7f263a]">
                M
              </div>
              <div className="text-left">
                <div className="text-[#f5f5f0] font-medium">Marcus</div>
                <div className="text-[#6b7280] text-sm">Harbor Adventures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Operators CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-4">Create experiences, not just listings</h2>
          <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            Turn your passion into bookings. You create the experience, we bring the couples.
          </p>
          <Link href="/operators">
            <button className="border border-[#c9a961] text-[#c9a961] px-8 py-4 rounded-sm font-mono uppercase tracking-wider text-sm hover:bg-[#c9a961]/10 transition-colors">
              List Your Experience
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-serif text-xl text-[#f5f5f0]">You&Me</span>
            <div className="flex gap-6 text-sm text-[#6b7280]">
              <a href="#" className="hover:text-[#f5f5f0] transition-colors">About</a>
              <a href="#" className="hover:text-[#f5f5f0] transition-colors">Become an Operator</a>
              <a href="#" className="hover:text-[#f5f5f0] transition-colors">Login</a>
            </div>
            <p className="text-sm text-[#6b7280]">© 2026 You&Me</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
