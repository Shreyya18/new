export const Project = () => {
    return <section id="project" className="min-h-screen flex item-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 0 bg-clip-text text-transparent">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 hove">
                    <h3>Project1</h3>
                    <p>decsription</p>
                    <div>
                        {["React", "next", "html"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}