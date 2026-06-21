import { Button } from "@/src/components/ui/Button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center bg-[var(--color-surface)]">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070" 
          alt="Healthcare professionals walking" 
          className="w-full h-full object-cover object-center z-0"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10" />
      </div>

      <div className="container relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 pb-12 sm:pb-0">
        <div className="max-w-2xl text-white pt-10 sm:pt-12 md:pt-16">
          <div className="inline-block px-3 md:px-4 py-1 mb-4 md:mb-6 rounded-full bg-[var(--color-primary)] text-xs md:text-sm font-semibold tracking-wide">
            24/7 Super-Speciality Care
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            Advanced Healthcare with <span className="text-[var(--color-primary-hover)]">Compassion</span> and Precision
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-xl font-normal">
            Bringing world-class medical expertise, a 120-bed advanced ICU, and cutting-edge diagnostic technology to the heart of Anantapur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white bg-black/20 backdrop-blur-sm gap-2">
              <Phone className="w-5 h-5" /> Emergency Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
