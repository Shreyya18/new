import { RevealOnScroll } from "../RevealOnScroll"

export const Project = () => {
    return <section id="project" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="flex justify-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 0 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Project1</h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque reprehenderit sint officia, reiciendis non rem nesciunt, placeat illo id dignissimos nemo inventore corrupti nobis praesentium eos dolorem. Unde, qui repellendus.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "next", "html"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center ">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Project1</h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate deserunt dolorum exercitationem est. Dolorem molestiae id eius saepe similique consequuntur quos excepturi ullam delectus eum, libero, ab corrupti dicta.</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "next", "html"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300  transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Project1</h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate deserunt dolorum exercitationem est. Dolorem molestiae id eius saepe similique consequuntur quos excepturi ullam delectus eum, libero, ab corrupti dicta.</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "next", "html"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300  transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Project1</h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate deserunt dolorum exercitationem est. Dolorem molestiae id eius saepe similique consequuntur quos excepturi ullam delectus eum, libero, ab corrupti dicta.</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "next", "html"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className=" hover:text-blue-300 text-blue-400 transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}