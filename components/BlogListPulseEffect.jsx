import BlogItemPulseEffect from "./BlogItemPulseEffect";

const BlogListPulseEffect = () => {
  console.log("list pulse");
  return (
    <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
      {Array.from(Array(5).keys()).map((index) => {
        console.log(index);
        return <BlogItemPulseEffect key={index} />;
      })}
    </div>
  );
};

export default BlogListPulseEffect;
