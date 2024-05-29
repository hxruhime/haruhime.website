import { Card, CardBody, Badge, Link } from "@nextui-org/react";

export type Project = {
    title       : string;
    link        : string;
    description : string;
    language    : string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card isBlurred shadow="lg" className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl max-w-md m-2 sm:m-4 md:m-6 lg:m-6 p-4 sm:p-4 md:p-6 lg:p-6 transform transition-transform hover:scale-105">
            <CardBody className="flex flex-col space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-6">
                <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-4 lg:space-x-4">
                    <div className="flex-shrink-0 w-12 sm:w-12 md:w-16 lg:w-16 h-12 sm:h-12 md:h-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">
                        {project.title.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white">
                            <Link href={project.link} isExternal className="hover:underline">
                                {project.title}
                            </Link>
                        </h2>
                        <p className="text-sm sm:text-sm md:text-md lg:text-md text-gray-400 mt-2">{project.description}</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Badge color="secondary" variant="flat" className="text-white">
                        {project.language}
                    </Badge>
                </div>
            </CardBody>
        </Card>
    );
};

// path: src/app/component/ProjectCard.tsx
