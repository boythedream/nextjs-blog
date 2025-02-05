import fs from "fs";
import matter from 'gray-matter';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';

// Blog Page component
export default async function Page({ params }) {
    const filepath = `content/${params.slug}.md`;
    const fileContent = fs.readFileSync(filepath, 'utf-8');

    // Parsing the markdown file using gray-matter
    const { data: blog, content } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: blog.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "one-dark-pro",
            keepBackground: false,
            onVisitLine(node) {
                if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                }
            },
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        });

    const htmlContent = (await processor.process(content)).toString();

    // If the blog is not found, return a 404 page
    if (!blog) {
        return <p>Blog post not found.</p>;
    }

    return (
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center justify-center mt-10 lg:py-20 xl:px-16">
            <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 mt-10 rounded-lg shadow-lg dark:text-gray-200 bg-white dark:bg-gray-800">
                {/* Blog Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
                    {blog.title}
                </h1>

                {/* Author and Date */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm mb-6 text-gray-500 dark:text-gray-300">
                    <span className="italic">By {blog.author}</span>
                    <span className="italic">{blog.date}</span>
                </div>

                {/* Blog Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 border-l-4 border-blue-500 pl-4 italic">
                    &ldquo;{blog.description}&rdquo;
                </p>

                {/* Blog Content */}
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    className="prose prose-lg dark:prose-invert max-w-none leading-relaxed lg:leading-loose"
                ></div>
            </div>
        </section>
    );
}
