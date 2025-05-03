import BlogSection from "@/components/ui/blog/BlogSection";
import ContactSection from "@/components/ui/contact/ContactSection";
import EducationSection from "@/components/ui/education/EducationSection";
import ExperienceSection from "@/components/ui/experience/ExperienceSection";
import HeroSection from "@/components/ui/hero/HeroSection";
import ProjectSection from "@/components/ui/project/ProjectSection";
import SkillsSection from "@/components/ui/skills/SkillsSection";
import { IProfile } from "@/types";


const HomePage = async() => {
  const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`);
  const data = await res.json();
  const profileData:IProfile=data.data;
  
  return (
    <div >
     <HeroSection profile={profileData}/>
     <ExperienceSection profile={profileData}/>
     <SkillsSection profile={profileData}/>
     <EducationSection profile={profileData}/>
     <ProjectSection/>
     <BlogSection/>
     <ContactSection profile={profileData}/>
    </div>
  );
};

export default HomePage;