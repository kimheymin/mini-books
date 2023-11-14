import React, { useState } from "react";
import { addMyBook, removeMyBook } from "../api/firebase";

export default function MyBookCard({ bookInfo }) {
  const { title, isbn, image, review } = bookInfo;

  const showOptions = [
    { value: "active", name: "읽는 중" },
    { value: "completed", name: "읽음" },
  ];

  const today = new Date();
  const currentTime = today.toLocaleDateString();

  const [text, setText] = useState(review);

  const handleTextChange = (e) => setText(e.target.value);
  const handleSave = () => {
    const reviewBook = { ...bookInfo, review: text };
    addMyBook(isbn, reviewBook);
  };
  const handleDelete = () => removeMyBook(isbn);

  const handleShowCountChange = () => {};

  return (
    <li className="flex justify-center m-auto my-8 items-center">
      <img src={image} alt={title} className="w-40 h-40" />
      <div className="block w-3/12">
        <p className="pb-8">{title}</p>
        <input
          className="w-full h-12 px-2"
          value={text}
          onChange={handleTextChange}
          type="text"
          placeholder="한줄평 입력"
        />
      </div>
      <p className="text-right text-sm mx-8">{currentTime}</p>
      <div className="mx-4">
        <select
          className="w-24 h-10 p-2 rounded-md"
          onChange={handleShowCountChange}
        >
          {showOptions.map((item, index) => (
            <option
              key={index}
              value={item.value}
              defaultValue={item.value === "active"}
            >
              {item.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleSave}
          className="w-16 h-10 p-2 rounded-md bg-blue-400 mx-6 hover:bg-blue-600"
        >
          저장
        </button>
        <button
          onClick={handleDelete}
          className="w-16 h-10 p-2 rounded-md bg-red-500"
        >
          삭제
        </button>
      </div>
    </li>
  );
}
