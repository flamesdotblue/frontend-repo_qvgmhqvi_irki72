export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Cosmic Radiators. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="mailto:hello@cosmicradiators.io" className="text-white/70 hover:text-white">hello@cosmicradiators.io</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
