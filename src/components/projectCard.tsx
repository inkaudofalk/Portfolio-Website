import type { Project } from "../types/project";
import { Github } from "lucide-react";
import { btn_outlined, btn_primary } from "../styles/tailwind-patterns";
import { MinimizedText } from "./minimizedText";
import { dateParser } from "../utility/dateParser";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="bg-white dark:bg-gray-950 
            border border-gray-200 dark:border-gray-900 shadow-xl rounded-2xl 
            overflow-hidden"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full"
            />

            <div className="p-6 space-y-4">

                <div className="flex items-center flex-wrap">
                    <h3 className="text-2xl font-semibold">
                        {project.title || "title:N/A"}
                    </h3>
                    <span className="ml-3 font-normal text-sm opacity-50">
                        {project.languages?.map((l) => `${l.name} (${l.percentage})`).join(", ") || "languages:N/A"}
                    </span>
                    <span className="ml-auto font-light text-ms opacity-50">
                        {dateParser.cleanUpString(project.date || "date:N/A")}
                    </span>
                </div>
                
                <p className="leading-relaxed opacity-70">
                    {project.description || "No description available."}
                </p>
                {project.details && 
                    <div className="mb-6 ">
                    <MinimizedText buttonHint="Details" className="leading-relaxed opacity-50">
                        {project.details}
                        <br />
                        <br />
                    </MinimizedText>
                    </div>
                }

                <div className="flex gap-4">
                    {project.preview &&
                        <a href={project.preview} target="_blank" rel="noopener noreferrer" className={btn_primary}>
                            Web Preview
                        </a>
                    }
                    {project.source &&
                        <a href={project.source} target="_blank" rel="noopener noreferrer" className={btn_outlined}>
                            <Github size={16} /> Source Code
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}