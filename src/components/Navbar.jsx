import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-fuchsia-500/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-md">
                <Rocket className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight text-white">Cosmic Radiators</div>
                <div className="text-xs text-white/60">Immersive Space-Tech</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition">Technology</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden sm:block">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/40 transition-shadow"
              >
                Request Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
