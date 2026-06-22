import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Reddy",
    role: "Patient - Cardiology",
    content:
      "The care I received at SIMS during my heart procedure was exceptional. The doctors were very comforting and the 24/7 ICU gave my family peace of mind.",
    rating: 5,
    image:
      "https://drive.google.com/thumbnail?id=1yT0J9YXgYJaLf6jWT2-PVu2hUg3vMDUZ&sz=w200",
  },
  {
    id: 2,
    name: "Sunitha Sharma",
    role: "Patient - Orthopedics",
    content:
      "My knee replacement surgery was handled beautifully. The physiotherapy team helped me walk again within days. Extremely grateful for their dedication.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "K. Venkatesh",
    role: "Patient - Emergency Care",
    content:
      "We rushed my father here in the middle of the night. The emergency response team was incredibly fast and professional. They saved his life.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 4,
    name: "Lakshmi Narayana",
    role: "Patient Family",
    content:
      "The neonatal care unit is world-class. Our premature baby was in the safest hands possible. Highly recommend this hospital for maternity and pediatric care.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-[var(--color-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-on-surface)] tracking-tight">
            Patient Success Stories
          </h2>
          <p className="text-[var(--color-on-surface-variant)] text-base md:text-lg">
            Hear what our patients and their families have to say about their
            experience at SIMS Healthcare.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
            <Quote className="absolute top-6 right-6 md:top-10 md:right-10 text-[var(--color-primary)]/5 w-20 h-20 md:w-32 md:h-32 transform rotate-180" />

            <div className="min-h-[220px] flex items-center justify-center relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-lg md:text-xl w-full"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 md:w-6 md:h-6 fill-[#D4A017] text-[#D4A017]"
                        />
                      ),
                    )}
                  </div>

                  <p className="text-[var(--color-on-surface)] leading-relaxed italic mb-8 max-w-3xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mb-4 shadow-sm border-2 border-white ring-2 ring-[var(--color-primary)]/10"
                    />
                    <h4 className="font-bold text-[var(--color-on-surface)] text-lg mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-[var(--color-teal)]/10 text-[var(--color-teal)] rounded-full text-xs font-semibold uppercase tracking-wider">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[var(--color-primary)] w-8"
                    : "bg-gray-300 hover:bg-[var(--color-primary)]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
