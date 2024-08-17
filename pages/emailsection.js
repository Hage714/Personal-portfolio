"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useRouter } from "next/router";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const router = useRouter(); // Initialize router 


    // users submitting the form and api req is sent
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/contact"; // stringified JSON data
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        // fetch request to send email
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        // response handling
        if (response.status === 200) {
            console.log("Message sent successfully!");
            setEmailSubmitted(true);
            // Redirect to the home page
            router.push('/');
        }
    };

    return (
        <>
            <main className="flex min-h-screen flex-col bg-slate-300 w-full p-4">

            <Navbar />
                <div className="container relative z-0 mt-18 mx-auto px-12 py-4">

            <section
                className="relative grid md:grid-cols-2 my-8 sm:my-5 py-24 gap-4"
                id="contact"
            >
                <div className="absolute inset-0 flex justify-center items-center"></div>
                <div className="z-10">
                            <h5 className="text-xl font-bold text-black my-2">Let us connect</h5>
                    <p className="mb-4 max-w-md text-black">
                        I’m always excited to connect with fellow developers, tech
                        enthusiasts, and potential collaborators. Whether you have a
                        question, want to discuss a project, or simply wish to network, feel
                        free to reach out. I’m open to new opportunities and enjoy exploring
                        innovative ideas and solutions.
                    </p>

                    <div className="socials flex flex-row gap-2 text-black ">
                        <a className="hover:text-blue-800"
                            href="https://github.com/Hage714"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={27} />
                        </a>
                        <a className="hover:text-blue-800"
                            href="https://www.linkedin.com/in/hage-woche-7152b51a1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={27} />
                        </a>
                                <a className="hover:text-blue-800"
                                    href="https://www.instagram.com/b_ihaaarrr_?igsh=cGpjNmh3eTc2dzI0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaSquareInstagram size={27} />
                                </a>
                    </div>
                    <div className=" mt-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 to-transparent rounded-full h-64 w-64 blur-lg"></div>
                </div>
                <div className="flex flex-col z-10">
                    <h5 className="text-xl font-bold text-black my-2">Get in touch</h5>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="">
                            <label htmlFor="name" className="text-black">
                                Your name
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                className="border-2 text-black border-gray-400 p-2 w-full"
                                required
                                placeholder="Name"
                            />
                        </div>
                        <div className="text-black">
                            <label htmlFor="email">Your Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="border-2 text-black border-gray-400 p-2 w-full"
                                placeholder="Email"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="text-black">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                className="border-2 text-black border-gray-400 p-2 w-full"
                                        placeholder="Let&apos;s talk about ..."
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" txt-xl bg-gradient-to-br from-blue-800 via-blue-500 to-blue-200 hover:from-slate-300 hover:via-slate-400 hover:to-slate-500 text-black p-2 w-full mt-4 rounded"
                        >
                            Send
                        </button>
                        {
                            // show a success message if email is sent successfully
                            emailSubmitted && (
                                <p className="text-center text-lg mt-2 text-blue-800">
                                    Email sent successfully!
                                </p>
                            )
                        }
                    </form>
                </div>
            </section>
                </div>

            <Footer />
            </main>

        </>
    );
};

export default EmailSection;
