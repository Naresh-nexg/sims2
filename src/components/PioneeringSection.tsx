import { Card } from "@/src/components/ui/Card";
import { ShieldCheck, Eye, HeartHandshake } from "lucide-react";

export function PioneeringSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <div className="order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Hospital Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text & Features */}
          <div className="order-2">
            <div className="mb-8 md:mb-10">
              <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
                Our Vision
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-on-surface)] leading-tight tracking-tight">
                Pioneering Medical Innovation in Anantapur
              </h2>
              <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                SIMS Healthcare sets a new benchmark for infrastructure in the
                district. We eliminate the need for patients to travel to metro
                cities by offering full-scale surgical, diagnostic, and
                intensive care interventions right here at home.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-secondary-bg)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Infrastructure
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-sm">
                    Custom-built 1.2+ Lakh sq. ft. campus optimized for
                    zero-delay patient movement and sterile safety.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-secondary-bg)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <Eye className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Advanced ICU
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-sm">
                    120 critical-care beds integrated with central automated
                    monitoring systems for precision tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-surface-dim)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Diagnostics
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-sm">
                    In-house Siemens MRI, high-resolution Cardiac CT, and fully
                    integrated pathology labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
