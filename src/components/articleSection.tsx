import type { ReactNode } from "react";

interface ArticleSectionProps {
    title: string;
    children: ReactNode;
}

export const ArticleSection : React.FC<ArticleSectionProps> = ({ title, children }) => {
    return (
        <section className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="leading-relaxed opacity-80">
                {children}
            </p>
        </section>
    )
};