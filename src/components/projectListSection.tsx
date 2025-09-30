import type { Project } from "../types/project";
import { ProjectCard } from "./projectCard";

interface ProjectListSectionProps {
    projects: Project[];
}

export const ProjectListSection: React.FC<ProjectListSectionProps> = ({ projects }) => {
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <div className="grid gap-12">
                {projects.map((project, idx) => {
                    return (
                        <ProjectCard key={idx} project={project} />
                    );
                })}
            </div>
        </section>
    );
};
