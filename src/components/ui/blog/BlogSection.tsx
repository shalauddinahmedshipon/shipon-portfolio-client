

import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  // Dummy blog data
  const blogs = [
    {
      _id: '68145bf7ee76c53445f81901',
      title: 'Why MERN Stack is Great for Startups',
      content:
        'The MERN stack (MongoDB, Express, React, Node.js) offers a complete solution for startups to build scalable and maintainable web applications. In this blog, we explore the benefits of MERN...',
      tags: ['MERN', 'Startup', 'Web Development'],
      coverImage: 'https://redux.js.org/img/redux-logo-landscape.png', // Real image URL
      author: 'Shipon',
      createdAt: '2025-05-02T05:45:27.998Z',
    },
    {
      _id: '68145be5ee76c53445f818fe',
      title: 'Getting Started with TypeScript in Node.js',
      content:
        'TypeScript adds strong typing and developer-friendly features to JavaScript. This beginner-friendly guide will help you set up TypeScript in a Node.js project and explain its core benefits.',
      tags: ['TypeScript', 'Node.js', 'Backend', 'JavaScript'],
      coverImage: 'https://redux.js.org/img/redux-logo-landscape.png', // Real image URL
      author: 'Emily Carter',
      createdAt: '2025-05-02T05:45:09.764Z',
    },
    {
      _id: '68145b84ee76c53445f818f8',
      title: 'State Management in React: Context API vs Redux',
      content:
        'Managing state in React apps can be challenging as the app grows. Two popular approaches are Context API and Redux. In this article, we’ll explore when to use which and their pros and cons.',
      tags: ['React', 'State Management', 'Redux', 'Context API'],
      coverImage: 'https://redux.js.org/img/redux-logo-landscape.png', // Real image URL
      author: 'Sarah Lee',
      createdAt: '2025-05-02T05:43:32.936Z',
    },
  ];


  return (
    <section id="blog" className="py-20 px-6  text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <div
              key={post._id}
              className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-1">{new Date(post.createdAt).toLocaleDateString()}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{post.content.substring(0, 150)}...</p>
                <Link href={`/blogs/${post._id}`} className="text-primary hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
       <div className='w-full mt-10 flex justify-center'>
       <Link
            href="/blogs"
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition "
          >
            View All Blogs
          </Link>
       </div>
      </div>
    </section>
  );
};

export default BlogSection;
