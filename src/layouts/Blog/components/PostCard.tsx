import { FC } from "react";

// Defining the interface for the PostCard component
interface PostCardI {
  post: {
    tag: string;
    img: string;
    title: string;
  };
}

// Functional Component PostCard
const PostCard: FC<PostCardI> = ({ post }) => {
  return (
    // Post container
    <article className="post">
   
      <div className="tag">{post.tag}</div>
   
      <a href="#" aria-label={post.title}>
        
        <img loading="lazy" src={post.img}  width="100%" alt={post.title} />
      </a>
     
      <a href="#" aria-label={post.title}>
       
        <h3 className="post-title">{post.title}</h3>
      </a>
    </article>
  );
};

// Exporting the PostCard component
export default PostCard;
