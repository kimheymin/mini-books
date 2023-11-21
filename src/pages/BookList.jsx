import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Book from "../component/Book";
import Pagination from "../component/Pagination";
import { getData } from "../api/getBookData";

const showOptions = [
  { value: "10", name: "10개씩 보기" },
  { value: "30", name: "30개씩 보기" },
  { value: "50", name: "50개씩 보기" },
];

const searchOptions = [
  { id: "sim", name: "option", text: "정확도순" },
  { id: "date", name: "option", text: "출간일순" },
];

export default function BookList() {
  const { keyword } = useParams();
  const [searchOption, setSearchOption] = useState("sim");

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const handleSearchFilterChange = (e) => setSearchOption(e.target.id);
  const handleShowCountChange = (e) => setLimit(Number(e.target.value));

  const { isLoading, error, data } = useQuery([keyword, searchOption], () =>
    getData(keyword, searchOption)
  );

  return (
    <section className="pt-10">
      <div className="flex justify-between px-4">
        <div className="flex">
          {searchOptions.map((item, index) => (
            <div className="p-0 text-lg md:pr-8">
              <label key={index} onChange={handleSearchFilterChange}>
                <input
                  className="m-2"
                  type="radio"
                  id={item.id}
                  name={item.name}
                  defaultChecked={item.id === "sim"}
                />
                {item.text}
              </label>
            </div>
          ))}
        </div>
        <div>
          <select
            className="w-32 h-10 p-2 rounded-md"
            onChange={handleShowCountChange}
          >
            {showOptions.map((item, index) => (
              <option
                key={index}
                value={item.value}
                defaultValue={item.value === "10"}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {data && (
        <div className="flex items-center text-2xl pt-8">
          <span className="font-semibold m-2 text-red-400">'{keyword}'</span> 에
          대한
          <span className="font-semibold m-2 text-red-400">{data.length}</span>
          개의 검색결과
        </div>
      )}
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {data && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4">
          {data.slice(offset, offset + limit).map((item, index) => (
            <Book key={index} book={item} />
          ))}
        </ul>
      )}
      {data && (
        <Pagination
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </section>
  );
}
