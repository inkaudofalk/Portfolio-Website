import { useState } from "react";
import socials from "../data/socials.json";
import { Egg } from "lucide-react";
import { motion } from "framer-motion";

export const FooterSection : React.FC = () => {
    const [contactClicks, setContactClicks] = useState(0);

    return (
        <footer className="mt-40">
            <p className="animate-bounce text-sm opacity-50 text-center font-light">
                {contactClicks === 0 ? "(°o°) { danke fürs lesen}" 
                : contactClicks === 1 ? "/(°c°)\\ ? { ei was ist dein geheimnis}" 
                : contactClicks === 2 ? "\\(°O°)/ ! { welch eine wendung}" 
                : `!(°o°)${contactClicks%2 === 0 ? "/" : "_"}  { die email ist in die zwischenablage kopiert worden}` 
                }
            </p>
            <div className="relative bg-transparent mt-1 border-t border-gray-300 dark:border-gray-700">
                <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    
                    <div className="text-sm opacity-70 text-center md:text-left">
                        © {new Date().getFullYear()} Udo Falk. Alle Rechte vorbehalten.
                        <br />
                        Designed & Entwickelt mit Freude.
                    </div>

                    <motion.div className="flex space-x-6 text-sm opacity-80" layout>
                        <a
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            GitHub
                        </a>
                        <button
                            className={`hover:text-blue-500 transition-colors cursor-pointer ${contactClicks === 1 && "animate-pulse"}`}
                            onClick={() => {
                                setContactClicks(contactClicks + 1);
                                if (contactClicks > 2) {
                                    navigator.clipboard.writeText(socials.email).catch((err) => {
                                        alert("Fehler beim Kopieren der E-Mail-Adresse: " + err);
                                    });
                                }
                            }}
                        >
                            {
                                contactClicks === 0 ? "Kontakt" 
                                : contactClicks === 1 ? <Egg size={16} className="inline-block mb-0.5"/> 
                                : socials.email
                            }
                        </button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};