import { Button } from "@/src/components/ui/Button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Departments", "Doctors", "Services", "FAQ", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex h-14 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-primary)]">SIMS Healthcare</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${link === 'Home' ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] py-5 md:py-7' : 'text-[var(--color-on-surface-variant)]'}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <Button variant="default" className="hidden md:inline-flex">Book Appointment</Button>
          <Button 
            variant="ghost" 
            className="md:hidden p-1 w-8 h-8 flex items-center justify-center -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-4 py-3 shadow-xl absolute w-full flex flex-col gap-2">
          <nav className="flex flex-col space-y-2 mb-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
              >
                {link}
              </a>
            ))}
          </nav>
          <Button variant="default" className="w-full justify-center text-sm">Book Appointment</Button>
        </div>
      )}
    </header>
  )
}
