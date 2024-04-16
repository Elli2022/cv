// components/EducationSection.tsx
import EducationItem from "./EducationItem";

const educations = [
    {
        id: 1,
        school: "Grit Academy",
        degree: "Front End Web Developer",
        fieldOfStudy: "Web Development",
        period: "Aug 2022 - June 2024",
        location: "Malmö",
        description: "Grit Academy is a vocational college located in central Malmö offering programs in B2B sales, web development, and purchasing. The program spans two years and amounts to 400 YH points, with an opportunity for a 20-week LIA (Learning in Action) placement within the industry.",
        courses: [
          "HTML and CSS",
          "Javascript 1",
          "Javascript 2",
          "Javascript 3",
          "Agile Project Management",
          "Backend and Database Management",
          "Design and UX",
          "Version Control",
          "The Consultant Role",
          "LIA 1 + LIA 2 (Internship 1 & 2)",
          "Thesis Work",
          
        ],
        skills: [
          "Responsive Web Design",
          "Problem Solving",
          "Express.js",
          "MySQL",
          "MongoDB",
          "IT",
          "Object-Oriented Programming (OOP)",
          "User Experience (UX)",
          "TypeScript",
          "JavaScript",
          "CSS",
          "Databases",
          "HTML",
          "Web Development",
          "Git",
          "Agile Methods",
          "Version Control",
          "Programming",
          "Redis"
        ]
      },
      {
        id: 2,
        school: "Komvux",
        degree: "Course Certificate Java",
        fieldOfStudy: "Programming 1 in Java",
        period: "March 2022 - May 2022",
        location: "Distance Learning with Mandatory Onsite Sessions",
        description: "This course was conducted remotely over 10 weeks alongside my job, but included mandatory onsite sessions at the school. The curriculum covered key areas of Java programming including sequential programming, the language’s fundamental data types, predefined structures, rules, and syntax. Topics also encompassed programming language development traditions and trends, problem solving and structuring, control structures such as sequence, selection, and iteration, basics of classes, objects, attributes, and methods, variable and constant visibility and lifespan, simple algorithms for tasks like searching or sorting, implementations of data structures such as arrays, lists, or tree structures, debugging source code, exception handling, and common requirements for runtime environments and operating systems.",
        courses: [
          "Sequential Programming in Java",
          "Fundamentals of Data Types and Structures",
          "Control Structures",
          "Classes, Objects, and Methods",
          "Visibility and Lifetime of Variables and Constants",
          "Simple Algorithms",
          "Data Structure Implementations",
          "Debugging and Exception Handling",
          "Runtime Environments and Operating Systems"
        ],
        skills: [
          "Java",
          "Problem Solving",
          "Algorithm Design",
          "Data Structures",
          "Debugging",
          "Exception Handling",
          "Object-Oriented Programming"
        ]
      },
      {
        id: 3,
        school: "Företagsuniversitetet",
        degree: "Cybersecurity, IT",
        fieldOfStudy: "Cybersecurity",
        period: "Oct 2021 - Jan 2022",
        location: "Mixed (Onsite and Remote)",
        description: "This 10-week course was designed for security and information security managers across various organizations, such as security chiefs and coordinators. It focused on understanding threats, laws, and cybersecurity methodologies.",
        courses: [
            "Threat Analysis",
            "Cybersecurity Laws and Regulations",
            "Methodologies and Work Approaches in Cybersecurity",
            "Secure Ecosystems and Supply Chains",
            "Systematic Work with Cybersecurity",
            "Risk Analysis",
            "Incident Classification and Categorization",
            "Crisis Management"
        ],
        skills: [
            "Systematic Security Work",
            "Risk Analysis",
            "Incident Handling",
            "Crisis Management",
            "Cybersecurity",
            "Compliance with Security Frameworks",
            "Security in Development Processes"
        ]
    },
    {
        id: 4,
        school: "Lund University",
        degree: "Extended Legal Introduction Course",
        fieldOfStudy: "Law",
        period: "Sep 2020 - Nov 2020",
        location: "Lund, Sweden",
        description: "The Extended Legal Introduction Course (UJIK) offers a comprehensive overview of various legal fields. It's more detailed than the basic JIK course, running full-time over 10 weeks during the autumn term, studied alongside full-time work.",
        courses: [
            "Overview of Legal Systems",
            "Introduction to Various Legal Fields"
        ],
        skills: [
            "Legal Analysis",
            "Understanding of Legal Frameworks"
        ]
    },
    {
        id: 5, 
        school: "Lund University",
        degree: "Bachelor of Science (B.Sc.) in Service Management, Organization & Leadership",
        fieldOfStudy: "Service Management, Organization & Leadership",
        period: "Aug 2011 - Dec 2014",
        location: "Lund, Sweden",
        description: "The Bachelor's program in Service Management provided extensive knowledge in organization, leadership, economics, and marketing, tailored for service-oriented industries. It focused on developing skills for customer-centric work, building customer relationships, and understanding consumer behavior. The program also covered staff strategy development and sustainable leadership, enhancing my ability to comprehend the integral parts of a service operation.",
        courses: [
            "Management, Control, and Development of Operations",
            "Accounting and Financial Management",
            "Leadership & Followership",
            "Marketing",
            "Organizational Behavior & HR Management",
            "Business Management Tools"
        ],
        skills: [
            "Customer Relationship Management",
            "Consumer Behavior Analysis",
            "Leadership",
            "Sustainable Leadership Practices",
            "Organizational Development",
            "Marketing and Financial Strategies"
        ]
    },
    {
        id: 6, 
        school: "Malmö University",
        degree: "Civil Engineering - Project and Production Management, Construction and Civil Engineering",
        fieldOfStudy: "Project and Production Management in Construction and Civil Engineering",
        period: "Aug 2010 - Dec 2014",
        location: "Malmö, Sweden",
        description: "The Civil Engineering program at Malmö University was developed in close collaboration with the industry, offering three specializations reflecting key players in the building process: Engineering and Architecture (architectural consulting), Construction Technology (technical consulting), and Project and Production Management (contracting). The Project and Production Management specialization provided in-depth knowledge on production management in the execution phase, primarily focusing on production planning and quality and environmental management. The program also enabled me to develop basic skills in contract law during contract writing.",
        courses: [
            "Production Planning",
            "Quality and Environmental Management",
            "Contract Law",
            "Technical Consulting in Construction",
            "Architectural Consulting"
        ],
        skills: [
            "Project Management",
            "Production Planning",
            "Environmental and Quality Control",
            "Legal Aspects of Contracting",
            "Technical and Architectural Consulting"
        ]
    },
    {
        id: 7,  
        school: "Grythyttans Bartenderskola",
        degree: "Bartender Certification",
        fieldOfStudy: "Bartending",
        period: "June 2009 - July 2009",
        location: "Loka Brunn, Grythyttan, Sweden",
        description: "Grythyttans Bartenderskola offers a three-week bartender training in central Sweden at Loka Brunn, Grythyttan. The course provided both theoretical and practical knowledge essential for confidence and safety behind the bar. The training emphasized quality in cocktail mixing and customer service. It was taught by experienced instructors, including Carmen Villar Mir de Berg, known for her expertise in style and etiquette.",
        courses: [
            "Cocktail Mixing Techniques",
            "Customer Service Excellence",
            "Bar Management",
            "Style and Etiquette in Hospitality"
        ],
        skills: [
            "Mixology",
            "Customer Interaction",
            "Bar Etiquette",
            "Drink Presentation"
        ]
    },
    {
        id: 8, 
        school: "Malmö University",
        degree: "Foundation Year in Science and Technology",
        fieldOfStudy: "Science and Technology",
        period: "Aug 2008 - June 2009",
        location: "Malmö, Sweden",
        description: "The Foundation Year in Science and Technology at Malmö University is a preparatory course designed for students aspiring to enter engineering fields in technology, mathematics, or science but lack the necessary qualifications. This one-year program allows students to improve their grades and gain the eligibility required to apply for their desired undergraduate programs.",
        courses: [
            "Introductory Mathematics",
            "Basic Physics",
            "Introductory Chemistry",
            "Engineering Fundamentals"
        ],
        skills: [
            "Matlab"
        ]
    },
    {
        id: 9,  
        school: "ProCivitas",
        degree: "High School Diploma, Business Administration",
        fieldOfStudy: "Business Administration",
        period: "Aug 2004 - June 2007",
        location: "Sweden",
        description: "ProCivitas' business program with a focus on economics provided a comprehensive education centered around entrepreneurship, business, and commerce. The program equipped me with in-depth knowledge in business economics, covering key areas such as marketing, accounting, and cost calculation. The leadership and organization course imparted insights into various organizational methods and practical tools for effective leadership tailored to my leadership style.",
        courses: [
            "Marketing",
            "Accounting",
            "Cost Calculation",
            "Leadership and Organization"
        ],
        skills: [
            "Strategic Marketing",
            "Financial Accounting",
            "Cost Management",
            "Leadership"
        ]
    }
    
    
    
    
    

    
      
    
];

const EducationSection: React.FC = () => {
  return (
    <div className="my-5 text-black">
      <h2 className="text-2xl font-semibold text-White-800">Education</h2>
      {educations.map(edu => (
        <EducationItem key={edu.id} {...edu} />
      ))}
    </div>
  );
}

export default EducationSection;
