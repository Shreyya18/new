import { RevealOnScroll } from "../RevealOnScroll"


export const Contact=()=>{
    return <section id="contact" className="w-screen h-fit flex items-center justify-center py-10 px-4 md:py-20 md:px-0 overflow-hidden">
        <RevealOnScroll>
            <div className="flex flex-col justify-center items-center w-full max-w-screen-md mx-auto md:w-screen border-2 border-blue-500/30  rounded-xl p-6 bg-blue-500/50">
                <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>

                <a href="mailto:shreyapoojary251@gmail.com" className="  w-fit p-3   border border-white/10 rounded   text-blue-900 font-bold transition focus:outline-none focus:border-blue-500 focus:bg-blue-5500/5 bg-white hover:bg-blue-200">shreyapoojary251@gmail.com</a>
                {/* <form className=" space-y-6">
                    <div className="relative">
                        <input type="text" id="name" name="name" required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-5500/5 " placeholder="Name..."/>
                    </div>

                    
                    <div className="relative">
                        <input type="email" id="email" name="email" required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-5500/5 " placeholder="example@gmail.com"/>
                    </div>


                    <div className="relative">
                        <textarea id="message" name="message" required  
                        rows={5}className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-5500/5 " placeholder="Your Message..."/>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:trnslate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                    ">
                        Send Message
                    </button>

                </form> */}
            </div>
        </RevealOnScroll>
    </section>
}