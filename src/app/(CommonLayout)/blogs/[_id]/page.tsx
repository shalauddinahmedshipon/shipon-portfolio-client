import Image from 'next/image';

interface Blog {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  coverImage: string;
  author: string;
  createdAt: string;
}

const BlogDetail = () => {
  // Demo data for the blog
  const blog: Blog = {
    _id: '68145bf7ee76c53445f81901',
    title: 'Why MERN Stack is Great for Startups',
    content:
      'The MERN stack (MongoDB, Express, React, Node.js) offers a complete solution for startups to build scalable and maintainable web applications. In this blog, we explore the benefits of MERN.The MERN stack (MongoDB, Express, React, Node.js) offers a complete solution for startups to build scalable and maintainable web applications. In this blog, we explore the benefits of MERN.The MERN stack (MongoDB, Express, React, Node.js) offers a complete solution for startups to build scalable and maintainable web applications. In this blog, we explore the benefits of MERN.The MERN stack (MongoDB, Express, React, Node.js) offers a complete solution for startups to build scalable and maintainable web applications. In this blog, we explore the benefits of MERN',
    tags: ['MERN', 'Startup', 'Web Development'],
    coverImage: 'https://redux.js.org/img/redux-logo-landscape.png', // Demo image URL
    author: 'Shipon',
    createdAt: '2025-05-02T05:45:27.998Z',
  };

  return (
    <section className="pb-20 pt-5 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        {/* Blog Cover Image */}
        <div className="relative h-80 w-full mb-6">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none mb-8">
          <p>{blog.content}</p>
        </div>

        {/* Blog Author */}
        <p className="text-sm text-gray-400">
          <span>Written by {blog.author}</span> |{' '}
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </p>

        {/* Blog Tags */}
        <div className="mt-4 flex gap-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary text-white py-1 px-3 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
