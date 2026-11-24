import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [description, serDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["HTML", "CSS"]);
  const addCategory = (e) => {
    e.preventDefault();
    setCategories((prev) => [category, ...prev]);
    setCategory("");
  };
  return (
    <form className="w-full max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        Book create form
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6 mt-3">
        <div className="w-full px-3">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
            Book Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="book title"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 mt-3">
        <div className="w-full px-3">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
            Book description
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            value={description}
            onChange={(e) => serDescription(e.target.value)}
            placeholder="book description"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col -mx-3 mb-6 mt-3 justify-between">
        <div className="w-full px-3">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
            Category
          </label>
          <div className="flex justify-between space-x-1">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="categories"
            />

            <button
              type="button"
              onClick={addCategory}
              className="bg-blue-600 rounded-lg h-[45px] p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex mb-2 mt-[-15px]">
        {categories.map((genere) => (
          <span
            className="bg-blue-500 text-sm rounded-full px-2 py-1 text-white
              mx-1 mb-2"
            key={genere}
          >
            {genere}
          </span>
        ))}
      </div>
      <button
        className="bg-indigo-600 rounded-2xl  px-3 py-2 text-white flex justify-center
            cursor-pointer gap-2 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span>create book</span>
      </button>
    </form>
  );
}

export default Create;
