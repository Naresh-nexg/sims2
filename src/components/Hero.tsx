import { Button } from "@/src/components/ui/Button";
import {
  Phone,
  Clock,
  Calendar,
  MapPin,
  Globe,
  BedDouble,
  Users,
  Activity,
  Building2,
} from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[100vh] lg:min-h-[800px] flex items-center bg-white pt-24 pb-32"
      id="home"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://drive.google.com/thumbnail?id=10IBG67gsP4ew9iHnsBrg2h9i9lqTbMv5&sz=w2000"
          alt="Hospital Building"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Gradients to blend image cleanly with white */}
        {/* Desktop: fade from left */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full lg:w-[85%]" />
        {/* Mobile: fade from overlay */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/20" />
      </div>

      <div className="container relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex flex-col justify-center pb-20">
        <div className="max-w-2xl text-[var(--color-on-surface)]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded border border-[var(--color-teal)]/30 text-[var(--color-teal)] text-xs font-semibold tracking-wide uppercase bg-white/50 backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5" />
            24/7 Super-Speciality Care
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-[var(--color-primary)]">
              Advanced Healthcare with{" "}
            </span>
            <span className="text-[var(--color-teal)]">Compassion</span>
            <span className="text-[var(--color-primary)]"> & </span>
            <span className="text-[var(--color-teal)]">Excellence</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[var(--color-on-surface-variant)] mb-8 max-w-xl font-normal leading-relaxed">
            Bringing world-class medical expertise, a 120-bed advanced ICU, and
            cutting-edge diagnostic technology to the heart of Anantapur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              className="w-full sm:w-auto gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-6 text-base rounded-md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <a href="tel:+918554223222" className="w-full sm:w-auto block">
              <Button
                variant="outline"
                className="w-full h-full px-8 py-6 text-base rounded-md border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white gap-2 font-medium shadow-sm"
              >
                <Phone className="w-5 h-5" /> Emergency Care
              </Button>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <BedDouble
                className="w-7 h-7 text-[var(--color-teal)] mb-2"
                strokeWidth={1.5}
              />
              <div className="text-xl font-bold text-[var(--color-on-surface)]">
                100+
              </div>
              <div className="text-xs text-gray-500 mt-1">Beds</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <Users
                className="w-7 h-7 text-[var(--color-teal)] mb-2"
                strokeWidth={1.5}
              />
              <div className="text-xl font-bold text-[var(--color-on-surface)]">
                20+
              </div>
              <div className="text-xs text-gray-500 mt-1">Specialists</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <Activity
                className="w-7 h-7 text-[var(--color-teal)] mb-2"
                strokeWidth={1.5}
              />
              <div className="text-xl font-bold text-[var(--color-on-surface)]">
                24/7
              </div>
              <div className="text-xs text-gray-500 mt-1">Emergency</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <Building2
                className="w-7 h-7 text-[var(--color-teal)] mb-2"
                strokeWidth={1.5}
              />
              <div className="text-xl font-bold text-[var(--color-on-surface)]">
                Modern
              </div>
              <div className="text-xs text-gray-500 mt-1">Facilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Banner */}
      <div className="absolute bottom-0 translate-y-1/2 w-full z-30 px-4 sm:px-6 lg:px-16 pointer-events-none">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl shadow-[var(--color-primary)]/5 border border-gray-100 p-6 pointer-events-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="flex items-start gap-4 md:px-4">
                <MapPin className="w-6 h-6 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  D.No. 18/3A, Kalyanadurg Road, Near RTO Office, Anantapur,
                  Andhra Pradesh - 515001
                </p>
              </div>

              <div className="flex items-start gap-4 md:px-6 pt-4 md:pt-0">
                <Phone className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+918554284567"
                    className="text-base font-bold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] block"
                  >
                    08554 284 567
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    24/7 Emergency Care
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
                <Globe className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                <a
                  href="https://www.simsanantapur.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] truncate"
                >
                  www.simsanantapur.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
