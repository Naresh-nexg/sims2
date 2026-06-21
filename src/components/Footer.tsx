import { MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--color-border)] pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-16">
          
          <div className="lg:col-span-4">
             <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)] mb-4 md:mb-6 block">SIMS Healthcare</span>
             <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm leading-relaxed mb-6 md:mb-8 pr-0 md:pr-4">
               Redefining modern regional medical care through a robust fusion of advanced infrastructure, 120 ICU beds, and specialized surgical expertise.
             </p>
             <div className="flex items-center gap-3 md:gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                   <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                   <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                   <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
             </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
             <h4 className="font-semibold text-sm md:text-base text-[var(--color-on-surface)] mb-4 md:mb-6">Quick Links</h4>
             <ul className="space-y-3 md:space-y-4">
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Patient Guidelines</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Careers</a></li>
             </ul>
          </div>

          <div className="lg:col-span-2">
             <h4 className="font-semibold text-sm md:text-base text-[var(--color-on-surface)] mb-4 md:mb-6">Departments</h4>
             <ul className="space-y-3 md:space-y-4">
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Cardiology</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Surgical GI</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">General Surgery</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Pediatrics</a></li>
                <li><a href="#" className="text-xs md:text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">Emergency</a></li>
             </ul>
          </div>

          <div className="lg:col-span-3">
             <h4 className="font-semibold text-sm md:text-base text-[var(--color-on-surface)] mb-4 md:mb-6">Health Updates</h4>
             <p className="text-xs md:text-sm text-[var(--color-on-surface-variant)] mb-4">Subscribe to receive wellness tips and information about upcoming free health camps.</p>
             <div className="relative">
                <input type="email" placeholder="Your email address" className="w-full h-10 md:h-12 pl-3 md:pl-4 pr-10 md:pr-12 rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none text-xs md:text-sm transition-colors" />
                <button className="absolute right-1 top-1 bottom-1 w-8 md:w-10 bg-[var(--color-primary)] rounded-md flex items-center justify-center text-white hover:bg-[var(--color-primary-hover)] transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
             </div>
          </div>

        </div>

        <div className="pt-6 md:pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-[var(--color-on-surface-variant)] text-center md:text-left">
             © 2026 SIMS Healthcare (Sainath Institute of Medical Sciences). All rights reserved. Precise care with a human touch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-[var(--color-on-surface-variant)]">
             <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Safety Compliance</a>
             <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Accessibility Standards</a>
             <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
