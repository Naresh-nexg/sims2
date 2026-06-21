import { Card } from "@/src/components/ui/Card"
import { Microscope, Beaker, Pill, AlertCircle, ActivitySquare } from "lucide-react"

export function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[var(--color-on-surface)]">Advanced Infrastructure & Patient Comfort</h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            Cutting-edge technical precision meets highly accessible, inclusive care options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Feature - Left Column */}
          <Card className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center bg-white border border-[var(--color-border)] shadow-md">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mb-6 md:mb-8">
               <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[var(--color-on-surface)]">24/7 Trauma & Rapid Emergency Response</h3>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-8 md:mb-10 text-base md:text-lg">
              Fully operational emergency wing with an on-call trauma team ready around the clock for acute medical crises.
            </p>
            
            <div className="mt-auto flex items-center gap-4 border-t border-[var(--color-border)] pt-5 md:pt-6">
              <div className="flex -space-x-3 md:-space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface-dim)] border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-[var(--color-primary)]">MD</div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface-dim)] border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-[var(--color-primary)]">RN</div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-surface-dim)] border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-[var(--color-primary)]">RT</div>
              </div>
              <span className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">On-Call Emergency Teams</span>
            </div>
          </Card>

          {/* Grid Features - Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <Card className="p-6 md:p-8 text-center flex flex-col items-center justify-center bg-white shadow-sm border border-[var(--color-border)]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-secondary-bg)] text-[var(--color-primary)] flex items-center justify-center mb-4 md:mb-5">
                <Microscope className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-[var(--color-on-surface)]">Siemens Diagnostics</h4>
              <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm leading-relaxed">High-resolution MRI and ultra-fast Cardiac CT scanners on-site.</p>
            </Card>

            <Card className="p-6 md:p-8 text-center flex flex-col items-center justify-center bg-white shadow-sm border border-[var(--color-border)]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-secondary-bg)] text-[var(--color-primary)] flex items-center justify-center mb-4 md:mb-5">
                <ActivitySquare className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-[var(--color-on-surface)]">120-Bed ICU</h4>
              <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm leading-relaxed">Comprehensive intensive monitoring units with high nurse-to-patient ratios.</p>
            </Card>

            <Card className="p-6 md:p-8 text-center flex flex-col items-center justify-center bg-white shadow-sm border border-[var(--color-border)]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-secondary-bg)] text-[var(--color-primary)] flex items-center justify-center mb-4 md:mb-5">
                <Pill className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-[var(--color-on-surface)]">8 Modular OTs</h4>
              <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm leading-relaxed">Zero-infection surgical suites equipped with modern anesthesia workstations.</p>
            </Card>

            <Card className="p-6 md:p-8 text-center flex flex-col items-center justify-center bg-white shadow-sm border border-[var(--color-border)]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-secondary-bg)] text-[var(--color-primary)] flex items-center justify-center mb-4 md:mb-5">
                <Beaker className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-[var(--color-on-surface)]">Inclusive Mobility</h4>
              <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm leading-relaxed">Complete wheelchair accessibility including entrance ramps, wide elevators, and dedicated restrooms.</p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
