import React, { useState } from "react";
import BookDetailModal from "./BookDetailModal";

export default function Book({ book }) {
  const { author, pubdate, image, title, publisher, isbn } = book;

  // const [modalOpen, setModalOpen] = useState(false);
  // const showModal = setModalOpen(!modalOpen);
  // const showModal = ()=> setModalOpen(true);

  return (
    <li className=" w-60 m-4 p-4 rounded-md shadow-2xl hover:scale-105">
      <img
        className="p-0"
        src={image}
        alt={isbn}
        // onClick={showModal}
      />

      <p className="py-2">
        {title.length < 35 ? title : title.slice(0, 30) + "..."}
      </p>
      <div className="text-sm text-zinc-600">
        <span className="">{author}</span>
        <span className="pl-2">/ {publisher}</span>
      </div>
      <p className="pt-1 text-sm text-zinc-600">{pubdate}</p>

      {/* {modalOpen && <BookDetailModal book={book} setModalOpen={setModalOpen} />} */}
    </li>
  );
}
