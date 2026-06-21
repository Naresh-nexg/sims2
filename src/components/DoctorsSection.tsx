import { Card } from "@/src/components/ui/Card"
import { Button } from "@/src/components/ui/Button"
import { BadgeCheck } from "lucide-react"

const filters = ["All", "Surgical GI", "General Medicine", "Physiotherapy"]

const doctors = [
  {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500",
    name: "Dr. N. Mohammed Shahid",
    title: "Consultant Surgical Gastroenterologist",
    experience: "Advanced Laparoscopy, GI Oncology & Bariatric Surgery"
  },
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500",
    name: "Dr. Diwakar",
    title: "Consultant Surgeon",
    experience: "General & Minimally Invasive Surgeries"
  },
  {
    image: "https://images.unsplash.com/photo-1537368910025-7028a411df8e?auto=format&fit=crop&q=80&w=500",
    name: "Dr. Sunitha",
    title: "Consultant Physician & Gynecologist",
    experience: "Internal Medicine & Maternal Care"
  },
  {
    image: "https://images.unsplash.com/photo-1594824436998-d89de6595568?auto=format&fit=crop&q=80&w=500",
    name: "Dr. Chakradhar Reddy",
    title: "Physiotherapy Specialist",
    experience: "Orthopedic & Post-Surgical Rehabilitation"
  }
]

export function DoctorsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]" id="doctors">
       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[var(--color-on-surface)]">Our Core Medical Specialists</h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            Highly qualified consultants and surgeons committed to delivering top-tier medical protocols.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {filters.map((filter, index) => (
             <button 
                key={filter}
                className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  index === 0 
                  ? 'bg-[var(--color-primary)] text-white shadow-sm' 
                  : 'bg-white text-[var(--color-on-surface-variant)] hover:bg-[var(--color-secondary-bg)] hover:text-[var(--color-primary)] border border-[var(--color-border)]'
                }`}
             >
               {filter}
             </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
             <Card key={index} className="overflow-hidden flex flex-col items-center group">
               <div className="w-full aspect-[4/5] relative overflow-hidden bg-[var(--color-surface-dim)]">
                 <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                 />
               </div>
               <div className="p-6 md:p-8 w-full text-center bg-white flex-grow flex flex-col justify-center">
                 <h3 className="text-lg md:text-xl font-semibold mb-1 text-[var(--color-on-surface)]">{doctor.name}</h3>
                 <p className="text-[var(--color-primary)] text-sm font-medium mb-3">{doctor.title}</p>
                 <div className="flex items-center justify-center text-[var(--color-on-surface-variant)] text-xs md:text-sm font-medium gap-1.5 mt-auto">
                   <BadgeCheck className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-primary)] flex-shrink-0" />
                   <span className="text-left line-clamp-2 md:line-clamp-none">{doctor.experience}</span>
                 </div>
               </div>
             </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button variant="outline" size="lg" className="border-2 font-semibold">View Active On-Duty Consultants</Button>
        </div>
      </div>
    </section>
  )
}
