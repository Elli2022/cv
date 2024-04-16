const Header: React.FC = () => {
    return ( 
        <div className="p-5 text-center">
            <h1 className="text-3xl font-bold text-[#bb9457] text-transform: uppercase;">
                Eleonora Nocentini Sköldebrink
            </h1>
            <h2 className="text-black font-bold">
                Frontend (Full Stack) Developer
            </h2>
            <p className="text-black">
                | HTML5 | Javascript | CSS | Typescript | React.js | Next.js | Node.js | MongoDB | Express | Redis
            </p>
            <h3 className="text-lg font-bold text-[#bb9457] text-left">MY STORY</h3>
            <p className="text-black text-left">
                I worked for several years in security at the Swedish Prison and Probation Service 
                until I took a course in cybersecurity and programming and realized that I enjoyed 
                it and have always loved problem-solving. Therefore, I decided to make a career change.
            </p>
        </div>
    )
}

export default Header;
