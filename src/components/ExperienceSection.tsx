//components/ExperienceSection.tsx
import ExperienceItem from "./ExperienceItem";


    const experiences = [
            { 
                id: 1,
                role: "Frontend Developer Internship",
                company: "Convertor",
                period: "Feb 2024 - Apr 2024",
                location: "Malmö, Sweden",
                description: "Since February 2024, I've been deepening my frontend development skills through my second internship at Convertor in Malmö, Sweden. This opportunity has broadened my technical toolkit to include CMS as Typo3, Storyblok and more advanced frameworks like Next.js, Nest.js and React.js, alongside expanding my understanding of PHP and databases. Embracing Agile methodologies, I've honed my project management and team collaboration skills. Working with technologies like Tailwind for styling, Git for version control, and Node.js for server-side scripting has been pivotal in enhancing my ability to create responsive, user-friendly websites. This experience is crucial, consolidating my career path in tech with hands-on, diverse project involvement.",
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Tailwind",
                  "PHP",
                  "Wordpress",
                  "Git",
                  "Version Control",
                  "Github",
                ]      
              },
        {
            id: 2,
            role: "Frontend Developer Internship",
            company: "Capace Media Group AB",
            period: "Nov 2023 - Feb 2024",
            location: "Malmö, Skåne, Sweden",
            description:"During my internship, I embarked on developing a website utilizing JAMstack technology. This involved leveraging a headless CMS solution forthe using Graphql for efficient data fetching, and crafting a dynamic frontend experience with React.js/Next.js. These projects were not just about coding; they required me to think strategically about user experience and design, ensuring that the website was not only functional but also engaging and accessible." ,
            skills: ["Git", "React.js", "WordPress", "Responsive Web Design", "CSS", "Databases", "GraphQL", "Version Control", "Tailwind", "TypeScript", "Problem Solving", "Node.js", "HTML5", "Next.js"] 
        },
        {
            id: 3,
            role: "Security Officer",
            company: "Kriminalvården",
            period: "Apr 2021 - Oct 2022",
            location: "Malmö, Skåne, Sweden",
            description: "As a Security Officer at the detention center, I primarily dealt with security-related issues, reporting directly to the Chief Security Inspector and collaborating closely with other security functions. My responsibilities varied daily based on the needs of the facility, with a strong emphasis on cooperation with other staff as a support function to core operations. The role also entailed a diverse and independent workload, balancing operational and administrative tasks. Administrative duties included conducting investigations and making decisions regarding visitation and telephone permissions according to the Detention Center Act, as well as establishing and reviewing security assessments and updating the detention center's security instructions.",
            skills: ["Public Safety", "Security Operations", "Investigation", "Decision Making", "Regulatory Compliance"]
          },
          {
            id: 4,
            role: "Incident Manager",
            company: "Kriminalvården",
            period: "Apr 2021 - Oct 2022",
            location: "Malmö",
            description: "As an Incident Manager, I acted as the extension of the commanding officer during alerts, executing decisions made by the officer in charge during incidents. Comparable to a police operation manager, I was responsible for leading and distributing work at the incident site. I held command at the scene, taking orders only from the officer in charge, ensuring efficient and effective management of emergency situations.",
            skills: ["Crisis Management", "Public Safety", "Security Operations", "Leadership", "Incident Command", "Decision Making"]
          },
          {
            id: 5,
            role: "Camera Operator",
            company: "Kriminalvården",
            period: "Apr 2020 - Jun 2021",
            location: "Malmö, Skåne, Sweden",
            description: "As a Camera Operator in the detention center's surveillance center (BC), I played a crucial role in maintaining security and safety. My responsibilities included monitoring the detention center through camera systems and managing alarms across the facility using computerized communication systems. This role required a high level of focus and the ability to remain calm, stable, and controlled in stressful situations, such as when an alarm was triggered.",
            skills: ["CCTV Monitoring", "Alarm Management", "Crisis Management", "Communication", "Stress Management"]
          },

          
          
          
    ];
    



const ExperienceSection: React.FC = () => {
    return (
        <div className="my-5 text-black">
      <h2 className="text-2xl font-semibold text-White-800">Professional Experience</h2>
      {experiences.map(exp => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </div>
    )
}

export default ExperienceSection;