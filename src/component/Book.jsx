import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addMyBook } from "../api/firebase";
export default function Book({ book }) {
  const { author, pubdate, image, title, publisher, isbn, likeState } = book;

  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);

    const bookData = { title, isbn, image };
    addMyBook(isbn, bookData);
  };

  return (
    <li className="m-4 p-4 rounded-md shadow-2xl hover:scale-105">
      <img className="p-0" src={image} alt={isbn} />
      <p className="py-2">
        {title.length < 35 ? title : title.slice(0, 30) + "..."}
      </p>
      <div className="text-sm text-zinc-500">
        <span className="">{author}</span>
        <span className="pl-2">/ {publisher}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="pt-1 text-sm text-zinc-500">{pubdate}</p>
        <button className="text-xl text-zinc-500" onClick={handleClick}>
          {!like && <AiOutlineHeart />}
          {like && <AiFillHeart />}
        </button>
      </div>

      {/* {modalOpen && <BookDetailModal book={book} setModalOpen={setModalOpen} />} */}
    </li>
  );
}
