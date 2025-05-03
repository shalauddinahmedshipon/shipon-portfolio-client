import { Blog } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = async() => {
  const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`,
    {
      next:{
        revalidate:30
      }
    }
  );
   const data = await res.json();
   const blogsData:Blog[]=data.data;
   console.log(blogsData);
 
  return (
    <section id="blog" className="py-20 px-6  text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.slice(0,3).map((post) => (
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
