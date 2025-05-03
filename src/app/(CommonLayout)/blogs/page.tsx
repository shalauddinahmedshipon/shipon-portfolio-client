import { Blog } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "MD.SHIPON | Blogs",
  description: "Mern Stack Developer",
};


const AllBlogs = async() => {
  const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`,
      {
        cache:"no-store"      
      }
    );
     const data = await res.json();
     const blogsData:Blog[]=data.data;
  
 

  return (
    <section id="blog" className="py-20 px-6  text-white mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">All Blogs</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((post) => (
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
      </div>
    </section>
  );
};

export default AllBlogs;
