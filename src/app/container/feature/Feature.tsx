'use client';

import React, { useEffect, useState } from "react";

import { ProjectCard }                from "@component/ProjectCard";

const PROJECTS_URL = 'https://raw.githubusercontent.com/hxruhime/assets/main/json/projects.json';

const Feature = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(PROJECTS_URL)
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return (
        <section className="section-wrapper" id="projects">

            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                {projects.map((project) => {

                    // @ts-ignore
                    return <ProjectCard key={project.title} project={project}/>
                })}
            </div>
        </section>
    );
}

export default Feature;