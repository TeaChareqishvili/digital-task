import { useState } from "react";
import useFetchPost, { Post } from "../../hooks/useFetchPost";
import Modal from "../modal/Modal";
import PostCard from "./PostCard";
import Search from "../search/Search";
export default function PostWrapper() {
  const { filteredData, setSearchTerm } = useFetchPost();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const openModal = (post: Post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="post-container">
      <Search onSearch={handleSearchChange} />
      <div className="post-card-wrapper">
        {filteredData?.map((item) => (
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
