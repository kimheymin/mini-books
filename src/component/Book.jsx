import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addMyBook } from "../api/firebase";
import ToastMsg from "./ToastMsg";
export default function Book({ book }) {
  const { author, pubdate, image, title, publisher, isbn } = book;

  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);

    const bookData = { title, isbn, image, review: "", status: "active" };
    addMyBook(isbn, bookData);
  };

  return (
    <>
      {like && <ToastMsg setLike={setLike} text="내 서재에 추가되었습니다." />}
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
      </li>
    </>
  );
}
