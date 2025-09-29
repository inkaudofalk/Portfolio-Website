import { Github } from "lucide-react";
import { btn_outlined, btn_primary } from "../styles/tailwind-patterns";
import { MinimizedText } from "./minimizedText";
import { dateParser } from "../utility/dateParser";
import { useGithubRepos } from "../hooks/useGithubRepos";
import type { Project } from "../types/Project";

interface ProjectListSectionProps {
    projects: Project[];
}

export const ProjectListSection: React.FC<ProjectListSectionProps> = ({ projects }) => {
    const reposData = useGithubRepos(projects);

    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <div className="grid gap-12">
                {projects.map((project, idx) => {
                    const repoData = project.source ? reposData[project.source] || {} : {};
                    return (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-950 
                            border border-gray-200 dark:border-gray-900 shadow-xl rounded-2xl 
                            overflow-hidden"
                        >
                            <img
                                src={project.image || repoData.image}
                                alt={project.title || repoData.title}
                                className="w-full"
                            />

                            <div className="p-6 space-y-4">

                                <div className="flex items-center flex-wrap">
                                    <h3 className="text-2xl font-semibold">
                                        {project.title || repoData.title}
                                    </h3>
                                    <span className="ml-3 font-normal text-sm opacity-50">
                                        {(project.languages || repoData.languages)?.map((l) => `${l.name} (${l.percentage})`).join(", ") || "N/A"}
                                    </span>
                                    <span className="ml-auto font-light text-ms opacity-50">
                                        {dateParser.cleanUpString(project.date || repoData.date || "N/A")}
                                    </span>
                                </div>
                                
                                <p className="leading-relaxed opacity-70">
                                    {project.description || repoData.description}
                                </p>
                                {(project.details || repoData.details) && 
                                    <MinimizedText buttonHint="Details" className="mb-6 leading-relaxed opacity-50">
                                        {project.details || repoData.details}
                                        <br />
                                        <br />
                                    </MinimizedText>
                                }

                                <div className="flex gap-4">
                                    {project.preview &&
                                        <a href={project.preview} target="_blank" className={btn_primary}>
                                            Web Preview
                                        </a>
                                    }
                                    {project.source &&
                                        <a href={project.source} target="_blank" className={btn_outlined}>
                                            <Github size={16} /> Source Code
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
