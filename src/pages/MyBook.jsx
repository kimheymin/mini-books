import React, { useEffect, useState } from "react";
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

  const allCnt = mydata && mydata.length;
  const activeCnt =
    mydata && mydata.filter((item) => item.status === "active").length;
  const completedCnt =
    mydata && mydata.filter((item) => item.status === "completed").length;

  return (
    <section className="pt-8 sm:w-full">
      <div className="flex w-96 p-4 m-auto text-center justify-around  ">
        <li>
          <p>전체</p>
          <span className="text-xl font-semibold">{allCnt}</span>
        </li>
        <li>
          <p>읽는 중</p>
          <span className="text-xl font-semibold">{activeCnt}</span>
        </li>
        <li>
          <p>읽음</p>
          <span className="text-xl font-semibold">{completedCnt}</span>
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
