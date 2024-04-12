//components/ExperienceSection.tsx
import ExperienceItem from "./ExperienceItem";


    const experiences = [
        { 
            id: 1,
            role: "Frontend Developer Internship",
            company: "Convertor",
            period: "Feb 2024 - Apr 2024",
            location: "Malmö, Sweden",
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
            role: "Frontend Developer Intern",
            company: "Capace Media Group AB",
            period: "Nov 2023 - Feb 2024",
            location: "Malmö, Skåne, Sweden",
            skills: ["Git", "React.js", "WordPress", "Responsive Web Design", "CSS", "Databases", "GraphQL", "Version Control", "Tailwind", "TypeScript", "Problem Solving", "Node.js", "HTML5", "Next.js"] 
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