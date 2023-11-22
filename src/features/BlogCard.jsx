const BlogCard = (props) => {
  return (
    <div className="bg-mlite p-5 rounded-md">
      <div className="flex gap-3 mb-5">
        <p className="tags">Culture</p>
        <p className="tags">Event</p>
        <p className="tags">News</p>
      </div>
      <h2 className="text-2xl mb-3">{props.heading}</h2>
      <p className="text-lg text-slate-500 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        excepturi pariatur asperiores alias officia unde, reiciendis praesentium
        impedit doloremque.
      </p>
      <div className="flex justify-between">
        <p>By John Doe</p>
        <p>20, Feb, 2020</p>
      </div>
    </div>
  );
};

export default BlogCard;
