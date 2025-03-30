import React from "react";
import useFetchPost from "../../hooks/useFetchPost";
export default function PostWrapper() {
  const { data } = useFetchPost();

  console.log(data, "data");
  return <div className="post-container"></div>;
}
