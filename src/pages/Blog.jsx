import CountryTable from "../component/CountryTable";
import BlogData from "../assets/BlogData";

const Blog = () => {
  return (
    <div className="bg-[var(--globalColor)] text-white h-full">
        <CountryTable data={BlogData} isBlogData ={true}/>
    </div>
  );
};

export default Blog;
