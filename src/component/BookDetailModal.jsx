import React from "react";

export default function BookDetailModal({
  book: { author, pubdate, description, image, title, publisher, isbn },
  setModalOpen,
}) {
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex w-2/3 h-auto items-center absolute top-0 bottom-0 z-50 bg-blue-400">
      <div className="flex w-4/5">
        <img src={image} alt={isbn} />
        <div>
          <p className="">{title}</p>
          <p className="">{author}</p>
          <div className="">
            <span className="">{publisher}</span>
            <span>{pubdate}</span>
          </div>
          <p className="">{description}</p>
        </div>
      </div>
      <button className="" onClick={closeModal}>
        X
      </button>
    </div>
  );
}
