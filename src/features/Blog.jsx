import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-16 px-5 md:px-10 max-w-[1280px] mx-auto">
      <h2 className="text-mgld text-2xl font-semibold mb-2">
        Knowledge at your Fingertips
      </h2>
      <p className="text-slate-700 text-3xl font-semibold mb-8">
        Read Our Latest Blog Posts, News & Articles
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <BlogCard heading="A deep dive into today's work culture." />
        <BlogCard heading="Could online payments takeover physical currency?" />
      </div>
      <div className="flex justify-end">
        <button className="text-mgld text-xl underline">
          View all articles
        </button>
      </div>
    </div>
  );
};

export default Blog;
