import { Card } from "@/src/components/ui/Card"
import { BriefcaseMedical, Building2, Users, Activity } from "lucide-react"

const stats = [
  { icon: BriefcaseMedical, value: "300+", label: "Hospital Beds" },
  { icon: Building2, value: "120-Bed", label: "Ultra-Modern ICU" },
  { icon: Users, value: "8+", label: "Modular Operation Theatres" },
  { icon: Activity, value: "24/7", label: "Emergency & Cath Lab" },
]

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-surface)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, i) => {
             const Icon = stat.icon;
             return (
               <Card key={i} className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
                 <div className="text-[var(--color-primary)] mb-3 md:mb-4">
                   <Icon className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
                 </div>
                 <h4 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-1 md:mb-2">{stat.value}</h4>
                 <p className="text-[var(--color-on-surface-variant)] text-xs md:text-sm font-medium">{stat.label}</p>
               </Card>
             )
          })}
        </div>
      </div>
    </section>
  )
}
