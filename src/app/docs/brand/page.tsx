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

export default function BrandPage() {
  return (
    <div className="space-y-12">
      {/* Brand Overview - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.bgSecondary} 0%, ${colors.accentBurgundy}40 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎨</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>
              Brand Specification
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: colors.textPrimary }}>
            You&Me
          </h1>
          
          <p className="text-xl mb-4 max-w-2xl" style={{ color: colors.textSecondary }}>
            A jewel-tone editorial aesthetic inspired by Kinfolk meets Resy — 
            warm, sophisticated, never cheesy.
          </p>

          <p className="text-lg font-serif italic" style={{ color: colors.accentGold }}>
            "Make tonight unforgettable"
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎨</span> Color Palette
        </h2>

        <div className="space-y-6">
          {/* Primary Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Deep Navy', hex: '#0f1419', rgb: 'rgb(15, 20, 25)', usage: 'Background' },
                { name: 'Burgundy', hex: '#7f263a', rgb: 'rgb(127, 38, 58)', usage: 'Primary accent' },
                { name: 'Forest Green', hex: '#2d4a3e', rgb: 'rgb(45, 74, 62)', usage: 'Success states' },
                { name: 'Gold', hex: '#c9a961', rgb: 'rgb(201, 169, 97)', usage: 'Highlights' },
              ].map((color, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bgSurface }}>
                  <div className="h-24" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <div className="font-bold mb-1" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-sm mb-1" style={{ color: colors.accentGold }}>{color.hex}</div>
                    <div className="text-xs" style={{ color: colors.textMuted }}>{color.rgb}</div>
                    <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Surface Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Surface Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Surface', hex: '#1a2129', usage: 'Sidebar, cards' },
                { name: 'Elevated', hex: '#242d38', usage: 'Hover states' },
                { name: 'Border', hex: 'rgba(255,255,255,0.1)', usage: 'Dividers' },
              ].map((color, i) => (
                <div key={i} className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: colors.bgSurface }}>
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: color.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                  <div>
                    <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-xs" style={{ color: colors.textMuted }}>{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Text Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Primary', hex: '#f5f5f0', sample: 'Aa' },
                { name: 'Secondary', hex: '#9ca3af', sample: 'Aa' },
                { name: 'Muted', hex: '#6b7280', sample: 'Aa' },
              ].map((color, i) => (
                <div key={i} className="p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: colors.bgSurface }}>
                  <div>
                    <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-xs" style={{ color: colors.textMuted }}>{color.hex}</div>
                  </div>
                  <div className="text-3xl font-serif" style={{ color: color.hex }}>{color.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🔤</span> Typography
        </h2>

        <div className="space-y-6">
          {/* Display Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>Cormorant Garamond</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Display / Headings</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>
                Serif
              </span>
            </div>
            <div className="space-y-2 font-serif">
              <p className="text-5xl" style={{ color: colors.textPrimary }}>Make tonight unforgettable</p>
              <p className="text-3xl" style={{ color: colors.textSecondary }}>Curated date night experiences</p>
              <p className="text-xl italic" style={{ color: colors.textMuted }}>Browse by vibe, not category</p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500, 600, 700</span>
              <span>Use: H1, H2, hero text, quotes</span>
            </div>
          </div>

          {/* Body Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>Plus Jakarta Sans</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Body / UI</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentForest, color: colors.textPrimary }}>
                Sans-serif
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-lg" style={{ color: colors.textPrimary }}>
                You love each other. You want quality time together. But between work, life, 
                and decision fatigue, "date night" became that restaurant you always go to.
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Every experience comes with the story of the person who created it — you're not 
                just booking a kayak tour, you're booking Marcus's midnight harbor adventure.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500, 600, 700</span>
              <span>Use: Body text, UI elements, buttons</span>
            </div>
          </div>

          {/* Mono Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>DM Mono</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Accents / Data</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentGold, color: colors.bgPrimary }}>
                Monospace
              </span>
            </div>
            <div className="space-y-2 font-mono">
              <p className="text-3xl" style={{ color: colors.accentGold }}>$150 • 4.9★ • 2hrs</p>
              <p className="text-lg" style={{ color: colors.textSecondary }}>WEEK 1 • MONTH 3 • $6K GMV</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>#7f263a • rgb(127, 38, 58)</p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500</span>
              <span>Use: Prices, stats, labels, codes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🧩</span> Component Examples
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Buttons */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Buttons</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-6 rounded-lg font-medium" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>
                Primary — Book Now
              </button>
              <button className="w-full py-3 px-6 rounded-lg font-medium border" style={{ borderColor: colors.accentGold, color: colors.accentGold }}>
                Secondary — Learn More
              </button>
              <button className="w-full py-3 px-6 rounded-lg font-medium" style={{ backgroundColor: colors.bgPrimary, color: colors.textSecondary }}>
                Ghost — Cancel
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Cards</h3>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🍷</span>
                <div>
                  <div className="font-bold" style={{ color: colors.textPrimary }}>Wine Tasting</div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>Romantic • 2 hours</div>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>
                Explore local vineyards with a sommelier guide...
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono" style={{ color: colors.accentGold }}>$120</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>
                  Popular
                </span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Badges & Pills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>
                ❤️ Romantic
              </span>
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentForest, color: colors.textPrimary }}>
                🌿 Adventurous
              </span>
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentGold, color: colors.bgPrimary }}>
                ⭐ Featured
              </span>
              <span className="px-3 py-1 rounded-full text-sm border" style={{ borderColor: colors.textMuted, color: colors.textMuted }}>
                💫 Cozy
              </span>
            </div>
          </div>

          {/* Form Elements */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Form Elements</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Email address" 
                className="w-full px-4 py-3 rounded-lg border"
                style={{ backgroundColor: colors.bgPrimary, borderColor: 'rgba(255,255,255,0.1)', color: colors.textPrimary }}
              />
              <select 
                className="w-full px-4 py-3 rounded-lg border appearance-none"
                style={{ backgroundColor: colors.bgPrimary, borderColor: 'rgba(255,255,255,0.1)', color: colors.textSecondary }}
              >
                <option>Select vibe...</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Imagery Style */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📷</span> Imagery Style
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentBurgundy}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentBurgundy }}>Photography</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Natural lighting, warm tones</li>
              <li>• Couples in candid moments</li>
              <li>• Focus on connection, not poses</li>
              <li>• Editorial magazine quality</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentForest}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentForest }}>Illustrations</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Minimal line art</li>
              <li>• Geometric abstractions</li>
              <li>• Brand color accents</li>
              <li>• No faces in illustrations</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentGold}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentGold }}>Icons</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Lucide icon set</li>
              <li>• 24px default size</li>
              <li>• Stroke width: 1.5-2px</li>
              <li>• Match text color hierarchy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>⚖️</span> Usage Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentForest}20`, border: `1px solid ${colors.accentForest}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentForest }}>
              <span>✅</span> Do
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <li>• Use burgundy as primary CTA color</li>
              <li>• Maintain generous whitespace</li>
              <li>• Use serif for headlines, sans for body</li>
              <li>• Apply gold sparingly for highlights</li>
              <li>• Keep backgrounds dark (navy family)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentBurgundy}20`, border: `1px solid ${colors.accentBurgundy}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentBurgundy }}>
              <span>❌</span> Don't
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <li>• Use light/white backgrounds</li>
              <li>• Mix too many accent colors</li>
              <li>• Use generic stock photos</li>
              <li>• Add drop shadows or gradients</li>
              <li>• Use Inter, Roboto, or system fonts</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
