import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { btn_outlined, btn_primary } from "../styles/tailwind-patterns";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  const [ noticeVisible, setNoticeVisible ] = useState(false);

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
          Hallo,
          <br />
          <br />
          Mein Name ist Udo Falk, ich
          {new Date().getMonth() === 11 ? 
            ` werde diesen Monat ${new Date().getFullYear() - 2006} ` : ` bin ${new Date().getFullYear() - 2007} `
          } 
          Jahre alt, und interessiere mich für alles was mit Technik, Netzwerken und vor allem der Programmierung zu tun hat.
          <br />
          <br />
          In meiner Freizeit arbeite ich eigenständig an persönlichen Projekten, die von simplen Modifikationen an eimem Headset, 
          über das aufsetzen eines Homeservers, bis hin zum Entwicklen von Webanwendungen und Desktop-Apps reichen.
          <br />
          <br />
          Dabei macht es mir Spaß mich immer neuen Herausforderungen zu stellen, dabei den Umgang mit neuen Technologien und Techniken zu lernen 
          und so meine Fähigkeiten zu verbessern und zu erweitern.
          <br />
          <br />
          Nach dem Absolvieren meines Abiturs im Juli
          {new Date().getFullYear() === 2025 ? " diesen Jahres " : new Date().getFullYear() === 2026 ? " letzten Jahres " : " 2025 "}
          habe ich mich nun dazu entschieden, in meine Leidenschaft für die Felder der Informatik zu investieren und diese zum Beruf zu machen.
        </p>
      </section>

      {/* Work Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Meine Projekte</h2>
        <p className="leading-relaxed opacity-80">

          Meine Leidenschaft für die Informatik begann schon früh in der Unterstufe des Gymnasiums mit meinem ersten Computer und meinem großen Interesse an Videospielen, 
          dem schon bald die Bestrebungen folgten, ein eigenes Computerspiel zu entwickeln.
          <br />
          Von diesem Punkt an tauchte ich mit der Zeit tiefer in die Welt der Desktop-Programmierung ein und drang auch in weitere Felder der Informatik vor.
          <br />
          <br />
          Seitdem arbeitete ich an zahllosen Programmierprojekten, wovon im folgenden ein kleiner Teil zu sehen ist.
          <br />
          <br />
          
          <span className="opacity-50 block max-w-2xl">
            <span className="font-bold"> Hinweis: </span>
            <br />
            <br />

            <AnimatePresence initial={false}>
              {noticeVisible && (
                <motion.span
                  key="hint-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden block"
                >
                  Viele Projekte dienten über die Jahre hauptsächlich dazu, meine technischen Fähigkeiten herauszufordern und weiterzuentwickeln.
                  <br />
                  <br />
                  Viele weitere verfolgten das simple Zeil, einfach etwas cooles zu programmieren.
                  <br />
                  <br />
                  Der Fokus lag daher nicht darauf, eine Produktionsfertige Anwendung zu entwickeln, weswegen ich darum bitte, die folgenden
                  Projekte eher als Work-In-Progress oder als Tech-Demo zu betrachten.
                  <br />
                  <br />
                </motion.span>
              )}
            </AnimatePresence>

            <button
              onClick={() => setNoticeVisible((v) => !v)}
              className="underline font-light"
            >
              {noticeVisible ? "verbergen" : "anzeigen"}
            </button>

          </span>
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
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
