import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyMarriageMatters from "@/components/why-marriage-matters"
import BlogPreview from "@/components/blog-preview"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyMarriageMatters />
        <BlogPreview />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
