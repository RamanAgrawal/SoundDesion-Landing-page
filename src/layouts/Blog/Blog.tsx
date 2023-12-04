import "./style.scss";
import { blog1, blog2, blog3 } from "../../assets";
import PostCard from "./components/PostCard";

const Blog = () => {
  const posts = [
    {
      tag: "DOW",
      img: blog1,
      title: "How To Use Drum Machine in Logic Pro X",
    },
    {
      tag: "Mixing",
      img: blog2,
      title: "How to mix Guiter Effectivally",
    },
    {
      tag: "Vox",
      img: blog3,
      title: "The Real Power of Harmonies in Music Production",
    },
  ];
  return (
    <section id="blog">
      <div className="wrapper">
        <h2>Latest Project</h2>
        <div className="content-container">
          {posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
        <div className="btn-container">
          <button>All Post</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
