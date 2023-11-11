import axios from "axios";
import { async } from "q";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Book from "../component/Book";

export default function BookList() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery([id], async () => {
    return await axios
      .get("/datas/data.json")
      .then((res) => res.data.documents)
      .then((data) =>
        data.filter((bookItem) => bookItem.contents.length !== 0)
      );
  });

  return (
    <div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {data && (
        <div>
          <span>{id}</span> 에 대한
          <span>{data.length} 개의 검색결과</span>
        </div>
      )}
      {data && (
        <ul>
          {data.map((item, index) => (
            <Book key={index} book={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
