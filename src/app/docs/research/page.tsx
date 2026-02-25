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

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      {/* Executive Summary - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentBurgundy}40 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📊</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>
              Executive Summary
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
            You&Me Market Research
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl" style={{ color: colors.textSecondary }}>
            A curated experience marketplace for couples, addressing the date night decision fatigue 
            that affects 73% of relationships.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>$8B</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>TAM</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>8/10</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>Validation Score</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentGold }}>Low</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>Competition</div>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: colors.accentForest }}>
            <span className="font-bold" style={{ color: colors.textPrimary }}>Verdict: GO</span>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💰</span> Market Opportunity
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.accentBurgundy }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>TAM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$8B</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Experience marketplace</div>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>SAM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$1.2B</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>US couples experiences</div>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>SOM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$50M</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Year 3 target</div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: colors.bgSurface }}>
          <div className="text-3xl">📈</div>
          <div>
            <div className="font-mono font-bold" style={{ color: colors.accentForest }}>+15% annual growth</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Experiential economy expanding post-pandemic</div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎯</span> Competitive Landscape
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {/* Comparison table */}
          <div className="md:col-span-3 rounded-xl overflow-hidden" style={{ backgroundColor: colors.bgSurface }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: colors.bgSecondary }}>
                  <th className="text-left py-3 px-4 text-sm" style={{ color: colors.textMuted }}>Feature</th>
                  <th className="text-center py-3 px-4 text-sm" style={{ color: colors.textMuted }}>Giftory</th>
                  <th className="text-center py-3 px-4 text-sm" style={{ color: colors.textMuted }}>DateBox</th>
                  <th className="text-center py-3 px-4 text-sm font-bold" style={{ color: colors.accentGold }}>You&Me ✨</th>
                </tr>
              </thead>
              <tbody style={{ color: colors.textSecondary }}>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Curation</td>
                  <td className="text-center py-3 px-4 text-sm">Gift-focused</td>
                  <td className="text-center py-3 px-4 text-sm">Subscription</td>
                  <td className="text-center py-3 px-4 text-sm font-medium" style={{ color: colors.textPrimary }}>Vibe-first</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Target</td>
                  <td className="text-center py-3 px-4 text-sm">Gifting others</td>
                  <td className="text-center py-3 px-4 text-sm">At-home only</td>
                  <td className="text-center py-3 px-4 text-sm font-medium" style={{ color: colors.textPrimary }}>Out experiences</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Stories</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">✅</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Mood filter</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Our edge */}
          <div className="md:col-span-2 p-6 rounded-xl" style={{ backgroundColor: `${colors.accentGold}15`, border: `1px solid ${colors.accentGold}40` }}>
            <h3 className="font-bold mb-3" style={{ color: colors.accentGold }}>Our Edge</h3>
            <ul className="space-y-3 text-sm" style={{ color: colors.textSecondary }}>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentGold }}>→</span>
                <span>Vibe-first discovery (emotional, not categorical)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentGold }}>→</span>
                <span>Operator storytelling creates connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentGold }}>→</span>
                <span>For couples, by couples—not a gift afterthought</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Validation Signals */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>✅</span> Validation Signals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { platform: 'Reddit', signal: 'r/relationships has 5.3M members actively seeking date advice', emoji: '🔴' },
            { platform: 'TikTok', signal: '#DateNight has 12B+ views—massive demand for content', emoji: '📱' },
            { platform: 'Search', signal: '"date night ideas" = 74K monthly searches', emoji: '🔍' },
            { platform: 'Pain Point', signal: '73% of couples report "date night fatigue"', emoji: '😫' },
            { platform: 'Trend', signal: 'Experiential spending up 65% vs pre-pandemic', emoji: '📈' },
            { platform: 'Behavior', signal: '2+ hours spent researching/planning each date', emoji: '⏰' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center gap-2 mb-2">
                <span>{item.emoji}</span>
                <span className="font-medium text-sm" style={{ color: colors.textPrimary }}>{item.platform}</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{item.signal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risks & Opportunities */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Risks */}
          <div>
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
              <span>⚠️</span> Risks
            </h2>
            <div className="space-y-3">
              {[
                'Supply-side chicken-and-egg (need operators before customers)',
                'Local density required for viable marketplace',
                'Seasonality (Valentine\'s spike, summer lull)',
                'Large players could copy vibe-first model',
              ].map((risk, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: `${colors.accentBurgundy}20` }}>
                  <span style={{ color: colors.accentBurgundy }}>●</span>
                  <span className="text-sm" style={{ color: colors.textSecondary }}>{risk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
              <span>🚀</span> Opportunities
            </h2>
            <div className="space-y-3">
              {[
                'Corporate events / team date nights (B2B expansion)',
                'Gift cards as weddings/engagement gifts',
                'Subscription model for frequent daters',
                'White-label for hotel concierge services',
              ].map((opp, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: `${colors.accentForest}20` }}>
                  <span style={{ color: colors.accentForest }}>●</span>
                  <span className="text-sm" style={{ color: colors.textSecondary }}>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section 
        className="p-8 rounded-2xl text-center"
        style={{ backgroundColor: colors.accentForest }}
      >
        <h2 className="font-serif text-3xl mb-4" style={{ color: colors.textPrimary }}>
          Recommendation: GO
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Strong market signals, clear differentiation, and validated pain point. 
          Start with 1 city, prove unit economics, then expand.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-sm" style={{ color: colors.textPrimary }}>Target: 50 bookings Month 1</span>
          </div>
          <div className="px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-sm" style={{ color: colors.textPrimary }}>$6K GMV validation</span>
          </div>
        </div>
      </section>
    </div>
  )
}
