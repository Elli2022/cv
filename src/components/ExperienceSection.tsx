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
          {
            id: 6,
            role: "Coordinator for Detention Plans",
            company: "Kriminalvården",
            period: "June 2018 - April 2020",
            location: "Malmö",
            description: "In my role as a Coordinator for Detention Plans at Kriminalvården, I worked closely with clients to develop individual detention plans, ensuring they met identified needs through timely coordination and collaboration with various stakeholders. My responsibilities included engaging in dialogues with clients to personalize plans, collaborating with other coordinators to implement necessary interventions, compiling and conveying situational reports to decision-making bodies, and participating in local, regional, and national forums on detention planning.",
            skills: ["Problem Solving", "Client Relations", "Project Coordination", "Communication"]
          },
          {
            id: 7,
            role: "Alternate Board Member",
            company: "Bostadsrättsföreningen Leka",
            period: "June 2020 - December 2020",
            location: "Malmö, Skåne, Sweden",
            description: "As an Alternate Board Member at Bostadsrättsföreningen Leka, I stepped in at board meetings whenever a regular member was unable to attend. My role ensured continuity and the smooth running of governance processes, providing reliable support and decision-making presence.",
            skills: ["Governance", "Decision Making", "Supportive Leadership"]
          },
          {
            id: 8,
            role: "Insurance Advisor",
            company: "Trygg-Hansa",
            period: "Feb 2017 - Sep 2017",
            location: "Malmö, Skåne, Sweden",
            description: "As an Insurance Advisor at Trygg-Hansa, I focused on customer service, insurance advising, and sales to corporate clients. Key aspects of my role included resilience, maintaining a positive outlook and quickly overcoming setbacks. I emphasized efficiency and reliability in my work, ensuring tasks were completed thoroughly and on time while adhering to all relevant regulations and processes. My approach was customer-oriented, aimed at providing excellent service by actively listening to and engaging with clients. I was driven and motivated by challenging, measurable goals and found satisfaction in achieving set objectives. Additionally, I thrived in a team environment, contributing to group cohesion and readily seeking help when needed.",
            skills: ["Customer Service", "Sales", "Insurance Advising", "Resilience", "Efficiency", "Reliability", "Client Engagement", "Goal-Oriented", "Teamwork"]
          },
          {
            id: 9,
            role: "Warehouse Employee",
            company: "Uniflex",
            period: "Apr 2014 - Jan 2015",
            location: "Lund, Skåne, Sweden",
            description: "As a Warehouse Employee contracted by Uniflex for Frigoscandia in Staffanstorp, I engaged in various warehouse operations including order picking, packing, and forklift driving. The part-time role demanded high levels of engagement, responsibility, and a strong work ethic. It required me to work independently and take initiative in a fast-paced environment. Throughout my tenure, I developed key skills such as stress tolerance, a competitive spirit, responsibility, and punctuality.",
            skills: ["Warehouse Operations", "Forklift Operation", "Inventory Control", "Stress Tolerance", "Competitiveness", "Responsibility", "Punctuality"]
          },
          {
            id: 10,
            role: "Bartender",
            company: "Etagegruppen",
            period: "Aug 2009 - Aug 2010",
            location: "Malmö, Skåne, Sweden",
            description: "During my tenure as a Bartender with Etagegruppen, I provided high-quality beverage service in a fast-paced entertainment environment. My responsibilities included mixing and serving both classic and innovative cocktails, managing bar inventory, and maintaining a clean and organized bar area. I honed my customer service skills, adapting to diverse customer needs and ensuring a satisfactory dining and social experience. My role required excellent communication skills, a thorough understanding of mixology, and the ability to work effectively under pressure.",
            skills: ["Customer Service", "Mixology", "Inventory Management", "Communication", "Stress Management"]
          },
          {
            id: 11,
            role: "Sales Associate",
            company: "Foot Locker EMEA",
            period: "Jan 2008 - Jun 2008",
            location: "Copenhagen, Capital, Denmark",
            description: "As a Sales Associate at Foot Locker EMEA, I employed various sales techniques to enhance customer engagement and boost store performance. My responsibilities included creating a welcoming store environment, maintaining orderly store conditions, assisting customers efficiently with their purchases, unpacking and organizing new stock, and building positive relationships with both customers and team members. The role demanded a high degree of customer service orientation and the ability to follow established routines.",
            skills: ["Sales Techniques", "Customer Service", "Team Collaboration", "Inventory Management", "Store Maintenance"]
          },
          {
            id: 12,
            role: "Waitstaff",
            company: "T. Tholstrup Catering ApS",
            period: "Apr 2007 - Dec 2007",
            location: "Copenhagen, Capital, Denmark",
            description: "I began working part-time as Waitstaff at T. Tholstrup Catering ApS during my final year of high school at ProCivitas. In this role, I served customers across the company's various restaurants located in central Copenhagen. The job required excellent customer service skills, endurance to manage long shifts, the ability to upsell effectively, and the flexibility to handle diverse service situations. Working in a team environment, I developed a strong capability to adapt and collaborate under pressure, ensuring customer satisfaction and smooth operation.",
            skills: ["Customer Service", "Upselling", "Teamwork", "Flexibility", "Endurance"]
        }
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