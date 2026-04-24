export interface Project {
    id?: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    metric: string;
    links: {
        github?: string
        live?: string
    }
}
