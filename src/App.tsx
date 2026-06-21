/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { NewsSection } from "./components/NewsSection"
import { AboutSection } from "./components/AboutSection"
import { StatsSection } from "./components/StatsSection"
import { PioneeringSection } from "./components/PioneeringSection"
import { DepartmentsSection } from "./components/DepartmentsSection"
import { DoctorsSection } from "./components/DoctorsSection"
import { FacilitiesSection } from "./components/FacilitiesSection"
import { FAQSection } from "./components/FAQSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <NewsSection />
        <AboutSection />
        <StatsSection />
        <PioneeringSection />
        <DepartmentsSection />
        <DoctorsSection />
        <FacilitiesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
