import { Card } from "@/src/components/ui/Card"
import { HeartPulse, Bone, Brain, Baby, ActivitySquare, Sparkles, ArrowRight } from "lucide-react"

const departments = [
  {
    icon: HeartPulse,
    name: "Cardiology & Cardiothoracic Care",
    description: "24/7 active Cath Lab equipped for complex angioplasties, cardiac CT monitoring, and emergency heart care."
  },
  {
    icon: ActivitySquare,
    name: "Surgical Gastroenterology",
    description: "Advanced keyhole (laparoscopic) surgeries, GI oncology treatments, and specialized bariatric/weight-loss procedures."
  },
  {
    icon: Bone,
    name: "General & Advanced Surgery",
    description: "Comprehensive inpatient procedures managed across 8 state-of-the-art modular operation theatres."
  },
  {
    icon: Sparkles,
    name: "Gynecology & Obstetrics",
    description: "Dedicated, sensitive women's care encompassing routine screenings, high-risk pregnancy management, and post-natal support."
  },
  {
    icon: Baby,
    name: "Pediatrics & Neonatology",
    description: "Expert pediatric consultations and critical neonatal care setups designed around child safety."
  },
  {
    icon: Brain,
    name: "Physiotherapy & Rehabilitation",
    description: "Personalized post-surgical physical therapy units helping patients regain mobility efficiently."
  }
]

export function DepartmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="departments">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[var(--color-on-surface)]">Specialized Medical Super-Specialities</h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            A comprehensive ecosystem of advanced medical and surgical units run by expert clinicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <Card key={i} className="p-6 md:p-8 bg-[var(--color-surface)] shadow-sm hover:shadow-clinical transition-shadow group cursor-pointer border border-transparent hover:border-[var(--color-border)] flex flex-col h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center text-[var(--color-primary)] mb-5 md:mb-6 shadow-sm border border-[var(--color-border)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[var(--color-on-surface)]">{dept.name}</h3>
                <p className="text-sm md:text-base text-[var(--color-on-surface-variant)] leading-relaxed mb-6 md:mb-8 flex-grow">
                  {dept.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
