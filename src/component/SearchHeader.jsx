import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${text}`);
  };

  return (
    <header>
      <h1 className="text-3xl">미니북스</h1>
      <div className="flex">
        <Link to='/book/like'>내 서재</Link>
        <p>다크모드</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button>검색</button>
      </form>
      <div>
        <input type="radio" name="a" id="b" />정확도순
        <input type="radio" name="a" id="b" />발간일순
      </div>
    </header>
  );
}
