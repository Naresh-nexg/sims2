import { Card } from "@/src/components/ui/Card";
import {
  HeartPulse,
  Bone,
  Baby,
  Stethoscope,
  Sparkles,
  Ambulance,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    name: "Cardiology",
    description:
      "Comprehensive heart care including 24/7 Cath Lab and advanced cardiac procedures.",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description:
      "Expert bone and joint care, customized joint replacements, and orthopedic trauma management.",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description:
      "Dedicated pediatric wing with expert child consultations and neonatal intensive care.",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description:
      "Comprehensive diagnostic and therapeutic services for illness prevention and management.",
  },
  {
    icon: Sparkles,
    name: "Gynecology",
    description:
      "Complete women's healthcare, routine screenings, and advanced maternity services.",
  },
  {
    icon: Ambulance,
    name: "ICU & Emergency",
    description:
      "120-bed advanced ICU with round-the-clock rapid emergency and trauma response.",
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="departments">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            Specialities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-on-surface)] tracking-tight">
            Our Departments
          </h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            A comprehensive ecosystem of advanced medical and surgical units run
            by expert clinicians.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <Card
                key={i}
                className="p-8 bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-transparent hover:border-[var(--color-primary)]/20 flex flex-col h-full rounded-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-sm border border-gray-100 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-6 flex-grow">
                  {dept.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
