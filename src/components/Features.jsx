import { Cpu, Shield, Globe, Rocket } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Radiant Propulsion',
    desc: 'Energy-efficient thrust arrays tuned to liquid gradient waveforms for elegant, high-impulse maneuvers.'
  },
  {
    icon: Cpu,
    title: 'Neuro-Sync Control',
    desc: 'Meditative interfaces harmonized with cognitive rhythms for calm, precise piloting and orchestration.'
  },
  {
    icon: Shield,
    title: 'Quantum Shielding',
    desc: 'Adaptive field envelopes that refract cosmic noise and stabilize your journey through the unknown.'
  },
  {
    icon: Globe,
    title: 'Holographic Telemetry',
    desc: 'Pan-galactic data streams visualized as living gradients for situational awareness at a glance.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Technology that feels like meditation
          </h2>
          <p className="mt-3 text-white/70">
            Designed for serenity at velocity. Systems that listen, align, and amplify your intent.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-xl backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-fuchsia-500/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
