import { Card } from "@/src/components/ui/Card";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    date: "Late 2025",
    title: "Mega Launch of SIMS Healthcare",
    excerpt:
      "Our state-of-the-art 300-bed facility is now fully operational on Bellary Road, offering round-the-clock emergency and trauma care.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    date: "Recent",
    title: "Advanced Cath Lab & MRI Infrastructure Active",
    excerpt:
      "Patients can now access advanced cardiac interventions and high-resolution Siemens MRI scans locally within Anantapur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800",
    date: "Recent",
    title: "Specialized Bariatric & Laparoscopic Care",
    excerpt:
      "Dr. N. Mohammed Shahid introduces advanced minimally invasive GI surgeries and metabolic weight-loss procedures to the region.",
  },
];

export function NewsSection() {
  return (
    <section
      className="pt-40 pb-16 sm:pt-48 md:pt-32 md:pb-24 bg-[var(--color-surface)] relative z-10"
      id="news"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            Latest News
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-on-surface)] tracking-tight">
            Hospital Updates & Insights
          </h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            Stay connected with the latest announcements, health camps, and
            diagnostic upgrades from our Anantapur facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-[var(--color-surface-container)]">
                <p className="text-xs md:text-sm font-semibold text-[var(--color-primary)] tracking-wide mb-2 md:mb-3">
                  {item.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[var(--color-on-surface)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-on-surface-variant)] mb-4 md:mb-6 flex-grow leading-relaxed">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors gap-2 mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
