import { Blog } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { _id: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${params._id}`, {
    cache: 'no-store',
  });

  const data = await res.json();
  const blog: Blog = data.data;

  return {
    title: blog.title,
    description: blog.content.slice(0, 150), 
  };
}


const BlogDetail = async({params}:{params:{_id:string}}) => {
const {_id}=await params;
const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${_id}`,
  {
   cache:"no-store"
  }
);
 const data = await res.json();
 const blog:Blog=data.data;



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
