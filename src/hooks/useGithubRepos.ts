import { useEffect, useState } from "react";
import type { Project } from "../types/Project";

export const useGithubRepos = (projects: Project[]) => {
  const [reposData, setReposData] = useState<Record<string, Project>>({});

  useEffect(() => {
    projects.forEach((project) => {
        if (!project.source) return; // skip if no source

        const match = project.source.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) return; // skip if not a GitHub link

        const owner = match[1];
        const repo = match[2];

        // repo info
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => res.json())
        .then((repoData) => {
            // readme
            fetch(`https://api.github.com/repos/${owner}/${repo}/readme`)
            .then((res) => res.json())
            .then((readmeData) => {
              const readmeText = atob(readmeData.content);

              // languages
              fetch(`https://api.github.com/repos/${owner}/${repo}/languages`)
                .then((res) => res.json())
                .then((langData) => {
                  const total = Object.values(langData).reduce(
                    (sum: number, bytes) => sum + (bytes as number),
                    0
                  );

                  const languages = Object.entries(langData).map(
                    ([name, bytes]) => ({
                      name,
                      percentage: (
                        ((bytes as number) / total) *
                        100
                      ).toFixed(1) + "%",
                    })
                  );

                  setReposData((prev) => ({
                    ...prev,
                    [project.source as string]: {
                        title: repoData.name,
                        description: repoData.description,
                        image: repoData.open_graph_image_url,
                        details: readmeText,
                        date: repoData.created_at,
                        languages,
                        preview: project.preview, // unchanged
                        source: project.source,   // unchanged
                    },
                  }));
                });
            });
        })
        .catch((err) =>
            console.error(`Error fetching repo data for ${repo}:`, err)
        );
    });
  }, [projects]);

  return reposData;
}
