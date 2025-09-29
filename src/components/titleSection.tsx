import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

interface TitleSectionProps {
    lastUpdated: string;
}

export const TitleSection : React.FC<TitleSectionProps> = ({ lastUpdated }) => {
    const { theme, toggleTheme } = useTheme();

    return (
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
            <span>mein portfolio. <span className="opacity-30 font-light">von {lastUpdated}</span></span>
            <button
                onClick={() => toggleTheme()}
                className="border px-3 py-1 rounded-full"
            >
                {theme === "light" ? "Dunkler Modus" : "Heller Modus"}
            </button>
            </div>
        </section>
    )
}