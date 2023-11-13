import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleDarkMode = () => toggleDarkMode();

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="flex w-full items-center p-3 border-b border-zinc-700">
      <Link to="/" className="w-60 text-2xl px-8">
        미니북스
      </Link>

      <form className="w-full relative" onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            className="pl-10 w-2/5 h-12 rounded-2xl text-lg font-bold"
            type="text"
            value={text}
            onChange={handleChange}
          />
        </label>
        <button className="absolute top-4 left-2 ">
          <FaSearch />
        </button>
      </form>

      <div className="flex justify-between w-44">
        <Link to="/book/like">내 서재</Link>
        <button onClick={handleDarkMode} className="pr-8 text-lg">
          {!darkMode && <BiSolidMoon />}
          {darkMode && <BiSolidSun style={{ color: "white" }} />}
        </button>
      </div>
    </header>
  );
}
