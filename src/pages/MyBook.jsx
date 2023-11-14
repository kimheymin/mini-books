import React, { useEffect, useState } from "react";
import { getData } from "../api/getBookData";
import { useQuery } from "react-query";
import { getMyBook } from "../api/firebase";
import MyBookCard from "../component/MyBookCard";

export default function MyBook() {
  const [mydata, setMydata] = useState();

  useEffect(() => {
    (async () => {
      const data = await getMyBook();
      setMydata(data);
    })();
  }, [mydata]);

  return (
    <section className="pt-8">
      <div className="flex w-1/4 p-4 m-auto text-center justify-around">
        <li>
          <p>All</p>
          <span className="text-xl font-semibold">0</span>
        </li>
        <li>
          <p>읽는 중</p>
          <span className="text-xl font-semibold">0</span>
        </li>
        <li>
          <p>읽음</p>
          <span className="text-xl font-semibold">0</span>
        </li>
      </div>

      {mydata && (
        <ul className="">
          {mydata.map((item, index) => (
            <MyBookCard key={index} bookInfo={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
