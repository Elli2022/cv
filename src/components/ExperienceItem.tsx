// components/ExperienceItem.tsx

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
  }
  
  const ExperienceItem: React.FC<ExperienceProps> = ({ role, company, period, location, description, skills }) => {
    return (
        <div className="mb-12 bg-white p-4 shadow rounded">
        <h3 className="text-xl font-bold mb-3">{role} - {company}</h3>
        <p className="text-gray-600 mb-1">{period} | {location}</p>
        <p className="text-gray-800 mb-5">{description}</p>
        <p className="text-gray-800 font-semibold">Skills:</p>
        <ul className="list-disc list-inside">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    )
  }
  
  export default ExperienceItem;
  