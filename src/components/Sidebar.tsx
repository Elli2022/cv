import Image from "next/image";

const skills = [
  "HTML5",
  "CSS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Tailwind",
  "PHP",
  "MongoDB Atlas",
  "MySQL",
  "Agile Methods",
  "Scrum",
  "Design & UX",
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-black text-white p-8">
      <div className="mb-4">
        <Image
          src="/images/portfolioFoto.jpg"
          alt="Eleonora Nocentini Sköldebrink"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold mb-4 text-[#bb9457]">
        TECHNICAL SKILLS
      </h3>
      <ul className="list-none space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">
            {skill}
          </li>
        ))}
      </ul>
      <div className="text-[#bb9457]">
        <h3 className="text-xl font-bold mb-4">CONTACT</h3>
          <p className="text-gray-300">0046-724272912</p>
          <p className="text-gray-300">Lilla Varvsgatan 21 D</p>
          <p className="text-gray-300">211 76 Malmö</p>
          <p className="text-gray-300">eleonora.nocentini@gmail.com</p>
      </div>
    </aside>
  );
};

export default Sidebar;
