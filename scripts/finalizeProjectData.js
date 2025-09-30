import fs from "fs";
import projects from "../data/projects.json" with { type: "json" };

const finalizeProjectData = async () => {
    const finalProjects = [];

    for (const project of projects) {
        const finalData = { ...project };

        const match = project.source?.match(/github\.com\/([^\/]+)\/([^\/]+)/);

        if (match) {
            const owner = match[1];
            const repo = match[2];

            try {
                const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;

                // repo info
                const repoRes = await fetch(repoUrl);
                if (repoRes.ok) {
                    const repoData = await repoRes.json();

                    finalData.title = finalData.title || repoData.name;
                    finalData.description = finalData.description || repoData.description;
                    finalData.date = finalData.date || repoData.created_at;
                } else {
                    console.error(`Failed to fetch repo data for ${project.source}: ${repoRes.statusText}`);
                }

                // languages
                if (!finalData.languages) {
                    const langRes = await fetch(repoUrl + "/languages");
                    if (langRes.ok) {
                        const langData = await langRes.json();
                        const total = Object.values(langData).reduce(
                            (sum, bytes) => sum + bytes,
                            0
                        );
                        const languages = Object.entries(langData).map(([name, bytes]) => ({
                            name,
                            percentage: `${((bytes / total) * 100).toFixed(1)}%`,
                        }));

                        finalData.languages = languages;
                    } else {
                        console.error(`Failed to fetch languages for ${project.source}: ${langRes.statusText}`);
                    }
                }

                // readme / details
                if (!finalData.details) {
                    const readmeRes = await fetch(repoUrl + "/readme");
                    if (readmeRes.ok) {
                        const readmeData = await readmeRes.json();
                        finalData.details = atob(readmeData.content);
                    }
                    else {
                        console.error(`Failed to fetch readme for ${project.source}: ${readmeRes.statusText}`);
                    }
                }

            } catch (error) {
                console.error(`Failed to fetch repo data for ${project.source}: ${error}`);
            }
        }

        finalProjects.push(finalData);
    }

    fs.writeFileSync("src/data/projects.json", JSON.stringify(finalProjects, null, 4));
    console.log("Fetched and saved merged project data.");
};

fetchRepos();