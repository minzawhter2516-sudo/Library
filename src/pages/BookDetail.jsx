import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bookImg from "../assets/book.png";
function BookDetail() {
  const param = useParams();
  const url = "http://localhost:3000/Books/" + param.id;
  const { data: book, error, loading } = useFetch(url);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <div>Loading....</div>}
      {book && (
        <div className="grid grid-cols-2">
          <div>
            <img src={bookImg} alt="" className="w-[80%]" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl  font-bold">{book.title}</h1>
            {book.categories &&
              book.categories.map((genere) => (
                <span
                  className="bg-blue-500 text-sm rounded-full px-2 py-1 text-white
              mx-1"
                  key={genere}
                >
                  {genere}
                </span>
              ))}
            <p>{book.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
