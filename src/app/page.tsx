import Link from "next/link";

const vibes = [
  { id: "laugh", name: "Make them laugh", emoji: "😂" },
  { id: "competitive", name: "Get competitive", emoji: "🎯" },
  { id: "together", name: "Just be together", emoji: "💫" },
];

const featuredExperiences = [
  { id: 1, slug: "rooftop-dinner", title: "Private Rooftop Dinner", operator: "Chef Marcus", vibe: "romantic", price: 180, image: "🌆" },
  { id: 2, slug: "midnight-kayaking", title: "Midnight Kayaking", operator: "Harbor Adventures", vibe: "adventurous", price: 95, image: "🛶" },
  { id: 3, slug: "rooftop-pottery", title: "Rooftop Pottery", operator: "Clay & Co", vibe: "creative", price: 120, image: "🎨" },
  { id: 4, slug: "comedy-night", title: "Comedy Date Night", operator: "Laugh Factory", vibe: "playful", price: 75, image: "🎭" },
  { id: 5, slug: "wine-tasting", title: "Sunset Wine Tasting", operator: "Valley Vineyards", vibe: "romantic", price: 150, image: "🍷" },
  { id: 6, slug: "escape-room", title: "Escape Room Challenge", operator: "Puzzle Masters", vibe: "competitive", price: 85, image: "🔐" },
];

const howItWorks = [
  {
    icon: "🔍",
    title: "Browse by vibe",
    description: "Not categories. Filter by how you want to FEEL: competitive, romantic, adventurous.",
  },
  {
    icon: "💫",
    title: "Meet the operator",
    description: "Every experience comes with a story. Know who's creating your night before you book.",
  },
  {
    icon: "📅",
    title: "Book instantly",
    description: "Pick your date and time. Secure payment. Confirmation in seconds.",
  },
  {
    icon: "✨",
    title: "Make memories",
    description: "Show up, enjoy the experience, and finally have something to talk about besides Netflix.",
  },
];

const pricingTiers = [
  { range: "$50-100", label: "Casual", examples: "Comedy shows, escape rooms, axe throwing" },
  { range: "$100-150", label: "Special", examples: "Cooking classes, wine tastings, pottery" },
  { range: "$150-250", label: "Premium", examples: "Private dinners, stargazing, curated adventures" },
];

const faqs = [
  {
    question: "How are experiences curated?",
    answer: "We personally visit and test every experience before listing it. Our team vets operators for quality, safety, and that special something that makes a date memorable.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer: "Yes! Free cancellation up to 48 hours before your booking. Rescheduling is always free and easy through your confirmation email.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer: "All food experiences accommodate dietary needs. Just let us know during booking and we'll coordinate with the operator.",
  },
  {
    question: "Are experiences available for groups?",
    answer: "Most experiences are designed for couples (2 people), but many can accommodate double dates or small groups. Check each listing for details.",
  },
  {
    question: "How does payment work?",
    answer: "Pay securely through our platform. We hold your payment until after your experience, so operators are motivated to deliver an amazing night.",
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

      {/* 1. Hero Section */}
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

      {/* 2. Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f5f0] mb-6">
            Tired of the same date routine?
          </h2>
          <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
            Open Google. Scroll through the same restaurants. End up at the familiar Italian place. Again.
            Sound familiar? There&apos;s more out there — you just need someone to show you.
          </p>
        </div>
      </section>

      {/* 3. Featured Experiences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
          
          <div className="text-center mt-12">
            <Link href="/experiences" className="text-[#c9a961] hover:text-[#f5f5f0] transition-colors">
              See all experiences →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12 text-center">How it works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-serif text-xl text-[#f5f5f0] mb-2">{step.title}</h3>
                <p className="text-[#9ca3af] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Operator Spotlight */}
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

      {/* 6. Pricing Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-4 text-center">Experiences for every budget</h2>
          <p className="text-[#9ca3af] text-center mb-12">No subscription. Pay only when you book.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="bg-[#242d38] p-6 rounded-sm border border-white/5 text-center">
                <div className="text-[#c9a961] font-mono text-2xl mb-2">{tier.range}</div>
                <div className="text-[#f5f5f0] font-serif text-xl mb-3">{tier.label}</div>
                <p className="text-[#9ca3af] text-sm">{tier.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-12 text-center">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a2129] p-6 rounded-sm border border-white/5">
                <h3 className="font-serif text-lg text-[#f5f5f0] mb-2">{faq.question}</h3>
                <p className="text-[#9ca3af]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7f263a]/20 to-[#2d4a3e]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#f5f5f0] mb-6">
            Ready for a better date night?
          </h2>
          <p className="text-xl text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            Browse curated experiences and book something you&apos;ll actually remember.
          </p>
          <Link href="/experiences">
            <button className="bg-[#7f263a] hover:bg-[#9d3e4b] text-[#f5f5f0] px-8 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all hover:scale-[1.02]">
              Explore Experiences
            </button>
          </Link>
        </div>
      </section>

      {/* 9. For Operators CTA */}
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
