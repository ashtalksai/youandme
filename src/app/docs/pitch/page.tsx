'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Brand colors from design spec
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

// Slide components
function TitleSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.bgPrimary} 0%, ${colors.bgSecondary} 100%)` }}>
      <div className="max-w-5xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <span className="font-serif text-6xl md:text-8xl" style={{ color: colors.textPrimary }}>You&amp;Me</span>
        </div>
        
        {/* Tagline */}
        <h1 className="font-serif text-3xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
          Make tonight unforgettable
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12" style={{ color: colors.textSecondary }}>
          Curated date night experiences for couples who want more
        </p>
        
        {/* Visual accent */}
        <div className="flex justify-center gap-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentBurgundy }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentGold }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentForest }} />
        </div>
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left: Problem statement */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">😩</span>
              <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>The Problem</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
              Tired of the same Italian place?
            </h2>
            
            <div className="space-y-4" style={{ color: colors.textSecondary }}>
              <p className="text-xl">
                Couples fall into &quot;dinner and a movie&quot; rut because planning unique experiences feels overwhelming.
              </p>
              <p className="text-lg">
                Every anniversary becomes the same restaurant again.
              </p>
            </div>
          </div>
          
          {/* Right: Stats */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentBurgundy }}>73%</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>of couples report &quot;date night fatigue&quot;</div>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentBurgundy }}>2+ hrs</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>spent researching & planning each date</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.accentBurgundy}20 0%, ${colors.bgPrimary} 50%)` }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">✨</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>The Solution</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
          Browse by vibe, not category
        </h2>
        
        <p className="text-xl mb-12 max-w-2xl" style={{ color: colors.textSecondary }}>
          Not &quot;Food &amp; Drink&quot; or &quot;Outdoor Activities&quot; — filter by how you want to feel.
        </p>
        
        {/* Vibe buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['😂 Make them laugh', '🎯 Get competitive', '💫 Just be together'].map((vibe) => (
            <div 
              key={vibe} 
              className="px-6 py-3 rounded-full border text-lg"
              style={{ borderColor: colors.accentGold, color: colors.accentGold }}
            >
              {vibe}
            </div>
          ))}
        </div>
        
        {/* Key differentiator */}
        <div className="p-6 rounded-xl max-w-xl" style={{ backgroundColor: colors.bgSurface }}>
          <p className="text-lg italic font-serif" style={{ color: colors.textPrimary }}>
            &quot;You&amp;Me understands couples, not just activities.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📊</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>Market Opportunity</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Experiential economy is booming
        </h2>
        
        {/* Market size grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$8B</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>TAM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>Experience marketplace</div>
          </div>
          <div className="text-center p-6 rounded-xl border-2" style={{ backgroundColor: colors.bgSurface, borderColor: colors.accentBurgundy }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$1.2B</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>SAM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>US couples experiences</div>
          </div>
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$50M</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>SOM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>Year 3 target</div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="px-6 py-3 rounded-full" style={{ backgroundColor: colors.accentForest }}>
            <span className="text-lg font-mono" style={{ color: colors.textPrimary }}>+15% annual growth</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🚀</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>Traction</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Launch-ready MVP
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Metrics */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">🌆</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>20+</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Curated operators ready</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">💫</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>6</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Vibe categories</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">📱</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>Live</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Platform deployed</div>
              </div>
            </div>
          </div>
          
          {/* Right: Launch plan */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: colors.accentGold }}>30-Day Launch Plan</h3>
            <div className="space-y-3" style={{ color: colors.textSecondary }}>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentBurgundy }}>●</span>
                <span>Week 1: Community seeding (Reddit, local groups)</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentGold }}>●</span>
                <span>Week 2: Product Hunt launch</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentForest }}>●</span>
                <span>Week 3-4: TikTok/Instagram campaign</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t" style={{ borderColor: colors.bgSurface }}>
              <div className="text-sm" style={{ color: colors.textMuted }}>Target Month 1</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>50 bookings • $6K GMV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💎</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>Product</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
          Curated, not crowded
        </h2>
        
        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>Vibe-First Browse</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Filter by mood, not category. &quot;Make them laugh&quot; → Comedy nights, quirky workshops.
            </p>
          </div>
          
          <div className="p-6 rounded-xl border-2" style={{ backgroundColor: colors.bgSurface, borderColor: colors.accentBurgundy }}>
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>Operator Stories</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Every listing is a mini-documentary. Meet the person behind the experience.
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>Instant Booking</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              No back-and-forth. Pick, pay, show up. We handle everything.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <span className="text-lg font-mono px-6 py-3 rounded-full" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>
            youandme.ashketing.com
          </span>
        </div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💰</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>Business Model</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Simple marketplace economics
        </h2>
        
        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>Budget-friendly</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$65-95</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Escape rooms, comedy nights</div>
          </div>
          
          <div className="p-6 rounded-xl relative" style={{ backgroundColor: colors.accentBurgundy }}>
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: colors.accentGold, color: colors.bgPrimary }}>
              MOST POPULAR
            </div>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Sweet spot</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$100-150</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Wine tastings, kayaking</div>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>Premium</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$150+</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Private dinners, exclusive</div>
          </div>
        </div>
        
        {/* Unit economics */}
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentGold }}>10%</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Platform fee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentGold }}>$12</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Avg. revenue/booking</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentGold }}>40%</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Gift card margin</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🎯</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>Competition</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Different game entirely
        </h2>
        
        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <th className="text-left py-4 px-4" style={{ color: colors.textMuted }}></th>
                <th className="text-center py-4 px-4" style={{ color: colors.textMuted }}>Giftory</th>
                <th className="text-center py-4 px-4" style={{ color: colors.textMuted }}>DateBox Club</th>
                <th className="text-center py-4 px-4 rounded-t-lg" style={{ backgroundColor: colors.accentBurgundy, color: colors.textPrimary }}>You&amp;Me</th>
              </tr>
            </thead>
            <tbody style={{ color: colors.textSecondary }}>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Curation style</td>
                <td className="text-center py-3 px-4">Gift marketplace</td>
                <td className="text-center py-3 px-4">Subscription box</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentBurgundy}40` }}>Vibe-first editorial</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Target use</td>
                <td className="text-center py-3 px-4">For others (gifts)</td>
                <td className="text-center py-3 px-4">At-home only</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentBurgundy}40` }}>For US, out there</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Operator stories</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentBurgundy}40` }}>✅ Mini-documentaries</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Browse by mood</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4 rounded-b-lg" style={{ backgroundColor: `${colors.accentBurgundy}40` }}>✅ Vibe-first</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl">🤝</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentGold }}>The Ask</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Join us in making date nights unforgettable
        </h2>
        
        {/* Ask details */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          <div className="p-8 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Seeking</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentGold }}>$150K</div>
            <div style={{ color: colors.textSecondary }}>Pre-seed round</div>
          </div>
          <div className="p-8 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Use of funds</div>
            <div className="space-y-2 text-left" style={{ color: colors.textSecondary }}>
              <div>• 5-city expansion</div>
              <div>• Operator acquisition</div>
              <div>• Marketing launch</div>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="p-6 rounded-xl inline-block" style={{ backgroundColor: colors.accentBurgundy }}>
          <p className="text-lg mb-2" style={{ color: colors.textPrimary }}>Let&apos;s talk</p>
          <p className="font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>youandme.ashketing.com</p>
        </div>
      </div>
    </div>
  )
}

function VisionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.bgPrimary} 0%, ${colors.accentBurgundy}40 100%)` }}>
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8" style={{ color: colors.textPrimary }}>
          The future of date night is vibe-first
        </h2>
        
        <p className="text-xl md:text-2xl mb-12" style={{ color: colors.textSecondary }}>
          Every couple deserves experiences that match how they want to feel, not just a list of restaurants.
        </p>
        
        {/* Visual accent - hearts/connection */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="w-20 h-1 rounded" style={{ backgroundColor: colors.accentBurgundy }} />
          <span className="text-4xl">💫</span>
          <div className="w-20 h-1 rounded" style={{ backgroundColor: colors.accentBurgundy }} />
        </div>
        
        <div className="font-serif text-3xl" style={{ color: colors.accentGold }}>
          You&amp;Me
        </div>
        <p className="text-lg mt-2" style={{ color: colors.textMuted }}>
          Make tonight unforgettable
        </p>
      </div>
    </div>
  )
}

// Slide configuration
const slides = [
  { id: 1, component: <TitleSlide />, label: 'Title' },
  { id: 2, component: <ProblemSlide />, label: 'Problem' },
  { id: 3, component: <SolutionSlide />, label: 'Solution' },
  { id: 4, component: <MarketSlide />, label: 'Market' },
  { id: 5, component: <TractionSlide />, label: 'Traction' },
  { id: 6, component: <ProductSlide />, label: 'Product' },
  { id: 7, component: <BusinessModelSlide />, label: 'Business' },
  { id: 8, component: <CompetitionSlide />, label: 'Competition' },
  { id: 9, component: <TeamSlide />, label: 'Ask' },
  { id: 10, component: <VisionSlide />, label: 'Vision' },
]

export default function PitchDeck() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goNext = useCallback(() => {
    setCurrent(c => Math.min(c + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent(c => Math.max(c - 1, 0))
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 50) goNext()
    if (diff < -50) goPrev()
    setTouchStart(null)
  }

  return (
    <div 
      className="h-screen w-screen overflow-hidden font-sans fixed inset-0"
      style={{ backgroundColor: colors.bgPrimary }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(i)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
          >
            <div 
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'w-8' : 'hover:scale-125'
              }`}
              style={{ 
                backgroundColor: i === current ? colors.accentBurgundy : colors.textMuted 
              }}
            />
            {/* Tooltip */}
            <span 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ backgroundColor: colors.bgSurface, color: colors.textSecondary }}
            >
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div 
        className="fixed bottom-6 right-6 font-mono text-sm z-50"
        style={{ color: colors.textMuted }}
      >
        {current + 1} / {slides.length}
      </div>

      {/* Navigation arrows (desktop) */}
      <button
        onClick={goPrev}
        disabled={current === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 p-4 rounded-full transition-opacity hidden md:block disabled:opacity-20"
        style={{ backgroundColor: `${colors.bgSurface}80`, color: colors.textPrimary }}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={goNext}
        disabled={current === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 p-4 rounded-full transition-opacity hidden md:block disabled:opacity-20"
        style={{ backgroundColor: `${colors.bgSurface}80`, color: colors.textPrimary }}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Instructions overlay (first load) */}
      <div 
        className="fixed top-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm z-50"
        style={{ backgroundColor: `${colors.bgSurface}90`, color: colors.textMuted }}
      >
        ← → keys or swipe to navigate
      </div>
    </div>
  )
}
