// import { RevealOnScroll } from "../RevealOnScroll"
// import { Helmet } from 'react-helmet-async';

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="w-full min-h-screen flex items-center justify-center px-4 py-10 md:py-20 md:px-0 overflow-x-hidden"
//     >
//       <Helmet>
//         <title>Shreya poojary: Portfolio</title>
//         <meta name="description" content="Explore Shreya's Portfolio." />
//         <meta name="keywords" content="Shreya, React, JavaScript, Developer, Portfolio, Projects" />
//       </Helmet>

//       <RevealOnScroll>
//         <div className="text-center z-10">
//           <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
//             Hi, I'm Shreya
//           </h1>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg md:text-xl">
//             A dedicated individual specializing in web development and problem-solving,
//             with a strong commitment to continuous learning and team collaboration.
//           </p>
//           <div className="flex flex-col md:flex-row justify-center gap-4">
//             <a
//               href="#project"
//               className="bg-blue-500 text-white py-4 md:py-3 px-6 w-full md:w-auto mb-4 md:mb-0 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)] text-xl md:text-3xl"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-4 md:py-3 px-6 w-full md:w-auto rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)] hover:bg-blue-500/10 text-xl md:text-3xl"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// }

import { RevealOnScroll } from "../RevealOnScroll"
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen flex items-center justify-center px-4 py-10 md:py-20 md:px-0 overflow-hidden"
    >
      <Helmet>
        <title>Shreya poojary: Portfolio</title>
        <meta name="description" content="Explore Shreya's Portfolio." />
        <meta name="keywords" content="Shreya, React, JavaScript, Developer, Portfolio, Projects" />
      </Helmet>

      <RevealOnScroll>
        <div className="w-full max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Shreya
          </h1>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg md:text-xl">
            A dedicated individual specializing in web development and problem-solving,
            with a strong commitment to continuous learning and team collaboration.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <a
              href="#project"
              className="bg-blue-500 text-white py-4 md:py-3 px-6 w-full md:w-auto rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)] text-xl md:text-3xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-4 md:py-3 px-6 w-full md:w-auto rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)] hover:bg-blue-500/10 text-xl md:text-3xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}