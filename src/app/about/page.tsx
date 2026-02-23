import Link from "next/link";

export default function AboutPage() {
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
              <Link href="/about" className="text-[#f5f5f0]">About</Link>
              <Link href="/login" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Log in</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-[#c9a961] text-[#c9a961] text-sm font-mono uppercase tracking-wider mb-6">
            Our Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#f5f5f0] leading-tight mb-6">
            We believe date night<br />deserves better
          </h1>
          <p className="text-xl text-[#9ca3af]">
            Beyond the same restaurant. Beyond the predictable movie. Real experiences that create real connection.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-8">The same Italian place. Again.</h2>
          <div className="space-y-6 text-lg text-[#9ca3af]">
            <p>
              You love each other. You want to spend time together. But somewhere between work, life, and decision fatigue, 
              &ldquo;date night&rdquo; became that restaurant you always go to because you can&apos;t think of anything else.
            </p>
            <p>
              We started You&Me because we were tired of uninspired evenings. We knew there were incredible experiences 
              happening all around us—hidden gems run by passionate people—but finding them felt impossible.
            </p>
            <p>
              So we built what we wished existed: a curated collection of date experiences that go beyond dinner and a movie.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-8">Vibe-first, not category-first</h2>
          <div className="space-y-6 text-lg text-[#9ca3af]">
            <p>
              You don&apos;t browse a dating app by height. You don&apos;t pick restaurants by cuisine alone. 
              So why would you search for date experiences by &ldquo;category&rdquo;?
            </p>
            <p>
              At You&Me, we organize experiences by how they&apos;ll make you <span className="text-[#c9a961]">feel</span>:
            </p>
            <ul className="space-y-4 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a961]">→</span>
                <span><strong className="text-[#f5f5f0]">Make them laugh</strong> — Comedy nights, quirky workshops, competitive games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a961]">→</span>
                <span><strong className="text-[#f5f5f0]">Get competitive</strong> — Escape rooms, axe throwing, cooking challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a961]">→</span>
                <span><strong className="text-[#f5f5f0]">Just be together</strong> — Sunset kayaking, pottery classes, rooftop dinners</span>
              </li>
            </ul>
            <p>
              Because the best date isn&apos;t about what you do—it&apos;s about how you feel doing it together.
            </p>
          </div>
        </div>
      </section>

      {/* The Operators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2129]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-8">Hand-picked, not algorithmed</h2>
          <div className="space-y-6 text-lg text-[#9ca3af]">
            <p>
              Every experience on You&Me is personally vetted by our team. We meet the operators, understand their passion, 
              and ensure their experience delivers something special.
            </p>
            <p>
              These aren&apos;t generic tours or mass-market activities. They&apos;re intimate experiences run by people who genuinely 
              care about creating memorable moments for couples.
            </p>
            <div className="bg-[#242d38] border border-white/10 rounded-sm p-6 mt-8">
              <p className="font-serif text-xl text-[#f5f5f0] italic mb-4">
                &ldquo;We only list experiences we&apos;d actually book for our own date nights.&rdquo;
              </p>
              <p className="text-sm text-[#6b7280]">— The You&Me Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f5f5f0] mb-6">Ready to make tonight unforgettable?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experiences">
              <button className="bg-[#7f263a] hover:bg-[#9d3e4b] text-[#f5f5f0] px-8 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all">
                Browse Experiences
              </button>
            </Link>
            <Link href="/operators">
              <button className="border border-[#c9a961] text-[#c9a961] px-8 py-4 rounded-sm font-mono uppercase tracking-wider text-sm hover:bg-[#c9a961]/10 transition-colors">
                Become an Operator
              </button>
            </Link>
          </div>
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
