import React from 'react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Welcome 
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <Button>
          Get Started
        </Button>
      </div>
    </section>
  )
}
