import Head from 'next/head';
import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';
import Sidebar from '../components/Sidebar'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Eleonora Nocentini Sköldebrink's CV</title>
      </Head>
      <div className="flex min-h-screen">
        <Sidebar /> 
        <main className="flex-grow p-12">
          <Header />
          <ExperienceSection />
        </main>
      </div>
    </>
  );
}
