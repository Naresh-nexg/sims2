import { Card } from "@/src/components/ui/Card";
import { ShieldCheck, Eye, HeartHandshake } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <div className="order-1 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://drive.google.com/thumbnail?id=1NatEIDeNv5j2scFp4jp8PzqDGsaP1Pji&sz=w1000"
                alt="Medical Professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text & Features */}
          <div className="order-2 lg:order-2">
            <div className="mb-8 md:mb-10">
              <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
                About SIMS Healthcare
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-on-surface)] leading-tight tracking-tight">
                Redefining Regional Healthcare by Bridging Advanced Clinical
                Rigour with Patient-First Care.
              </h2>
              <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                Spanning over 1,21,683 sq. ft., Sainath Institute of Medical
                Sciences (SIMS) stands as a beacon of medical innovation in
                Andhra Pradesh, committed to treating every individual with deep
                empathy and surgical excellence.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-5 md:p-6 flex items-start gap-3 md:gap-4 shadow-sm border border-[var(--color-border)]">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-secondary-bg)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Our Mission
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-xs md:text-sm">
                    To provide accessible, high-fidelity tertiary healthcare
                    through cutting-edge technology and dedicated human touch.
                  </p>
                </div>
              </Card>
              <Card className="p-5 md:p-6 flex items-start gap-3 md:gap-4 shadow-sm border border-[var(--color-border)]">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-secondary-bg)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <Eye className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Our Vision
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-xs md:text-sm">
                    To be the most trusted healthcare landmark in Rayalaseema,
                    recognized for rapid emergency response and superior
                    clinical outcomes.
                  </p>
                </div>
              </Card>
              <Card className="p-5 md:p-6 flex items-start gap-3 md:gap-4 shadow-sm border border-[var(--color-border)]">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-surface-dim)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 text-[var(--color-on-surface)]">
                    Our Values
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-xs md:text-sm">
                    Accessibility, Medical Integrity, Care Quality, and Absolute
                    Transparency in patient treatment.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
