"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from 'typed.js';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  const typedElement = useRef(null); // Reference to the span for typed.js

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Python Developer",
        "React Developer",
        "JavaScript Developer",
        "AI Specialist",
        "Node.js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
    });

    // Destroy Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center justify-center mt-10">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <span className="font-semibold"></span>{" "}
            <br className="hidden lg:block" /> I am a{" "}
            <span className="font-semibold decoration-primary" ref={typedElement}></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            As a passionate developer, I specialize in creating innovative solutions that blend technology and design. With expertise in Python, React, and various web technologies, I aim to build efficient applications that enhance user experience and drive business growth.
          </p>
          <Link href="/resume.pdf" download={"/resume.pdf"}>
            <Button className="mt-2" variant="outline">Download Resume</Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Tailwind CSS Components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Our Pricing Plans
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Basic
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Perfect for individuals starting out.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                    $9
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                  <li>5 Projects</li>
                  <li>10 GB Storage</li>
                  <li>Basic Support</li>
                </ul>
                <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-500 dark:bg-blue-600 text-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm transform lg:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <p className="mb-6">Great for professionals looking for more features.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span>/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>Unlimited Projects</li>
                  <li>50 GB Storage</li>
                  <li>Priority Support</li>
                </ul>
                <button className="w-full py-2 bg-white text-blue-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  Choose Pro
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Premium
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Best for teams and businesses.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                    $49
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                  <li>Unlimited Projects</li>
                  <li>100 GB Storage</li>
                  <li>Dedicated Support</li>
                </ul>
                <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Choose Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200 animate-fade-in">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs animate-slide-up hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <Image className="w-16 h-16 rounded-full mx-auto" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsaWVudHxlbnwwfHx8fDE2ODcxMjcyNzE&ixlib=rb-4.0.3&q=80&w=400" alt="Client 1" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">CEO at Example Co.</p>
              <p className="text-gray-500 dark:text-gray-300">
                This service exceeded my expectations. The team was responsive and delivered exceptional quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs animate-slide-up hover:scale-105 transition-transform duration-300 delay-100">
              <div className="mb-4">
                <Image  fill className="w-16 h-16 rounded-full mx-auto" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsaWVudHxlbnwwfHx8fDE2ODcxMjcyNzE&ixlib=rb-4.0.3&q=80&w=400" alt="Client 2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Founder at Startup Inc.</p>
              <p className="text-gray-500 dark:text-gray-300">
                Highly recommend! The experience was seamless, and the final product was top-notch.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 max-w-xs animate-slide-up hover:scale-105 transition-transform duration-300 delay-200">
              <div className="mb-4">
                <Image className="w-16 h-16 rounded-full mx-auto" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsaWVudHxlbnwwfHx8fDE2ODcxMjcyNzE&ixlib=rb-4.0.3&q=80&w=400" alt="Client 3" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Alice Brown</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">CTO at TechSolutions</p>
              <p className="text-gray-500 dark:text-gray-300">
                Outstanding results! The team was professional and efficient throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Top Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <Image className="w-full h-48 object-cover" src="/python.webp" alt="Blog 1" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  JavaScript
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description or snippet of the blog content to entice readers to click and read more.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-200">
                  Read More →
                </a>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <Image className="w-full h-48 object-cover" src="/python.webp" alt="Blog 2" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Python
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description or snippet of the blog content to entice readers to click and read more.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-200">
                  Read More →
                </a>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <Image className="w-full h-48 object-cover" src="/python.webp" alt="Blog 3" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  TypeScript
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description or snippet of the blog content to entice readers to click and read more.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-200">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main >
  );
}
