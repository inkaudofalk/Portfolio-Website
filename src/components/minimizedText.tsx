import type { ReactNode } from "react";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface MinimizedTextProps {
    children: ReactNode
    className?: string
    buttonHint?: string
}

export const MinimizedText : React.FC<MinimizedTextProps> = ({ children, className, buttonHint }) => {
    const [ noticeVisible, setNoticeVisible ] = useState(false);
    const id = useId();

    return (
        <span className={className}>
            <AnimatePresence initial={false}>
                {noticeVisible && (
                    <motion.span
                        key={`content-${id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className={`overflow-hidden block`}
                    >
                        {children}
                    </motion.span>
                )}
            </AnimatePresence>

            <button
              onClick={() => setNoticeVisible((v) => !v)}
              className="font-light cursor-pointer"
            >
              {(buttonHint ? buttonHint + " " : "") + (noticeVisible ? " verbergen <-" : "anzeigen <-")}
            </button>
        </span>
    )
};
