import React from 'react'
import Navbar from '@/components/landing-page/Navbar'
import Hero from '@/components/landing-page/hero'
import Stats from '@/components/landing-page/stats'
import Features from '@/components/landing-page/features'
import HowItWorks from '@/components/landing-page/how-it-works'
import Campaigns from '@/components/landing-page/campaigns'
import Cta from '@/components/landing-page/cta'
import Footer from '@/components/landing-page/footer'

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Campaigns />
      <Cta />
      <Footer />
    </>
  )
}

export default Page