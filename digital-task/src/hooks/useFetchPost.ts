import { useState, useEffect } from "react";
import axios from "axios";

export type Post = {
  id: number;
  autor: string;
  date: string;
  img: string;
  img_2x: string;
  tags: string;
  text: string;
  title: string;
  views: string;
};

const useFetchPost = () => {
  const [data, setData] = useState<Post[] | null>([]);
  const [error, setError] = useState<unknown>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const filteredData = data?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filteredData, error, setSearchTerm };
};

export default useFetchPost;
