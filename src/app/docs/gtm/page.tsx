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

export default function GTMPage() {
  return (
    <div className="space-y-12">
      {/* Launch Overview - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentGold}30 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>
              Go-To-Market Plan
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
            Make tonight unforgettable
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl" style={{ color: colors.textSecondary }}>
            Launch strategy for You&Me — targeting millennial and Gen-Z couples (25-40) 
            who suffer from date night decision fatigue.
          </p>

          {/* Launch metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>Launch Target</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>Day 1</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>10 signups</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>Month 1 Goal</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>50</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>bookings</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>GMV Target</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>$6K</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>month 1</div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📅</span> 90-Day Timeline
        </h2>

        <div className="space-y-4">
          {/* Week 1 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentBurgundy }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentBurgundy }}>WEEK 1</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>Pre-Launch Buzz</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Community Seeding</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Create social media accounts (IG, TikTok, Pinterest)</li>
                <li>• Design & schedule first 10 posts</li>
                <li>• Set up Product Hunt launch page</li>
                <li>• Seed Reddit posts in relationship subs</li>
                <li>• Engage with comments, build momentum</li>
              </ul>
            </div>
          </div>

          {/* Week 2-4 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentGold }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentGold }}>WEEK 2-4</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentGold, color: colors.bgPrimary }}>Official Launch</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Product Hunt + Content Blitz</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Tuesday: Product Hunt launch (all-hands)</li>
                <li>• Respond to PH comments, drive traffic</li>
                <li>• Double down on TikTok/Reels (daily)</li>
                <li>• Pinterest boards go live</li>
                <li>• Facebook group engagement starts</li>
                <li>• First metrics review</li>
              </ul>
            </div>
          </div>

          {/* Month 2-3 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentForest }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentForest }}>MONTH 2-3</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentForest, color: colors.textPrimary }}>Growth & Optimization</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Scale Winners, Cut Losers</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Analyze which channels drove bookings</li>
                <li>• Launch referral program: "Give $20, Get $20"</li>
                <li>• Partner with 3-5 local influencers</li>
                <li>• Expand to 2 new cities</li>
                <li>• Email marketing (cart abandoners)</li>
                <li>• Seasonal campaigns begin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Mix */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📣</span> Channel Mix
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: 'Reddit',
              budget: '40%',
              icon: '🔴',
              desc: 'r/relationships + dating subs',
              expected: '1,000+ profile visits, 20-30 bookings',
              tactics: ['Value-first posts', 'Problem-solution stories', 'AMAs']
            },
            {
              name: 'TikTok/Reels',
              budget: '25%',
              icon: '📱',
              desc: '#DateNight (12B views)',
              expected: '50K views, 100+ site visits',
              tactics: ['POV content', 'Operator spotlights', 'Vibe montages']
            },
            {
              name: 'Pinterest',
              budget: '15%',
              icon: '📌',
              desc: 'High commercial intent',
              expected: '10K impressions, 30+ bookings',
              tactics: ['Idea boards', 'Infographics', 'Experience pins']
            },
            {
              name: 'Facebook Groups',
              budget: '10%',
              icon: '👥',
              desc: 'Local couple communities',
              expected: '500+ reached, 10-15 bookings',
              tactics: ['Organic recommendations', 'Seasonal guides']
            },
            {
              name: 'Product Hunt',
              budget: '10%',
              icon: '🚀',
              desc: 'Tech-savvy early adopters',
              expected: 'Top 5 product, 50+ bookings',
              tactics: ['Tuesday launch', '20% launch discount']
            },
          ].map((channel, i) => (
            <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{channel.icon}</span>
                  <span className="font-bold" style={{ color: colors.textPrimary }}>{channel.name}</span>
                </div>
                <span className="font-mono text-sm px-2 py-1 rounded" style={{ backgroundColor: colors.accentGold, color: colors.bgPrimary }}>
                  {channel.budget}
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: colors.textMuted }}>{channel.desc}</p>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>{channel.expected}</p>
              <div className="flex flex-wrap gap-2">
                {channel.tactics.map((tactic, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.bgPrimary, color: colors.textMuted }}>
                    {tactic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💰</span> Budget Allocation
        </h2>

        <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <div className="space-y-4">
            {[
              { label: 'Facebook/Instagram Ads', amount: 1500, pct: 37 },
              { label: 'TikTok Ads (Spark Ads)', amount: 1000, pct: 25 },
              { label: 'Google Search Ads', amount: 800, pct: 20 },
              { label: 'UGC Creator Videos', amount: 400, pct: 10 },
              { label: 'Tools & Stock', amount: 323, pct: 8 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: colors.textSecondary }}>{item.label}</span>
                  <span className="font-mono" style={{ color: colors.textPrimary }}>${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.bgPrimary }}>
                  <div 
                    className="h-full rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: colors.accentBurgundy }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t flex justify-between items-center" style={{ borderColor: colors.bgPrimary }}>
            <span className="font-bold" style={{ color: colors.textPrimary }}>Total Month 1</span>
            <span className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>$4,023</span>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🏆</span> Milestones
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { period: 'Week 1', target: '10 signups', metric: 'Day 1' },
            { period: 'Month 1', target: '50 bookings', metric: '$6K GMV' },
            { period: 'Month 3', target: '200 bookings', metric: '$24K GMV' },
            { period: 'Month 6', target: '500 bookings', metric: '$65K GMV' },
          ].map((milestone, i) => (
            <div key={i} className="p-5 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>{milestone.period}</div>
              <div className="text-xl font-bold mb-1" style={{ color: colors.textPrimary }}>{milestone.target}</div>
              <div className="text-sm font-mono" style={{ color: colors.accentGold }}>{milestone.metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Criteria */}
      <section 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: colors.accentBurgundy }}
      >
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>✅</span> Success Criteria
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentGold }}>Awareness</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 100K social impressions (M1)</li>
              <li>• 5,000 site visits (M1)</li>
              <li>• 1,000 email signups (M1)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentGold }}>Engagement</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 20% browse-to-favorite rate</li>
              <li>• 5 min avg session duration</li>
              <li>• 40% return visitor rate (M2-3)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentGold }}>Conversion</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 3-5% booking conversion</li>
              <li>• $120 average order value</li>
              <li>• 30% rebook within 60 days</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
