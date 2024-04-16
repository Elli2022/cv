// components/EducationItem.tsx

interface EducationProps {
    school: string;
    degree: string;
    fieldOfStudy: string;
    period: string;
    location: string;
    description: string;
    courses: string[];
    skills: string[];
  }
  
  const EducationItem: React.FC<EducationProps> = ({
    school,
    degree,
    fieldOfStudy,
    period,
    location,
    description,
    courses,
    skills
  }) => {
    return (
      <div className="mb-12 bg-white p-4 shadow rounded">
        <h3 className="text-xl font-bold mb-1">{degree} - {school}</h3>
        <h4 className="text-lg font-semibold mb-1">{fieldOfStudy}</h4>
        <p className="text-gray-600 mb-2">{period.split("-").map(yp => new Date(yp.trim()).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })).join(" - ")} | {location}</p>
        <p className="text-gray-800 mb-3">{description}</p>
        <h4 className="text-lg font-bold mb-2">Courses:</h4>
        <ul className="list-disc list-inside mb-4">
          {courses.map(course => <li key={course}>{course}</li>)}
        </ul>
        <h4 className="text-lg font-bold mb-2">Skills:</h4>
        <ul className="list-disc list-inside">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    );
  }
  
  export default EducationItem;
  