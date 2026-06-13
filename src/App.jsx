import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function AppInner() {
  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--bg-page)', color: 'var(--text-body)' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppPreview />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
