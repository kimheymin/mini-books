import React, { useState } from "react";
import { addMyBook, removeMyBook } from "../api/firebase";
import ToastMsg from "./ToastMsg";

const showOptions = [
  { value: "active", name: "읽는 중" },
  { value: "completed", name: "읽음" },
];

export default function MyBookCard({ bookInfo }) {
  const { title, isbn, image, review } = bookInfo;

  const today = new Date();
  const currentTime = today.toLocaleDateString();

  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const [text, setText] = useState(review);
  const handleTextChange = (e) => setText(e.target.value);

  const handleSave = () => {
    setSaved((prev) => !prev);
    const reviewBook = { ...bookInfo, review: text };
    addMyBook(isbn, reviewBook);
  };

  const handleDelete = (isbn) => {
    removeMyBook(isbn);
    setTimeout(() => {
      setDeleted((prev) => !prev);
    }, 500);
    setDeleted((prev) => !prev);
  };

  const handleShowCountChange = (e) => {
    const reviewBook = { ...bookInfo, status: e.target.value };
    addMyBook(isbn, reviewBook);
  };

  return (
    <li className="md:flex items-center justify-center my-8">
      {saved && (
        <ToastMsg
          toastMsgState={saved}
          text="입력한 한줄평이 저장되었습니다."
        />
      )}
      {deleted && (
        <ToastMsg toastMsgState={deleted} text="선택한 책이 삭제되었습니다." />
      )}
      <div className="flex md:w-1/3 items-center">
        <img src={image} alt={title} className="w-40 h-40 md:w-56 md:h-44" />
        <div className="w-4/6 md:w-full">
          <p className="pb-6 text-lg">{title}</p>
          <p className="text-right text-sm mx-6">{currentTime}</p>
          <input
            className="w-11/12 h-12 px-4 my-5"
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="한줄평 입력"
          />
        </div>
      </div>
      <div className="mx-4 text-right mb-4">
        <select
          className="w-24 h-10 p-2 rounded-md"
          onChange={handleShowCountChange}
        >
          {showOptions.map((item, index) => (
            <option key={index} value={item.value}>
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
          onClick={() => handleDelete(isbn)}
          className="w-16 h-10 p-2 rounded-md bg-red-500"
        >
          삭제
        </button>
      </div>
    </li>
  );
}
