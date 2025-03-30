import { useState, useEffect } from "react";
import axios from "axios";

type Post = {
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
  const [data, setData] = useState<Post[] | null>(null);

  const [error, setError] = useState<unknown>(null);

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

  return { data, error };
};

export default useFetchPost;
