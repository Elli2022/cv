import Head from 'next/head'; 
import Header from '../components/Header';  
import ExperienceItem from '@/components/ExperienceItem';
import ExperienceSection from '@/components/ExperienceSection';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Head>
        <title>Eleonora Nocentini Sköldebrink's CV</title>
      </Head>
      <div className="container mx-auto px-4">
        <Header />
        <ExperienceSection />
   
      </div>
    </main>
  );
}
