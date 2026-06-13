import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#0A0F0D', color: '#F8FAFC' }}>
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
