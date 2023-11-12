import axios from "axios";
import { async } from "q";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Book from "../component/Book";

export default function BookList() {
  const { keyword } = useParams();

  const { isLoading, error, data } = useQuery([keyword], async () => {
    return await axios.get("/datas/data.json").then((res) => {
      res.data.items.map((item) => {
        item.author = item.author.replaceAll("^", " ");
        item.publisher = item.publisher.replaceAll("^", " ");
      });
      return res.data.items;
    });

    //     return await axios({
    //   method: "get",
    //   baseURL: "/v1/search/book.json",
    //   params: {
    //     display: 100,
    //     start: 1,
    //     query: keyword,
    //   },
    //   headers: {
    //     'X-Naver-Client-Id': `${process.env.REACT_APP_NAVER_API_KEY}`,
    //     'X-Naver-Client-Secret': `${process.env.REACT_APP_NAVER_API_SECRET}`,
    //   },
    // })
    // .then(res => res.data.items);
  });

  console.log(data);

  const showOptions = [
    { value: "10", name: "10개씩 보기" },
    { value: "30", name: "30개씩 보기" },
    { value: "50", name: "50개씩 보기" },
  ];

  const searchOptions = [
    { id: "recent", name: "option", text: "최신순" },
    { id: "correct", name: "option", text: "정확도순" },
  ];

  const handleShowCountChange = (e) => console.log(e.target.value);
  const handleSearchfilterChange = (e) => console.log(e.target.id);

  return (
    <section className="pt-10">
      <div className="flex justify-between px-4">
        <div className="flex">
          {searchOptions.map((item, index) => (
            <div className="pr-8 text-lg">
              <label key={index} onChange={handleSearchfilterChange}>
                <input className="m-2
                " type="radio" id={item.id} name={item.name} />
                {item.text}
              </label>
            </div>
          ))}
        </div>
        <div className="">
          <select className="bg-zinc-500 w-32 h-8 p-2 rounded-md" onChange={handleShowCountChange}>
            {showOptions.map((item, index) => (
              <option key={index} value={item.value} defaultValue={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {data && (
        <div className="flex items-center text-2xl pt-8">
          <span className="font-semibold m-2 text-red-400">'{keyword}'</span> 에 대한
          <span className="font-semibold m-2 text-red-400">{data.length}</span> 개의
          검색결과
        </div>
      )}

      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {data && (
        <ul className="grid grid-cols-5">
          {data.map((item, index) => (
            <Book key={index} book={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
