"use client"
import Image from "next/image";
import { motion } from "framer-motion"; // If you want animations

export default function About() {
    // Optional: Fade-in animation using Framer Motion
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="min-h-screen py-20 px-4 lg:px-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

                {/* Left Section */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                        About <span className="text-blue-500">me</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        i am  a passionate team committed to delivering the best solutions
                        for your business. My mission is to create amazing products that
                        make a real impact. From concept to deployment, i am with you
                        every step of the way.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Innovation and creativity drive us to go beyond expectations. We
                        craft experiences that resonate with users and build lasting
                        connections.
                    </p>
                    <button
                        className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all"
                        aria-label="Learn more about us"
                    >
                        Learn More
                    </button>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: 0.3 }}
                >
                    <Image
                        src={"/python.webp"} // Replace with actual image URL
                        alt="Our passionate team"
                        width={600}
                        height={400}
                        priority={true}
                        className="rounded-lg shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
