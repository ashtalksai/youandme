const colors = {
  bgPrimary: '#0f1419',
  bgSecondary: '#1a2129',
  bgSurface: '#242d38',
  textPrimary: '#f5f5f0',
  textSecondary: '#9ca3af',
  textMuted: '#6b7280',
  accentBurgundy: '#7f263a',
  accentForest: '#2d4a3e',
  accentGold: '#c9a961',
}

export default function MarketingPage() {
  return (
    <div className="space-y-12">
      {/* Positioning - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentForest}40 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📣</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>
              Positioning Statement
            </span>
          </div>
          
          <div className="max-w-3xl space-y-4 text-xl" style={{ color: colors.textSecondary }}>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>For</span> millennial and Gen-Z couples (25-40)</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>Who</span> suffer from date night decision fatigue</p>
            <p><span className="font-bold" style={{ color: colors.accentGold }}>You&Me</span> is a curated experience marketplace</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>That</span> helps you browse by vibe, not category</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>Unlike</span> generic booking sites or gift vouchers</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>We</span> tell the story of every operator, making each experience personal</p>
          </div>

          <div className="mt-8 p-4 rounded-xl inline-block" style={{ backgroundColor: colors.bgPrimary }}>
            <span className="font-serif text-2xl" style={{ color: colors.accentGold }}>"Make tonight unforgettable"</span>
          </div>
        </div>
      </section>

      {/* Target Persona */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>👥</span> Target Persona
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Avatar */}
          <div className="md:col-span-2 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-center mb-4">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl" style={{ backgroundColor: colors.accentBurgundy }}>
                👫
              </div>
              <h3 className="font-bold text-lg" style={{ color: colors.textPrimary }}>Alex & Jordan</h3>
              <p className="text-sm" style={{ color: colors.textMuted }}>The Decision-Fatigued Couple</p>
            </div>
            <div className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <p><span style={{ color: colors.textMuted }}>Age:</span> 28-35</p>
              <p><span style={{ color: colors.textMuted }}>Income:</span> $80K-$150K combined</p>
              <p><span style={{ color: colors.textMuted }}>Location:</span> Urban/suburban metro</p>
              <p><span style={{ color: colors.textMuted }}>Relationship:</span> Dating 1+ year, engaged, or newly married</p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3 space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentGold }}>Pain Points</h4>
              <ul className="space-y-1 text-sm" style={{ color: colors.textSecondary }}>
                <li>• "We always end up at the same restaurant because we can't decide"</li>
                <li>• "Our relationship feels like a routine"</li>
                <li>• "I'm tired of being the only one who plans everything"</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentGold }}>Where They Hang Out</h4>
              <div className="flex flex-wrap gap-2">
                {['Reddit', 'TikTok', 'Instagram', 'Pinterest', 'Facebook Groups'].map((p, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.bgPrimary, color: colors.textMuted }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentGold }}>What They Search</h4>
              <div className="flex flex-wrap gap-2 text-sm" style={{ color: colors.textSecondary }}>
                {['"unique date night ideas"', '"things to do with partner"', '"date ideas that aren\'t dinner"'].map((s, i) => (
                  <span key={i} className="font-mono text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messaging Pillars */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💬</span> Messaging Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentGold }}>Vibe-First</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"Browse by how you want to feel"</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Not "Food & Drink" or "Outdoor" — filter by "Make them laugh," "Get competitive," "Just be together"
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.accentBurgundy }}>
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentGold }}>Operator Stories</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"Every experience tells a story"</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Meet the people behind each experience. Not just a booking—a connection.
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentGold }}>Zero Friction</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"Show up and enjoy"</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Pick, pay, done. We handle everything so you can focus on each other.
            </p>
          </div>
        </div>
      </section>

      {/* Content Calendar */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📅</span> Content Calendar (Week 1-4)
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-center text-xs font-bold py-2" style={{ color: colors.textMuted }}>
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {[
                { type: 'IG', content: 'Operator spotlight', color: colors.accentBurgundy },
                { type: 'Pinterest', content: 'Board launch', color: colors.accentForest },
                { type: 'TikTok', content: 'POV Reel', color: colors.accentGold },
                { type: 'Twitter', content: 'Thread', color: colors.bgSurface },
                { type: 'Stories', content: 'Poll', color: colors.accentBurgundy },
                { type: 'TikTok', content: 'Testimonial', color: colors.accentGold },
                { type: 'Pinterest', content: 'Infographic', color: colors.accentForest },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg text-center" style={{ backgroundColor: item.color }}>
                  <div className="text-xs font-bold mb-1" style={{ color: colors.textPrimary }}>{item.type}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <h4 className="font-bold mb-3" style={{ color: colors.textPrimary }}>Posting Cadence</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span style={{ color: colors.textMuted }}>TikTok/Reels:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>Daily</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>IG Feed:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>3x/week</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>Pinterest:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>10 pins/week</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>Email:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎤</span> Brand Voice
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Do */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentForest}20`, border: `1px solid ${colors.accentForest}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentForest }}>
              <span>✅</span> Do Say
            </h3>
            <ul className="space-y-3">
              {[
                { good: '"Make tonight unforgettable"', why: 'Emotional, actionable' },
                { good: '"That Italian place you always go to"', why: 'Specific, relatable' },
                { good: '"We get it"', why: 'Empathetic' },
                { good: '"Not just dinner. Real experiences."', why: 'Differentiating' },
              ].map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium block" style={{ color: colors.textPrimary }}>{item.good}</span>
                  <span style={{ color: colors.textMuted }}>{item.why}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentBurgundy}20`, border: `1px solid ${colors.accentBurgundy}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentBurgundy }}>
              <span>❌</span> Never Say
            </h3>
            <ul className="space-y-3">
              {[
                { bad: '"Spice up your love life"', why: 'Too cliché' },
                { bad: '"Reignite the spark"', why: 'Implies something\'s broken' },
                { bad: '"Premium luxury experiences"', why: 'Alienating, pretentious' },
                { bad: '"Don\'t miss out!!!"', why: 'Desperate' },
              ].map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium block line-through" style={{ color: colors.textSecondary }}>{item.bad}</span>
                  <span style={{ color: colors.textMuted }}>{item.why}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Voice Characteristics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" style={{ color: colors.textSecondary }}>
            <div><span style={{ color: colors.accentGold }}>Human</span> not corporate</div>
            <div><span style={{ color: colors.accentGold }}>Specific</span> not generic</div>
            <div><span style={{ color: colors.accentGold }}>Empathetic</span> not preachy</div>
            <div><span style={{ color: colors.accentGold }}>Confident</span> not desperate</div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: colors.accentGold }}
      >
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.bgPrimary }}>
          <span>📊</span> Key Performance Indicators
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Social Reach', target: '100K', period: 'Month 1' },
            { metric: 'Site Visits', target: '5,000', period: 'Month 1' },
            { metric: 'Email Signups', target: '1,000', period: 'Month 1' },
            { metric: 'Booking Rate', target: '3-5%', period: 'Ongoing' },
          ].map((kpi, i) => (
            <div key={i} className="p-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'rgba(0,0,0,0.6)' }}>{kpi.metric}</div>
              <div className="text-2xl font-mono font-bold mb-1" style={{ color: colors.bgPrimary }}>{kpi.target}</div>
              <div className="text-xs" style={{ color: 'rgba(0,0,0,0.5)' }}>{kpi.period}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'rgba(0,0,0,0.2)' }}>
          <p className="text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Track weekly. Double down on winners. Cut or optimize underperformers.
          </p>
        </div>
      </section>
    </div>
  )
}
