import Link from "next/link";
import { notFound } from "next/navigation";

// Experience data - would come from database in production
const experiences = [
  {
    slug: "private-rooftop-dinner",
    title: "Private Rooftop Dinner",
    operator: "Chef Marcus",
    operatorBio: "I've been a chef for 15 years, but what I love most is creating intimate dining experiences. Every rooftop dinner is different because I design the menu around what's fresh and what the couple tells me they love.",
    vibe: "romantic",
    vibes: ["romantic", "intimate"],
    price: 180,
    duration: "3 hours",
    location: "Downtown Rooftop",
    image: "🌆",
    description: "An unforgettable evening under the stars with a private chef experience. Enjoy a custom 4-course meal designed just for you, served on a beautifully decorated rooftop with panoramic city views.",
    whatsIncluded: [
      "4-course custom menu designed for your preferences",
      "Wine pairing with each course",
      "Private rooftop setting with city views",
      "Personal service from Chef Marcus",
      "Romantic table setup with candles and flowers",
      "Dietary accommodations available",
    ],
    goodFor: "Anniversary celebrations, proposals, or simply wanting to feel special",
    maxGuests: 2,
    rating: 4.9,
    reviews: 47,
  },
  {
    slug: "midnight-kayaking",
    title: "Midnight Kayaking",
    operator: "Harbor Adventures",
    operatorBio: "We started midnight kayaking because we wanted couples to see the city in a way they never had before. The water is calmer, the lights reflect beautifully, and there's something magical about paddling together under the stars.",
    vibe: "adventurous",
    vibes: ["adventurous", "romantic"],
    price: 95,
    duration: "2 hours",
    location: "Harbor Marina",
    image: "🛶",
    description: "Paddle through the illuminated harbor as the city lights dance on the water. This guided kayaking experience offers a completely different perspective of the skyline while enjoying the peaceful evening waters.",
    whatsIncluded: [
      "Tandem kayak for couples",
      "All safety equipment and life jackets",
      "LED lights for kayak visibility",
      "Experienced guide leading the tour",
      "Hot chocolate and snacks after",
      "Waterproof bag for belongings",
    ],
    goodFor: "Couples who love adventure and want a unique view of the city",
    maxGuests: 2,
    rating: 4.8,
    reviews: 89,
  },
  {
    slug: "rooftop-pottery",
    title: "Rooftop Pottery Class",
    operator: "Clay & Co",
    operatorBio: "There's something deeply connecting about making something together with your hands. Couples leave with matching bowls they made together—and usually covered in clay, laughing.",
    vibe: "creative",
    vibes: ["creative", "romantic"],
    price: 120,
    duration: "2.5 hours",
    location: "Arts District",
    image: "🎨",
    description: "Learn the art of pottery together in an intimate rooftop studio. Create matching pieces while enjoying wine and stunning views. Take home your handmade creations as lasting reminders of your date.",
    whatsIncluded: [
      "Personal pottery wheel for each person",
      "All clay and materials",
      "Step-by-step guidance from instructor",
      "Wine and light snacks",
      "Your finished pieces glazed and fired",
      "Pickup or delivery of finished work",
    ],
    goodFor: "Creative couples who want to make something together",
    maxGuests: 2,
    rating: 4.9,
    reviews: 63,
  },
  {
    slug: "comedy-date-night",
    title: "Comedy Date Night",
    operator: "Laugh Factory",
    operatorBio: "Laughter is the best medicine for any relationship. Our intimate comedy shows are designed to get couples laughing together—and studies show that shared laughter creates stronger bonds.",
    vibe: "playful",
    vibes: ["playful", "fun"],
    price: 75,
    duration: "2 hours",
    location: "Comedy Club District",
    image: "🎭",
    description: "A night of guaranteed laughter with premium seats at an intimate comedy show. Includes drinks and appetizers before the show, plus a meet-and-greet with the performers.",
    whatsIncluded: [
      "Premium front-row seats",
      "2 drinks per person",
      "Appetizer plate to share",
      "Meet-and-greet with comedians after show",
      "Souvenir photo opportunity",
      "VIP entrance—no lines",
    ],
    goodFor: "Couples who love to laugh and want an entertaining night out",
    maxGuests: 2,
    rating: 4.7,
    reviews: 124,
  },
  {
    slug: "sunset-wine-tasting",
    title: "Sunset Wine Tasting",
    operator: "Valley Vineyards",
    operatorBio: "Our family has been making wine for three generations. We love sharing our passion with couples and watching them discover new favorites together.",
    vibe: "romantic",
    vibes: ["romantic", "relaxing"],
    price: 150,
    duration: "3 hours",
    location: "Valley Vineyards Estate",
    image: "🍷",
    description: "Watch the sunset over rolling vineyards while sampling premium wines. This private tasting experience includes a tour of the vineyard, a sommelier-led tasting, and a charcuterie board overlooking the valley.",
    whatsIncluded: [
      "Private vineyard tour",
      "6 wine tastings with expert guidance",
      "Artisan charcuterie and cheese board",
      "Sunset viewing on the terrace",
      "10% off any wine purchases",
      "Transportation available (add-on)",
    ],
    goodFor: "Wine lovers and anyone wanting a romantic countryside escape",
    maxGuests: 2,
    rating: 4.9,
    reviews: 76,
  },
  {
    slug: "escape-room-challenge",
    title: "Escape Room Challenge",
    operator: "Puzzle Masters",
    operatorBio: "We design our escape rooms specifically for couples—they require communication, teamwork, and trust. It's the perfect way to see how well you work together under pressure!",
    vibe: "competitive",
    vibes: ["competitive", "fun"],
    price: 85,
    duration: "1.5 hours",
    location: "Puzzle Masters HQ",
    image: "🔐",
    description: "Test your teamwork in an immersive private escape room designed for couples. Work together to solve puzzles, crack codes, and escape before time runs out. Includes a debrief and celebratory drinks after.",
    whatsIncluded: [
      "Private escape room (couples only)",
      "Choice of 3 themed rooms",
      "Game master guidance",
      "Team photo with props",
      "2 drinks at the lounge after",
      "Bragging rights certificate",
    ],
    goodFor: "Competitive couples who love puzzles and challenges",
    maxGuests: 2,
    rating: 4.8,
    reviews: 98,
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    notFound();
  }

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
              <Link href="/about" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">About</Link>
              <Link href="/login" className="text-[#9ca3af] hover:text-[#f5f5f0] transition-colors">Log in</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="pt-16">
        <div className="h-[50vh] bg-gradient-to-br from-[#7f263a]/30 to-[#2d4a3e]/30 flex items-center justify-center relative">
          <span className="text-[200px] opacity-50">{experience.image}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.vibes.map((vibe) => (
                    <span
                      key={vibe}
                      className="px-3 py-1 rounded-full border border-[#c9a961] text-[#c9a961] text-xs font-mono uppercase"
                    >
                      {vibe}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl text-[#f5f5f0] mb-2">
                  {experience.title}
                </h1>
                <p className="text-[#9ca3af]">by {experience.operator}</p>
              </div>

              {/* Description */}
              <div className="bg-[#1a2129] border border-white/10 rounded-sm p-6">
                <h2 className="font-serif text-xl text-[#f5f5f0] mb-4">The Experience</h2>
                <p className="text-[#9ca3af] leading-relaxed">{experience.description}</p>
              </div>

              {/* Operator Quote */}
              <div className="bg-[#242d38] border border-white/10 rounded-sm p-6">
                <p className="font-serif text-xl text-[#f5f5f0] italic mb-4">
                  &ldquo;{experience.operatorBio}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7f263a]/20 rounded-full flex items-center justify-center text-[#7f263a] font-medium">
                    {experience.operator.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#f5f5f0] font-medium">{experience.operator}</div>
                    <div className="text-[#6b7280] text-sm">Experience Creator</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-[#1a2129] border border-white/10 rounded-sm p-6">
                <h2 className="font-serif text-xl text-[#f5f5f0] mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {experience.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#9ca3af]">
                      <span className="text-[#c9a961] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#1a2129] border border-white/10 rounded-sm p-4">
                  <div className="text-[#6b7280] text-sm mb-1">Duration</div>
                  <div className="text-[#f5f5f0] font-medium">{experience.duration}</div>
                </div>
                <div className="bg-[#1a2129] border border-white/10 rounded-sm p-4">
                  <div className="text-[#6b7280] text-sm mb-1">Location</div>
                  <div className="text-[#f5f5f0] font-medium">{experience.location}</div>
                </div>
                <div className="bg-[#1a2129] border border-white/10 rounded-sm p-4">
                  <div className="text-[#6b7280] text-sm mb-1">Good for</div>
                  <div className="text-[#f5f5f0] font-medium">Couples ({experience.maxGuests})</div>
                </div>
              </div>

              {/* Good For */}
              <div className="bg-[#2d4a3e]/20 border border-[#2d4a3e] rounded-sm p-6">
                <h3 className="text-[#f5f5f0] font-medium mb-2">Perfect for</h3>
                <p className="text-[#9ca3af]">{experience.goodFor}</p>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a2129] border border-white/10 rounded-sm p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-[#c9a961] font-serif text-3xl mb-1">
                    ${experience.price}
                  </div>
                  <div className="text-[#6b7280] text-sm">per couple</div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[#c9a961]">★</span>
                  <span className="text-[#f5f5f0] font-medium">{experience.rating}</span>
                  <span className="text-[#6b7280]">({experience.reviews} reviews)</span>
                </div>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="block text-sm text-[#9ca3af] mb-2">Select a date</label>
                  <input
                    type="date"
                    className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] focus:outline-none focus:border-[#7f263a]"
                  />
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <label className="block text-sm text-[#9ca3af] mb-2">Select a time</label>
                  <select className="w-full bg-[#242d38] border border-white/10 rounded-sm px-4 py-3 text-[#f5f5f0] focus:outline-none focus:border-[#7f263a]">
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>

                {/* Book Button */}
                <Link href="/login">
                  <button className="w-full bg-[#7f263a] hover:bg-[#9d3e4b] text-[#f5f5f0] px-6 py-4 rounded-sm font-mono uppercase tracking-wider text-sm transition-all mb-4">
                    Book Now
                  </button>
                </Link>

                <p className="text-center text-[#6b7280] text-sm">
                  Free cancellation up to 48 hours before
                </p>

                {/* Contact */}
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-[#9ca3af] text-sm text-center">
                    Questions? <a href="#" className="text-[#c9a961] hover:underline">Contact the operator</a>
                  </p>
                </div>
              </div>
            </div>
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

// Generate static paths for all experiences
export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}
