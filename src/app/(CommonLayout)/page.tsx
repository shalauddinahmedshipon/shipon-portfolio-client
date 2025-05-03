import BlogSection from "@/components/ui/blog/BlogSection";
import ContactSection from "@/components/ui/contact/ContactSection";
import EducationSection from "@/components/ui/education/EducationSection";
import ExperienceSection from "@/components/ui/experience/ExperienceSection";
import HeroSection from "@/components/ui/hero/HeroSection";
import ProjectSection from "@/components/ui/project/ProjectSection";
import SkillsSection from "@/components/ui/skills/SkillsSection";


const HomePage = () => {
  return (
    <div >
     <HeroSection/>
     <ExperienceSection/>
     <SkillsSection/>
     <EducationSection/>
     <ProjectSection/>
     <BlogSection/>
     <ContactSection/>
    </div>
  );
};

export default HomePage;