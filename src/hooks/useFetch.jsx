import React from "react";
import { useState, useEffect } from "react";
function useFetch(url, method = "GET") {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let options = {
      method,
    };
    let dataFetch = () => {
      fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };
    if (method === "POST" && postData) {
      options = {
        ...options,
        header: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };
      dataFetch();
    }
    if (method === "GET") {
      dataFetch();
    }
  }, [url, postData]);
  return { setPostData, data, error, loading };
}

export default useFetch;
