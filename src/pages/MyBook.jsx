import React, { useEffect, useState } from "react";
import { getMyBook } from "../api/firebase";
import MyBookCard from "../component/MyBookCard";

export default function MyBook() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMyBook();
      setMyData(data);
    })();
  }, [myData]);

  const readCnt = (status) =>
    myData.filter((item) => item.status === status).length;

  return (
    <section className="pt-8 sm:w-full">
      <div className="flex w-96 p-4 m-auto text-center justify-around  ">
        <li>
          <p>전체</p>
          <span className="text-xl font-semibold">{myData.length}</span>
        </li>
        <li>
          <p>읽는 중</p>
          <span className="text-xl font-semibold">{readCnt("active")}</span>
        </li>
        <li>
          <p>읽음</p>
          <span className="text-xl font-semibold">{readCnt("completed")}</span>
        </li>
      </div>
      {myData && (
        <ul>
          {myData.map((item, index) => (
            <MyBookCard key={index} bookInfo={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
