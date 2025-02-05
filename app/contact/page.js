import React from 'react';

const Contact = () => {
    return (
        <section className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-16 px-6 md:px-20 lg:px-40">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                <p className="mb-12 text-lg">I would love to hear from you! Please fill out the form below and i’ll get back to you as soon as possible.</p>

                <form className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-4 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 dark:focus:border-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 dark:focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-4 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 dark:focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 dark:focus:border-purple-500"
                            rows="5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

