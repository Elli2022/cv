//src/app/page.tsx

import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';
import Sidebar from '../components/Sidebar'; 
import EducationSection from '@/components/EducationSection';

export default function Home() {
  return (
    <>
      
        <title>Eleonora Nocentini Sköldebrink CV</title>
      
      <div className="flex min-h-screen">
        <Sidebar /> 
        <main className="flex-grow p-12">
          <Header />
          <ExperienceSection />
          <EducationSection />
        </main>
      </div>
    </>
  );
}
