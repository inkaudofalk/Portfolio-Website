import { Github } from "lucide-react";
import { btn_outlined, btn_primary } from "../styles/tailwind-patterns";

interface Project {
    title: string;
    description: string;
    image: string;
    preview: string;
    source: string;
}

interface ProjectListSectionProps {
    projects: Project[];
}

export const ProjectListSection : React.FC<ProjectListSectionProps> = ({ projects }) => {
    return (
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
    );
}