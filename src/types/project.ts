
export interface Language {
    name: string;
    percentage: string;
}

export interface Project {
    source?: string;
    image?: string;
    title?: string;
    description?: string;
    details?: string;
    languages?: Language[];
    date?: string;
    preview?: string;
}