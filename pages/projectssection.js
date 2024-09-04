"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "./projectcard";
import ProjectTag from "./projecttag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        imgUrl: "/images/projects/tech3.jpg",
        title: "Shoe App",
        description: "An intuitive shoe store app built with modern web technologies, offering users a seamless browsing experience, product filtering, and a secure checkout process.Integrated with user entication and orization.",
        tag: ["All", "MERN"],
        gitUrl: "https://github.com/Hage714/Shoe-App-MERN.git",
        previewUrl: "https://hage.com",
    },
    {
        id: 2,
        imgUrl: "/images/projects/tech4.jpg",
        title: "Recipe App",
        description: "A full-stack recipe app that allows users to explore, create, and share recipes. The app features a user-friendly interface for browsing recipes, adding new ones, and managing a personal collection.",
        tag: ["All", "MERN"],
        gitUrl: "https://github.com/Hage714/Recipe-App-MERN.git",
        previewUrl: "https://hage.com",
    },
    {
        id: 3,
        imgUrl: "/images/projects/tech5.jpg",
        title: "Bookstore Project",
        description:
            "An online bookstore application built using the MERN stack, featuring user entication, a shopping cart, and a seamless checkout process. Users can browse, search, and purchase books from a vast collection.",
        tag: ["All", "MERN"],
        gitUrl: "https://github.com/Hage714/Bookstore-MERN-App.git",
        previewUrl: "https://hage.com",
    },
    {
        id: 4,
        imgUrl: "/images/projects/tech6.jpg",
        title: "GYM Management API",
        description: "Developed a Gym Management API that streamlines member registration.The API supports secure entication, integrates with payment gateways, and provides real-time analytics for gym administrators.",
        tag: ["All", "Express"],
        gitUrl: "https://github.com/Hage714/GYM-Management-API.git",
        previewUrl: "https://hage.com",
    },
    {
        id: 5,
        imgUrl: "/images/projects/tech7.jpg",
        title: "Shopping List API",
        description: "Developed a RESTful API that allows users to create, read, update, and delete items. It's designed for seamless integration with front-end applications, providing endpoints for managing shopping lists.",
        tag: ["All", "Express"],
        gitUrl: "https://github.com/Hage714/Express-Shopping-List-App.git",
        previewUrl: "https://hage.com",
    },
    {
        id: 6,
        imgUrl: "/images/projects/tech8.jpg",
        title: "Events API Documentation",
        description: "An Events API that allows users to create, get, update and delete events. This API provides real-time updates for event schedules, making it a robust backend solution for event management applications",
        tag: ["All", "Express"],
        gitUrl: "https://github.com/Hage714/Express-Events-App.git",
        previewUrl: "https://hage.com",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    //filtering out project once selected
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <>
            <main className="flex min-h-screen flex-col bg-slate-300 w-full p-4">

                <Navbar />
                <div className="container mt-24 mx-auto px-12 py-4">

                    <section>
                        <h2 className="text-black text-center text-3xl font-bold mb-4 hover:underline hover:text-slate-500">
                            My Projects
                        </h2>
                        <div className=" flex flex-row justify-center items-center gap-2 py-5 ">
                            <ProjectTag
                                onClick={handleTagChange}
                                name="All"
                                isSelected={tag === "All"} className="text-black"
                            />
                            <ProjectTag
                                onClick={handleTagChange}
                                name="MERN"
                                isSelected={tag === "MERN"}
                            />
                            <ProjectTag
                                onClick={handleTagChange}
                                name="Express"
                                isSelected={tag === "Express"}
                            />
                        </div>

                        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                            {filteredProjects.map((project) => (
                                <motion.li
                                    key={project.id}
                                    variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
                                    transition={{ duration: 0.3, delay: project.id * 0.4 }}>
                                    <ProjectCard
                                        //key={project.id}
                                        imgUrl={project.imgUrl}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tag} // this is an array of strings that will be rendered as tags in the ProjectCard component
                                        gitUrl={project.gitUrl}
                                        previewUrl={project.previewUrl}
                                    />
                                </motion.li>
                            ))}
                        </ul>
                    </section>
                </div>

                <Footer />
            </main>
        </>
    );
};

export default ProjectsSection;
