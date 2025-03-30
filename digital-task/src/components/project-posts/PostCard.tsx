import React from "react";
import { Post } from "../../hooks/useFetchPost";

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard = ({ post, onClick }: PostCardProps) => {
  return (
    <div className="card" onClick={() => onClick(post)}>
      <img
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        alt="img"
      />
      <p className="post-tag">{post.tags}</p>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-info">
        <p className="post-author">{post.autor}</p>
        <div className="dot"></div>
        <p className="date">{post.date}</p>
        <div className="dot"></div>
        <span className="views">{post.views}</span>
      </div>
      <p className="post-text">{post.text}</p>
    </div>
  );
};

export default PostCard;
