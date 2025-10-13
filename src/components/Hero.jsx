import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Cosmic Radiators Hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-fuchsia-500/20 via-transparent to-transparent blur-2xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span>Futuristic • Meditative • Awe-inspiring</span>
        </div>

        <h1 className="max-w-5xl bg-gradient-to-br from-white via-fuchsia-100 to-violet-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Cosmic Radiators
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          A portal into the trippy galaxy rollercoaster — where liquid gradients meet
          deep-space engineering. Experience immersion calibrated for the next era of
          human-computer symbiosis.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
          >
            Explore the Tech
          </a>
          <a
            href="#about"
            className="group rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Our Vision
            <span className="ml-2 inline-block translate-y-[1px] transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
