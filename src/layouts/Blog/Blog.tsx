// Importing styles and assets
import "./style.scss";
import { blog1, blog2, blog3 } from "../../assets";
import PostCard from "./components/PostCard";

// Define type for a blog post
interface BlogPost {
  tag: string;
  img: string;
  title: string;
}

// Blog functional component
const Blog = () => {
  // Define an array of blog posts
  const posts: BlogPost[] = [
    {
      tag: "DOW",
      img: blog1,
      title: "How To Use Drum Machine in Logic Pro X",
    },
    {
      tag: "Mixing",
      img: blog2,
      title: "How to mix Guitar Effectively",
    },
    {
      tag: "Vox",
      img: blog3,
      title: "The Real Power of Harmonies in Music Production",
    },
  ];

  return (
    // Blog section component
    <section id="blog" aria-labelledby="blog-heading">
      <div className="wrapper">
      <h2 aria-label="Latest Blog Posts">Latest Blog Posts</h2>
        {/* Content container for blog posts */}
        <div className="content-container">
          {/* Map through blog posts and render PostCard component */}
          {posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
        {/* Button container */}
        <div className="btn-container">
        <button aria-label="View All Posts">View All Posts</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
