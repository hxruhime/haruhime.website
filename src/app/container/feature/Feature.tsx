import { Badge, Image } from "@nextui-org/react"
import { ProjectCard } from "@component/ProjectCard";

const projects = [
    {
        title: "nitrous-oxi.de",
        link: "https://nitrous-oxi.de",
        description: "Open source OSINT tool with an exposed RESTful API and web search panel written for research purposes.",
        imageUrl: "https://avatars1.githubusercontent.com/u/156565097",
        language: "TypeScript / Python"
    },
    {
        title: "yoshi.rest",
        link: "https://yoshi.rest",
        description: "Competitive fitness & lifestyle analytical platform with a web based dashboard and social integrations.",
        imageUrl: "https://avatars1.githubusercontent.com/u/168873145",
        language: "TypeScript"
    }
];

const Feature = () => {
    return (
        <div>
            {/* Projects Grid (2 wide)*/}
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Feature;

// path: src/app/container/feature/Feature.tsx
