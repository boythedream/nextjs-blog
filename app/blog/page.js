import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn's button
import fs from "fs";
import matter from 'gray-matter';
import Image from 'next/image';

export const dynamic = 'force-dynamic';
const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
});

// Blog component using arrow function
const Blog = () => {
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">Latest Blogs</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div
                        key={blog.slug}
                        className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto max-w-xl" // Added max-w-xs and mx-auto
                    >
                        <div className="relative w-full h-48">
                            <Image
                            fill
                                src="/python.webp"  // Replace with actual image URL
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {blog.description}
                            </p>
                            <div className="flex justify-between items-center text-gray-500 dark:text-gray-300">
                                <span>{blog.author}</span>
                                <span>{blog.date}</span>
                            </div>
                            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 transition" asChild>
                                <Link href={`/blogpost/${blog.slug}`}>
                                    Read More
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Blog;
