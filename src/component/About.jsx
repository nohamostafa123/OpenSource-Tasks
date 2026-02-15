import React from 'react'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
   <section className="py-20">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div className="space-y-6">
          <h2 className="text-3xl font-bold">
             About Section
          </h2>
          <p className="text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
       <Button>
        Learn More
    </Button>
  </div>
  <div className="flex justify-center">
    <img
      src="https://i.pinimg.com/1200x/14/a2/2e/14a22e22ac4b93d56aee848ff24c2235.jpg"
      alt="about"
      className="rounded-2xl shadow-lg w-full max-w-md object-cover"
    />
  </div>

</div>

    </section>
  )
}
