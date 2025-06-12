import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "NextJS"];
    const ProgrammingLang=["C", "C++","Java", "Python", "SQL"];


    return <section id="about" className="w-screen h-fit flex items-center justify-center px-4 py-10 md:py-20 md:px-0 overflow-hidden">
        
        <RevealOnScroll>
        <div className=" w-full max-w-screen-md mx-auto text-center">
            
            <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 0 bg-clip-text text-transparent flex justify-center">About Me</h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 text-xl">
                    Adaptable web developer driven by growth, creativity, and problem-solving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="rounded-xl p-6 hover:translate-y-1 translate-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:translate-y-1 translate-all">
                        <h3 className="text-xl font-bold mb-4">Programming Language</h3>
                        <div className="flex flex-wrap gap-2">
                            {ProgrammingLang.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            <div className="gri grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-xl">
                        <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 trnsition-all ">
                        <h3 className="text-xl font-bold  mb-4 text-left">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
                            <li>
                                <strong>B.E - Computer Science & Engineering (2022-Present) </strong>
                                <p>
                                 AJ Institute of Engineerning & Technology | CGPA - 9.18 
                                </p>
                            </li>
                            <br />
                            <li>
                                <strong>Pre University - PCMC (2020-2022)</strong>
                                <p>St Sebastian PU College Ullal, Permannur | Percentage - 96.83
                                </p>
                            </li>
                            <br />
                            <li>
                                <strong>Secondary School (SSLC) (2019-2020)
                                </strong>
                                <p>Vidya Rathna English Medium School, Deralakatte | Percentage - 85</p>
                            </li>
                        </ul>
                        </div>
                        {/* <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 trnsition-all ">
                        <h3 className="text-xl font-bold  mb-4">🏫 Education</h3>
                        </div> */}
            </div>
        </div>
        </RevealOnScroll>
    </section>
}