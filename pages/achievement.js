"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "1",
    },
];

const Achievement = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-slate-300 w-full p-4 ">

            <Navbar />
                <div className="container flex flex-grow items-center justify-center min-h-screen mb-10 px-24 py-24 bg-[url('/images/tech12.jpg')] bg-cover bg-center bg-fixed">

            <div className="py-12 px-8 sm:py-16 sm:px-8 lg:px-16">
                <div className="border-slate-600 border rounded-md py-16 px-10 sm:px-12 flex flex-col items-center md:flex-row md:space-y-0 md:justify-between bg-white">
                    {achievementsList.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center mx-4 space-y-2"
                            >
                                <h2 className="text-black text-3xl sm:text-4xl font-bold flex flex-row">
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale="en-US"
                                        className="text-black text-3xl sm:text-4xl font-bold"
                                        configs={(_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tensions: 140 + (index + 1),
                                            };
                                        }}
                                    />
                                    {achievement.postfix}
                                </h2>
                                <p className="text-black text-base sm:text-lg">
                                    {achievement.metric}
                                </p>
                            </div>
                        );
                    })}
                </div>
                    </div>

            </div>
            <Footer />
            </main>

        </>
    );
};

export default Achievement;
