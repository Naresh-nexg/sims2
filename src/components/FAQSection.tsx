import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What are the outpatient (OPD) consultation timings?",
    a: "General OPD operates from 09:00 AM to 05:00 PM, Monday through Saturday. Emergency and ICU admission services are open 24/7.",
  },
  {
    q: "Does the hospital have in-house diagnostics?",
    a: "Yes, SIMS features an all-inclusive diagnostic wing containing Siemens MRI, Cardiac CT, X-Ray, and advanced pathology labs operating 24/7.",
  },
  {
    q: "What payment methods and insurance are accepted?",
    a: "We accept all major credit/debit cards, UPI/NFC mobile applications, and cash. Please contact our reception desk to check the status of your specific health insurance empanelment.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            Questions & Answers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-on-surface)] tracking-tight">
            Patient FAQ
          </h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            Clear answers regarding your visits, billing, and appointments at
            SIMS Anantapur.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl md:rounded-2xl p-5 md:p-6 cursor-pointer transition-colors ${open === i ? "border-[var(--color-primary)] bg-[var(--color-surface)]" : "border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-base font-semibold text-[var(--color-on-surface)] pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-[var(--color-on-surface-variant)] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </div>
              {open === i && (
                <p className="mt-3 md:mt-4 text-[var(--color-on-surface-variant)] leading-relaxed text-xs md:text-sm">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
