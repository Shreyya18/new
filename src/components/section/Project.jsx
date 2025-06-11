import { RevealOnScroll } from "../RevealOnScroll"

export const Project = () => {
    return <section id="project" className="min-w-max min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-xl md:text-2xl mr-20 ml-20 ">
            <h2 className="flex justify-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 0 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Interactive Data Explorer </h3>
                    <p className="text-gray-400 mb-4">Pokémon Explorer is an interactive web application that allows users to explore a list of Pokémon fetched dynamically from the PokeAPI. Users can search for Pokémon by name, filter them by type, and view detailed information such as their sprite, ID, and types.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Vite", "Tailwind CSS", "PokeApi"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center ">
                        <a href="https://interactive-data-explorer-nine.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">QR Code Generator</h3>
                    <p className="text-gray-400 mb-4">A React-based application that allows users to generate QR codes from text input and download them as images. Designed with a responsive layout, it ensures seamless usability across devices. A simple yet powerful tool for creating and saving QR codes efficiently.</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "HTML", "CSS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://qr-code-five-lac.vercel.app/" className="text-blue-400 hover:text-blue-300  transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">Stop Watch</h3>
                    <p className="text-gray-400 mb-4"> A React-powered stopwatch that lets users start, stop, and reset the timer with ease. It features lap functionality for recording multiple times and is designed with a responsive layout for smooth performance across devices. A simple yet effective time-tracking tool.</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "HTML", "CSS"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://stop-watch-iota-khaki.vercel.app/" className="text-blue-400 hover:text-blue-300  transition-colors my-4">View Project ➡️ </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-2xl font-bold mb-2 ">MovieLand</h3>
                    <p className="text-gray-400 mb-4">A React-based movie search app that lets users find movies by title and view details like the year of release and poster. Designed with a responsive layout, it ensures smooth navigation across devices, making movie discovery easy and engaging..</p>
                    <div  className="flex flex-wrap gap-2 mb-4">
                        {["React", "OMDB Api", "HTML", "CSS"].map((tech, key) => (
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