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
        <img
          loading="lazy"
          src={post.img}
          alt={post.title}
          srcSet={`${post.img} 300w, ${post.img} 600w, ${post.img} 900w`}
          sizes="(max-width: 600px) 300px,
            (max-width: 900px) 600px,
            900px"
        />

      </a>

      <a href="#" aria-label={post.title}>
        <h3 className="post-title">{post.title}</h3>
      </a>
    </article>
  );
};

// Exporting the PostCard component
export default PostCard;
