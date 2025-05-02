import BlogSection from "@/components/ui/blog/BlogSection";
import EducationSection from "@/components/ui/education/EducationSection";
import ExperienceSection from "@/components/ui/experience/ExperienceSection";
import HeroSection from "@/components/ui/hero/HeroSection";
import SkillsSection from "@/components/ui/skills/SkillsSection";


const HomePage = () => {
  return (
    <div >
     <HeroSection/>
     <ExperienceSection/>
     <SkillsSection/>
     <EducationSection/>
     <BlogSection/>
     
    </div>
  );
};

export default HomePage;