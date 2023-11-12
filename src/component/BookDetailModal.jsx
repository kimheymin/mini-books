import React from "react";

export default function BookDetailModal({
  book: { author, pubdate, description, image, title, publisher, isbn },
  setModalOpen,
}) {
  
  const closeModal = () => setModalOpen(false);

  return (
    <div className="z-50 absolute top-1/2 left-1/2 translate-y-1/2 translate-x-1/2 bg-gray-600 border border-zinc-700 rounded-sm flex">
      <button onClick={closeModal}>X</button>
      <div className="flex items-center w-1/3 my-8">
        <img src={image} alt={isbn} />
        <div>
          <p className="text-lg pb-2 ">{title}</p>
          <p className="text-zinc-600">{author}</p>
          <div className="text-sm py-2 text-zinc-600">
            <span className="pr-2">{publisher}</span>
            <span>{pubdate}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
