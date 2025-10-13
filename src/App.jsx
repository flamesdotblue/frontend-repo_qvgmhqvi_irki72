import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(163,105,255,0.15),transparent)] bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Led by a visionary spirit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            We are explorers of luminous possibility. Our craft is to shape immersive systems that
            elevate human potential — calm at the helm, infinite in reach. Each interaction is
            engineered for presence, trust, and wonder.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <span className="font-semibold text-white">Aurora Vega</span>
            <span className="text-white/60">Founder & CEO</span>
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
