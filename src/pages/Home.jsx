import About from '@/component/About'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Hero from '@/component/Hero'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Hero />
              <About />
            </main>
            <Footer />
          </div>
  )
}
