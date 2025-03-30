import React from "react";
import useFetchPost from "../../hooks/useFetchPost";
export default function PostWrapper() {
  const { data } = useFetchPost();

  console.log(data, "data");
  return (
    <div className="post-container">
      <div className="post-card-wrapper">
        {data?.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.img}
              srcSet={`${item.img} 1x, ${item.img_2x} 2x`}
              alt="img"
            />
            <p className="post-tag">{item.tags}</p>
            <h2 className="post-title">{item.title}</h2>
            <div className="post-info">
              <p className="post-author">{item.autor}</p>
              <div className="dot"></div>
              <p className="date">{item.date}</p>
              <div className="dot"></div>
              <span className="views">{item.views}</span>
            </div>
            <p className="post-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
