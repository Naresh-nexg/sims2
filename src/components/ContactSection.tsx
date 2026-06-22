import { Card } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      className="py-16 md:py-24 bg-[var(--color-surface)] border-t border-[var(--color-border)]"
      id="contact"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info (Left) */}
          <div>
            <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-on-surface)] tracking-tight">
              Get In Touch With SIMS
            </h2>
            <p className="text-[var(--color-on-surface-variant)] mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
              Reach out to book consultations, verify doctor availability, or
              locate our trauma facility.
            </p>

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-[var(--color-on-surface)] mb-1">
                    Medical Center Address
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm">
                    Bellary-Uravakonda-Anantapur Highway Road, Beside Roots
                    Public School, Syndicate Nagar, Anantapur, Andhra Pradesh -
                    515004.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-[var(--color-on-surface)] mb-1">
                    24/7 Helpline
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm">
                    +91 85542 23222 / +91 77997 23222
                    <br />
                    Appointments: 08554-277799 / 08554-292929
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-[var(--color-on-surface)] mb-1">
                    Email Inquiries
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm">
                    info@simshealthcare.in
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-surface-container)] rounded-2xl p-6 md:p-8">
              <h4 className="text-sm md:text-base font-semibold text-[var(--color-on-surface)] mb-4 md:mb-6">
                Working Hours
              </h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)] mb-1">
                    Mon - Sat
                  </p>
                  <p className="text-[10px] md:text-xs text-[var(--color-on-surface-variant)]">
                    09:00 AM - 05:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)] mb-1">
                    Emergency & ICU
                  </p>
                  <p className="text-[10px] md:text-xs text-[var(--color-on-surface-variant)]">
                    24 Hours / 7 Days
                  </p>
                </div>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-[var(--color-primary)] pt-3 md:pt-4 border-t border-[var(--color-border)]">
                🚨 Emergency Critical Care: Available 24/7
              </p>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div>
            <Card className="p-6 md:p-8 lg:p-10 bg-white relative">
              {submitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl z-10 p-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Request Submitted
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We will get back to you shortly
                    to confirm your consultation.
                  </p>
                </div>
              ) : null}
              <h3 className="text-base md:text-lg font-semibold mb-6 md:mb-8 text-[var(--color-on-surface)]">
                Book a Consultation / Send Enquiry
              </h3>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John"
                      className="w-full h-10 md:h-12 px-3 md:px-4 text-sm md:text-base rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Doe"
                      className="w-full h-10 md:h-12 px-3 md:px-4 text-sm md:text-base rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full h-10 md:h-12 px-3 md:px-4 text-sm md:text-base rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">
                    Preferred Department
                  </label>
                  <select className="w-full h-10 md:h-12 px-3 md:px-4 text-sm md:text-base rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none transition-colors text-[var(--color-on-surface-variant)]">
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Surgical Gastroenterology</option>
                    <option>Pediatrics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-semibold text-[var(--color-on-surface)]">
                    Message / Symptoms
                  </label>
                  <textarea
                    required
                    placeholder="How can we help you today?"
                    rows={4}
                    className="w-full p-3 md:p-4 text-sm md:text-base rounded-lg bg-[var(--color-surface)] border border-transparent focus:border-[var(--color-primary)] outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base md:text-lg"
                >
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
