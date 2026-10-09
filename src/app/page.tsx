import { portfolio } from "@/content/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { profile, about, skills, experience, projects, education } = portfolio;

  return (
    <>
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <TechMarquee skills={skills} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <ContactSection profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
