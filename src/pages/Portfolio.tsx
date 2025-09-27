import { Github } from "lucide-react";
import { motion } from "framer-motion";

import { btn_outlined, btn_primary } from "../styles/tailwind-patterns";
import { useTheme } from "../hooks/useTheme";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();

  const projects = [
    {
      title: "Projekt Eins",
      description: "bsptext.",
      image: "https://via.placeholder.com/600x300",
      preview: "#",
      source: "#",
    },
    {
      title: "Projekt Zwei",
      description: "bsptext.",
      image: "https://via.placeholder.com/600x300",
      preview: "#",
      source: "#",
    },
  ];

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black transition-colors">
      {/* Title Section */}
      <section className="relative h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Gradient Design */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 opacity-40 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Foreground Title */}
        <div className="relative flex-grow flex items-center justify-center">
          <h1 className="text-7xl md:text-9xl font-serif tracking-tight">
            Udo Falk.
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex justify-between items-end p-6 text-sm opacity-80">
          <span>mein portfolio. <span className="opacity-30 font-light">von sept 25</span></span>
          <button
            onClick={() => toggleTheme()}
            className="border px-3 py-1 rounded-full"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Über Mich</h2>
        <p className="leading-relaxed opacity-80">
          beschreibung
        </p>
      </section>

      {/* Work Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12">My Work</h2>
        <div className="grid gap-12">
          {projects.map((project, idx) => (

            <div
              key={idx}
              className="bg-white dark:bg-gray-950 
                border border-gray-200 dark:border-gray-900 shadow-xl rounded-2xl 
                overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full" />

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold dark:text-white">{project.title}</h3>
                <p className="opacity-80 dark:opacity-80 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.preview} target="_blank" className={btn_primary}>
                    Web Preview
                  </a>

                  <a href={project.source} target="_blank" className={btn_outlined}>
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>

            </div>


          ))}
        </div>
      </section>
    </div>
  );
}
