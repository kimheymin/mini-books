import React from "react";

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  const handlePrevClick = () => setPage(page - 1);
  const handleNextClick = () => setPage(page + 1);

  return (
    <nav className="text-center text-lg my-3 font-semibold">
      <button
        className={`${
          page === 1
            ? "hover:text-gray-500"
            : "hover:text-red-500 cursor-pointer"
        }`}
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className={
              "m-3 bg-zinc-200 px-1.5 rounded-full hover:bg-zinc-500 dark:text-black"
            }
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === 1 + i ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
      <button
        className={`${
          page === numPages
            ? "hover:text-gray-500"
            : "hover:text-green-500 cursor-pointer"
        }`}
        onClick={handleNextClick}
        disabled={page === numPages}
      >
        &gt;
      </button>
    </nav>
  );
}
