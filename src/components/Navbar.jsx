import React from "react";
import { Outlet, Link } from "react-router-dom";
function navbar() {
  return (
    <div>
      <nav className="border border-b-0.5">
        <ul className="flex justify-between items-center px-3 py-2 max-w-5xl mx-auto">
          <li>
            <input
              type="text"
              placeholder="search books..."
              className="outline-none"
            />
          </li>
          <li className="flex items-center gap-3">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                />
              </svg>
            </Link>
            <span className="text-2xl font-bold text-indigo-600 hidden md:block">
              BookStore
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Link
              to={"/Create"}
              className="bg-indigo-600 rounded-2xl  px-3 py-2 text-white flex justify-center
            cursor-pointer gap-2"
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
              <span className="hidden md:block">create book</span>
            </Link>
            <div className="w-10 h-10 flex">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.8UWD13vCq5qa3BteMDlhawHaJh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt=""
                className="w-full rounded-full h-full"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
