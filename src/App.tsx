import { useEffect, useState } from "react";

function Countdown({ light = false }: { light?: boolean }) {
  const [targetDate] = useState(() => Date.now() + 8 * 60 * 60 * 1000 + 37 * 60 * 1000 + 22 * 1000);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 8, minutes: 37, seconds: 22 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 8, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: 0,
        hours: 8,
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex justify-center gap-4 my-6">
      {[
        { label: "days", value: timeLeft.days },
        { label: "hours", value: timeLeft.hours },
        { label: "minutes", value: timeLeft.minutes },
        { label: "seconds", value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className={`countdown-box font-bold text-3xl sm:text-4xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl shadow-lg ${
              light ? "text-white" : "text-white"
            }`}
          >
            {pad(value)}
          </div>
          <span
            className={`text-xs mt-2 uppercase tracking-widest font-semibold ${
              light ? "text-white/80" : "text-pink-500"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

const learnItems = [
  {
    title: "Why customers buy",
    desc: "Understand the psychology, triggers and trust factors that drive buying decisions.",
  },
  {
    title: "Handling objections with confidence",
    desc: "Learn how to confidently convert objections into meaningful sales conversations.",
  },
  {
    title: "Building a stronger sales pipeline",
    desc: "Use practical methods to consistently generate and nurture quality leads.",
  },
  {
    title: "Pitching to decision makers",
    desc: "Present your offer with clarity, confidence and stronger business relevance.",
  },
  {
    title: "Negotiation skills for tough clients",
    desc: "Handle pricing, resistance and tough client conversations with confidence.",
  },
  {
    title: "Rapport building and influence",
    desc: "Build trust faster and create stronger client relationships that convert.",
  },
  {
    title: "Social selling for new business",
    desc: "Leverage social platforms to attract prospects and open sales conversations.",
  },
  {
    title: "Closing techniques that improve conversion",
    desc: "Use proven closing methods to improve conversion from meetings to deals.",
  },
];

const whoItems = [
  "Sales Professionals looking to improve conversions and confidence",
  "Business Owners who sell their own services or products",
  "Entrepreneurs building revenue through direct selling",
  "Team Leads managing performance and client conversations",
  "Relationship Managers handling long-term client trust",
  "Freshers in sales building strong foundations",
  "Business Development Teams working on pipeline and meetings",
  "Client-facing professionals who need stronger persuasion and communication",
];

const walkAwayItems = [
  {
    title: "All training reference material",
    desc: "Get access to worksheets, frameworks, notes and practical templates for post-workshop application.",
  },
  {
    title: "2 X half a day workshop with high tea & Snacks",
    desc: "Two immersive live sessions designed for deeper learning, interaction and real-time practice.",
  },
  {
    title: "Entry into GoWIN Sales mastermind community - group",
    desc: "Join an exclusive peer network for ongoing learning, accountability and sales growth discussions.",
  },
  {
    title: "Complimentary access to GoWIN Sales Pro - Online Digital learning platform",
    desc: "Continue your learning journey with on-demand sales modules, tools and recorded resources.",
  },
  {
    title: "50% off on 121 Coaching with Govind Babu",
    desc: "Get personalized guidance to improve your pitch, confidence and conversion approach.",
  },
  {
    title: "Confidence-building tools for high-stakes conversations",
    desc: "Practical mindset techniques to handle tough objections and critical client discussions with confidence.",
  },
];

const faqs = [
  {
    q: "Is this a live workshop?",
    a: "Yes, this is a live workshop session with practical learning and application.",
  },
  {
    q: "Who is this workshop ideal for?",
    a: "It is ideal for sales professionals, business owners, entrepreneurs and client-facing teams.",
  },
  {
    q: "Is there any prerequisite to attend this workshop?",
    a: "No.",
  },
  {
    q: "Will participants receive a certificate?",
    a: "Yes, participants will receive a certificate.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes. It is designed for both freshers and experienced professionals who want to improve selling effectiveness. This aligns with GoWIN's interventions across levels.",
  },
  {
    q: "Do I have lifetime access to this course material?",
    a: "Yes, you have lifetime access to these lectures and everything else that I will be sharing.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "white" }}>
      <button
        className="faq-btn w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 bg-white hover:bg-pink-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span
          className="material-icons icon-grad ml-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-pink-50 text-gray-600 border-t border-pink-100 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

const galleryImages = [
  "https://tagmango.com/staticassets/-screenshot-2026-04-13-at-8-409de0a7c3a5102f6f0f6e88776ee2e1.png",
  "https://tagmango.com/staticassets/-img_7666-00349adb0ec6cb7acc04053d182a77cf.JPG",
  "https://tagmango.com/staticassets/-img_7781-fee693b3b495456609a123b58b0d751b.JPG",
  "https://tagmango.com/staticassets/-img_7827-76ab443c3333292f0f16cfa93087dce7.JPG",
  "https://tagmango.com/staticassets/-screenshot-2026-04-13-at-8-b063971e379553a15e1aca80c3e3cf4f.png",
  "https://tagmango.com/staticassets/-img_7839-1953d047714fa659220a946d3977d6f8.JPG",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">

      {/* ── TOP GRADIENT BAR ── */}
      <div className="section-divider w-full" />

      {/* ── HERO ── */}
      <section className="animated-gradient-subtle border-b border-pink-100">
        <div className="max-w-3xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-5">
          <img
            src="https://tagmango.com/staticassets/-untitled-design-9-40f7d6b27883db513c2457dce10abfab.png"
            alt="GoWIN Coaching"
            className="h-24 object-contain mb-2 drop-shadow-lg"
          />

          <p className="text-sm font-bold gradient-text uppercase tracking-widest">GOWIN COACHING presents</p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Successful Sales Professional — 1 Day Live <br className="hidden sm:block" />
            in person workshop @ Banjara Hills, Hyderabad
          </h1>

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl">
            Master buyer psychology, objection handling, pitching, negotiation and closing, while discovering your unique selling style
          </p>

          <p className="text-gray-500 text-sm max-w-2xl">
            1-day live workshop for sales professionals, business owners and client-facing teams who want to sell with more confidence, clarity and consistency.
          </p>

          {/* ── HERO VIDEO ── */}
          <div className="w-full mt-4 mb-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/6a9Yghyv6ko?autoplay=1&mute=1&loop=1&playlist=6a9Yghyv6ko&rel=0&modestbranding=1&playsinline=1&controls=1"
              title="GoWIN Coaching Workshop Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>

          <p className="text-sm font-semibold text-gray-700 bg-white border border-pink-200 rounded-full px-5 py-2 shadow-sm">
            Over 50k+ professionals trained &nbsp;|&nbsp; 250 client organizations &nbsp;|&nbsp; 9 Countries
          </p>

          {/* Event details */}
          <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              { icon: "calendar_today", label: "Event on", value: "May 2, 3", highlight: false },
              { icon: "access_time", label: "Time", value: "3 PM to 7:30 PM", highlight: false },
              { icon: "payments", label: "Registration Fee", value: "₹3000", highlight: true },
              {
                icon: "location_on",
                label: "Venue",
                value: "BHub - Conference centre, Lumbini Jewel Mall, Banjara hills, Hyderabad",
                highlight: false,
              },
            ].map(({ icon, label, value, highlight }) => (
              <div
                key={label}
                className={`card-lift flex items-start gap-3 rounded-2xl p-4 border shadow-sm ${
                  highlight
                    ? "animated-gradient-bg border-transparent shadow-lg scale-[1.03] ring-2 ring-pink-300"
                    : "bg-white border-pink-100"
                }`}
              >
                <span className={`material-icons mt-0.5 ${highlight ? "text-white text-3xl" : "icon-grad"}`}>{icon}</span>
                <div>
                  <p className={`text-xs uppercase tracking-widest font-semibold ${highlight ? "text-white/80" : "text-gray-400"}`}>{label}</p>
                  <p className={`font-extrabold leading-snug ${highlight ? "text-white text-2xl sm:text-3xl drop-shadow-md" : "text-gray-800 text-base"}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="gradient-text font-bold mt-2 text-base">Enrollment ends soon. Claim your spot!</p>

          <Countdown />

          <a
            href="#register"
            className="glow-btn text-white font-bold px-10 py-4 rounded-full text-lg"
          >
            Register Today
          </a>

          <p className="text-xs text-gray-400 max-w-xl leading-relaxed mt-1">
            Training fees includes: All training reference material, 2 X half a day workshop with high tea &amp; Snacks,
            Entry into GoWIN Sales mastermind community - group, Complimentary access to GoWIN Sales Pro - Online Digital learning platform. 50% off on 121 Coaching with Govind Babu.
          </p>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── TRUST STATS ── */}
      <section className="animated-gradient py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-2 drop-shadow">
            Trusted by professionals and organizations for <br className="hidden sm:block" /> practical sales capability building
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-10">
            Our sales and capability-building interventions have been delivered across diverse industries through direct engagements and partner-led programs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "people_alt", stat: "Over 50k+ professionals trained" },
              { icon: "ballot", stat: "250 client organizations" },
              { icon: "share_location", stat: "9 Countries" },
            ].map(({ icon, stat }) => (
              <div
                key={stat}
                className="card-lift bg-white/15 backdrop-blur rounded-2xl p-6 flex flex-col items-center gap-3 border border-white/25 shadow-lg"
              >
                <span className="material-icons text-white text-4xl">{icon}</span>
                <p className="text-white font-bold text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── WHAT YOU LEARN ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">
            <span className="gradient-text">What are you going to learn?</span>
          </h2>
          <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            This workshop is designed to help you sell with more clarity, confidence and consistency in real-world sales conversations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {learnItems.map(({ title, desc }) => (
              <div
                key={title}
                className="card-lift flex gap-4 bg-white rounded-2xl p-5 border border-pink-100 shadow-sm"
              >
                <span className="material-icons icon-grad mt-0.5 flex-shrink-0">done</span>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── WHO SHOULD JOIN ── */}
      <section className="animated-gradient-subtle py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">
            <span className="gradient-text">Who Should Join?</span>
          </h2>
          <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            This workshop is ideal for professionals whose growth depends on stronger conversations, better trust and better closing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoItems.map((item) => (
              <div
                key={item}
                className="card-lift flex gap-3 items-start bg-white rounded-2xl p-5 border border-pink-100 shadow-sm"
              >
                <span className="material-icons icon-grad mt-0.5 flex-shrink-0">person_add</span>
                <p className="font-medium text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
            <span className="gradient-text">What our Attendees say</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Mehnel", role: "Sales Head" },
              { name: "Mehnel", role: "Sales Manager" },
            ].map(({ name, role }, i) => (
              <div
                key={i}
                className="card-lift bg-white rounded-2xl p-6 border border-pink-100 shadow-md relative overflow-hidden"
              >
                {/* Subtle gradient strip at top */}
                <div className="absolute top-0 left-0 right-0 h-1 animated-gradient rounded-t-2xl" />
                <div className="flex items-center gap-4 mb-4 mt-2">
                  <img
                    src="https://tagmango.com/staticassets/-ellipse-146-92b5e9b9ac926a803bd6e411de1f209a.svg"
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{name}</p>
                    <p className="text-sm gradient-text font-semibold">{role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "I have been following his content since 2020. The most interesting thing that I learnt during his workshops is how I can trick my mind into doing things I wanted and that is an unconscious hack that I always follow"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── GALLERY / EXPERIENTIAL ── */}
      <section className="animated-gradient-subtle py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              <span className="gradient-text">Experiential learning, not just theory</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              GoWIN workshops use interactive activities, reflection and practical application to make learning stick.
            </p>
          </div>
          <img
            src="https://tagmango.com/staticassets/-whatsapp-image-2025-10-18-at-3-21b2b136745a5f7e076e3f06cc3a3f70.jpeg"
            alt="Workshop"
            className="w-full rounded-2xl object-cover mb-6 max-h-72 shadow-xl border-2 border-pink-200"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Workshop moment ${i + 1}`}
                className="card-lift w-full h-40 sm:h-52 object-cover rounded-2xl shadow-md border border-pink-100"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── WALK AWAY WITH ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">
            <span className="gradient-text">What You Will Walk Away with</span>
          </h2>
          <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            You will leave with practical tools you can apply immediately in client meetings, pitches and follow-ups.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {walkAwayItems.map(({ title, desc }) => (
              <div
                key={title}
                className="card-lift rounded-2xl p-5 border border-pink-200 shadow-sm relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #fff0f8 0%, #fde8f7 100%)" }}
              >
                <div className="absolute top-0 left-0 w-1 h-full animated-gradient rounded-l-2xl" />
                <p className="font-bold text-gray-800 mb-2 pl-3">{title}</p>
                <p className="text-gray-500 text-sm leading-relaxed pl-3">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── SECOND CTA ── */}
      <section id="register" className="animated-gradient py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg mb-2 drop-shadow">Workshop on 2nd, 3rd May. Limited Seats Only</p>
          <Countdown light />
          <a
            href="#register"
            className="inline-block bg-white font-extrabold px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform mb-4"
            style={{ color: "#F430BD" }}
          >
            Register Today for <span className="text-2xl sm:text-3xl underline decoration-white decoration-4 drop-shadow-lg ml-1">₹3000</span>
          </a>
          <p className="text-xs text-white/75 max-w-xl mx-auto leading-relaxed mt-2">
            Training fees includes: All training reference material, 2 X half a day workshop with high tea &amp; Snacks,
            Entry into GoWIN Sales mastermind community - group, Complimentary access to GoWIN Sales Pro - Online Digital learning platform. 50% off on 121 Coaching with Govind Babu.
          </p>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── ABOUT TRAINER ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1 order-2 sm:order-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 leading-snug">
              Learn from Govind Babu, a seasoned sales transformation coach with deep corporate sales leadership experience and a track record of training thousands of professionals across India and the Middle East.
            </h2>
            <ul className="space-y-3">
              {[
                "18+ years of corporate experience across India, USA, Singapore and UAE",
                "Worked with TechM, Sify, Birlasoft, Aditya Birla and Attra Synechron",
                "Trained 50,000+ sales professionals",
                "Specializes in experiential sales training, NLP-based transformation and mindset development",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-gray-600 text-sm">
                  <span className="material-icons icon-grad text-base mt-0.5">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-bold gradient-text">50K+ trained | 250+ clients | 4.8 rating</p>
          </div>
          <div className="order-1 sm:order-2 flex-shrink-0">
            <div className="p-1 rounded-3xl animated-gradient shadow-2xl">
              <img
                src="https://tagmango.com/staticassets/-screenshot-2026-04-10-at-3-94c08a95eafd2adf3bad47e936bfec9c.png"
                alt="Govind Babu"
                className="w-60 h-72 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── FAQs ── */}
      <section className="animated-gradient-subtle py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
            <span className="gradient-text">FAQs</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-full" />

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-pink-100 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
          <img
            src="https://tagmango.com/staticassets/-untitled-design-c90c4b7cceb3f9b64ebbc69924d417ef.svg"
            alt="GoWIN"
            className="h-10 object-contain"
          />
          <p className="text-xs text-gray-400">Legal</p>
          <p className="text-xs gradient-text font-semibold">© 2026 GOWIN. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}
