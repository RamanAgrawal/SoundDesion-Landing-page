import { FC } from "react";
interface PostCardI {
  post: {
    tag: string;
    img: string;
    title: string;
  };
}
const PostCard: FC<PostCardI> = ({ post }) => {
  return (
    <div className="post">
      <div className="tag">{post.tag}</div>
      <a href="#">
        <img src={post.img} alt={post.title} />
      </a>
      <a href="">
        <h3 className="post-title">{post.title}</h3>
      </a>
    </div>
  );
};

export default PostCard;
