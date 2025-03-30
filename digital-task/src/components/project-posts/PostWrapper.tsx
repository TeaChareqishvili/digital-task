import React, { useState } from "react";
import useFetchPost, { Post } from "../../hooks/useFetchPost";
import Modal from "../modal/Modal";
import PostCard from "./PostCard";
export default function PostWrapper() {
  const { data } = useFetchPost();

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const openModal = (post: Post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="post-container">
      <div className="post-card-wrapper">
        {data?.map((item) => (
          <PostCard key={item.id} post={item} onClick={openModal} />
        ))}
      </div>
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={closeModal}>
          <PostCard post={selectedPost} onClick={closeModal} />
        </Modal>
      )}
    </div>
  );
}
