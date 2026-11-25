import { Link } from "react-router-dom";
import bookphoto from "../assets/book.png";
import useFetch from "../hooks/useFetch";
function Books() {
  const {
    data: book,
    error,
    loading,
  } = useFetch("http://localhost:3000/Books");
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3">
      {loading && <p>loading...</p>}
      {book &&
        book.map((b) => (
          <div className="border border-1 p-4" key={b.id}>
            <Link to={`/books/${b.id}`}>
              <img src={bookphoto} alt="" />

              <div className="text-center space-y-2">
                <h1>{b.title}</h1>
                <p>{b.description}</p>
              </div>
              <div className="flex flex-wrap">
                {b.categories.map((genre) => (
                  <span
                    className="mx-1 my-1 text-sm bg-blue-600 text-white py-1 px-1 rounded-full"
                    key={genre}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Books;
