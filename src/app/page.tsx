import Link from "next/link";

const vibes = [
  { id: "laugh", name: "Make them laugh", emoji: "😂" },
  { id: "competitive", name: "Get competitive", emoji: "🎯" },
  { id: "together", name: "Just be together", emoji: "💫" },
];

const featuredExperiences = [
  { id: 1, slug: "private-rooftop-dinner", title: "Private Rooftop Dinner", operator: "Chef Marcus", vibe: "romantic", price: 180, image: "🌆" },
  { id: 2, slug: "midnight-kayaking", title: "Midnight Kayaking", operator: "Harbor Adventures", vibe: "adventurous", price: 95, image: "🛶" },
  { id: 3, slug: "rooftop-pottery", title: "Rooftop Pottery", operator: "Clay & Co", vibe: "creative", price: 120, image: "🎨" },
  { id: 4, slug: "comedy-date-night", title: "Comedy Date Night", operator: "Laugh Factory", vibe: "playful", price: 75, image: "🎭" },
  { id: 5, slug: "sunset-wine-tasting", title: "Sunset Wine Tasting", operator: "Valley Vineyards", vibe: "romantic", price: 150, image: "🍷" },
  { id: 6, slug: "escape-room-challenge", title: "Escape Room Challenge", operator: "Puzzle Masters", vibe: "competitive", price: 85, image: "🔐" },
];

const faqs = [
  {
    q: "How do I book an experience?",
    a: "Browse our curated experiences, select one that matches your vibe, pick a date and time, and book instantly. You'll receive confirmation and all the details within minutes.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes! You can cancel or reschedule for free up to 48 hours before your experience. After that, policies vary by operator.",
  },
  {
    q: "Are experiences private or shared with others?",
    a: "Most of our experiences are private—just for you and your partner. Some group experiences (like comedy nights) will be noted in the listing.",
  },
  {
    q: "What if I have dietary restrictions?",
    a: "Just note them when booking. Our operators are experienced in accommodating dietary needs and will customize your experience.",
  },
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
              <Link href="/about" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">About</Link>
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
                  <Link key={vibe.id} href={`/experiences?vibe=${vibe.id}`}>
                    <button className="px-4 py-2 rounded-full border border-[#c9a961] text-[#c9a961] text-sm hover:bg-[#c9a961]/10 transition-colors">
                      {vibe.emoji} {vibe.name}
                    </button>
                  </Link>
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
                      <Link key={exp.id} href={`/experiences/${exp.slug}`}>
                        <div className="bg-[#242d38] rounded-sm p-4 border border-white/5 hover:border-[#7f263a]/50 transition-colors cursor-pointer">
                          <div className="text-4xl mb-3">{exp.image}</div>
                          <div className="text-[#f5f5f0] font-medium text-sm mb-1">{exp.title}</div>
                          <div className="text-[#6b7280] text-xs">by {exp.operator}</div>
                          <div className="text-[#c9a961] text-sm mt-2 font-mono">${exp.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f5f0] mb-6">
            Tired of the same Italian place?
          </h2>
          <p className="text-lg text-[#9ca3af] mb-8">
            You love each other. You want to spend quality time together. But somewhere between work, 
            life, and decision fatigue, &ldquo;date night&rdquo; became that restaurant you always go to 
            because you can&apos;t think of anything else.
          </p>
          <p className="text-[#c9a961] font-medium">
            It doesn&apos;t have to be this way.
          </p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-2">Featured experiences</h2>
          <p className="text-[#9ca3af] mb-12">Hand-picked by our team</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperiences.map((exp) => (
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
                    <p className="text-[#6b7280] text-sm mb-3">by {exp.operator}</p>
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7f263a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-3">Browse by vibe</h3>
              <p className="text-[#9ca3af]">
                Not categories. Vibes. Filter by how you want to feel: &ldquo;Make them laugh,&rdquo; &ldquo;Get competitive,&rdquo; or &ldquo;Just be together.&rdquo;
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2d4a3e]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-3">Book instantly</h3>
              <p className="text-[#9ca3af]">
                Pick your date and time. We handle everything—no back-and-forth, no phone calls, no planning stress.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c9a961]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5f5f0] mb-3">Make memories</h3>
              <p className="text-[#9ca3af]">
                Show up and enjoy. Every experience is personally curated to deliver something unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operator Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
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

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-6">Simple, transparent pricing</h2>
          <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            No subscription fees. No hidden charges. You only pay for the experiences you book.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#1a2129] border border-white/10 rounded-sm p-6">
              <div className="text-[#c9a961] font-mono text-sm mb-2">Budget-friendly</div>
              <div className="font-serif text-3xl text-[#f5f5f0] mb-2">$65-95</div>
              <div className="text-[#6b7280] text-sm">Escape rooms, comedy nights, pottery</div>
            </div>
            <div className="bg-[#1a2129] border border-[#7f263a]/50 rounded-sm p-6">
              <div className="text-[#c9a961] font-mono text-sm mb-2">Most popular</div>
              <div className="font-serif text-3xl text-[#f5f5f0] mb-2">$100-150</div>
              <div className="text-[#6b7280] text-sm">Wine tastings, cooking classes, kayaking</div>
            </div>
            <div className="bg-[#1a2129] border border-white/10 rounded-sm p-6">
              <div className="text-[#c9a961] font-mono text-sm mb-2">Premium</div>
              <div className="font-serif text-3xl text-[#f5f5f0] mb-2">$150+</div>
              <div className="text-[#6b7280] text-sm">Private dinners, exclusive experiences</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#242d38] border border-white/5 rounded-sm p-6">
                <h3 className="font-medium text-[#f5f5f0] mb-2">{faq.q}</h3>
                <p className="text-[#9ca3af]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f5f0] mb-6">
            Ready to make tonight unforgettable?
          </h2>
          <p className="text-lg text-[#9ca3af] mb-8">
            Browse curated experiences and book your next date night in minutes.
          </p>
          <Link href="/experiences">
            <button className="bg-[#7f263a] hover:bg-[#9d3e4b] text-[#f5f5f0] px-10 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all hover:scale-[1.02]">
              Explore Experiences
            </button>
          </Link>
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
