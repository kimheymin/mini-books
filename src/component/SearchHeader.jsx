import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="block md:flex justify-between items-center border-b border-zinc-200 dark:border-zinc-600">
      <div className="md:flex items-center">
        <Link to="/" className="text-2xl p-4 m-2">
          미니북스
        </Link>
        <form className="relative p-2" onSubmit={handleSubmit}>
          <label htmlFor="text">
            <input
              className="pl-10 h-12 rounded-2xl text-lg font-bold w-full md:w-96"
              type="text"
              value={text}
              onChange={handleChange}
            />
          </label>
          <button className="absolute top-6 left-5 ">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="text-right m-2 md:flex items-center ">
        <Link className="mr-4 hover:text-orange-400" to="/book/like">
          내 서재
        </Link>
        <button
          onClick={toggleDarkMode}
          className="mr-4 text-lg dark:bg-orange-500 bg-orange-200 rounded-xl p-1 hover:scale-110 "
        >
          {darkMode ? (
            <BiSolidSun style={{ color: "white" }} />
          ) : (
            <BiSolidMoon />
          )}
        </button>
      </div>
    </header>
  );
}
