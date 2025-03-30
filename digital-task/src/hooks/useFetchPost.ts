import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPost = () => {
  const [data, setData] = useState(null);

  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Axios error:", error);
        setError("Failed to fetch data");
      }
    };
    console.log("useEffect is running");
    fetchData();
  }, []);

  return { data, error };
};

export default useFetchPost;
