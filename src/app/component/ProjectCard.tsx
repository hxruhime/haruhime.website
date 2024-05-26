import { Card, Image, CardBody } from "@nextui-org/react";

export type Project = {
    title       : string;
    link        : string;
    description : string;
    imageUrl    : string;
    language    : string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
            <Card isBlurred shadow="sm" className="bg-black rounded-xl shadow-lg max-w-md m-6">
                <CardBody className="">

                    <div className="text-white flex items-center space-x-4">

                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            height={128}
                            width={128}
                            className="rounded"
                        />

                        <div>
                            <h2 className={"text-lg"}><a href={project.link}>{project.title}</a></h2>
                            <p className="text-sm text-slate-400">{project.description}</p>
                        </div>

                    </div>
                </CardBody>
            </Card>
    );
};

// path: src/app/component/ProjectCard.tsx
