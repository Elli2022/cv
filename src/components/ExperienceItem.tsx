//components/ExperienceItem.tsx

interface ExperienceProps{
    role: string;
    company: string;
    period: string;
    location: string;
    skills: string[];
}


const ExperienceItem: React.FC<ExperienceProps> = ({ role, company, period, location, skills }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 my-2">
            <h3 className="text-xl font-bold">{role} - {company}</h3>
            <p className="text-gray-600">{period} | {location}</p>
            <p className="text-gray-800 font-semibold">Skills:</p>
            <ul  className="list-disc list-inside">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceItem;