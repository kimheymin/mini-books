import axios from "axios";

export async function getData(keyword, searhOption) {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  return await axios({
    method: "get",
    baseURL: `${PROXY}/v1/search/book.json`,
    params: {
      query: keyword,
      display: 100,
      start: 1,
      sort: searhOption,
    },
    headers: {
      "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_API_KEY}`,
      "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_API_SECRET}`,
    },
  }).then((res) => {
    res.data.items.map((item) => {
      item.author = item.author.replaceAll("^", " ");
      item.publisher = item.publisher.replaceAll("^", " ");
    });
    return res.data.items;
  });
}
