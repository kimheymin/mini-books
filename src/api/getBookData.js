import axios from "axios";

export async function getData(keyword, searchOptions) {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  return await axios.get("/datas/data.json").then((res) => {
    res.data.items.map((item) => {
      item.author = item.author.replaceAll("^", " ");
      item.publisher = item.publisher.replaceAll("^", " ");
      item.likeState = false;
    });

    return res.data.items;

    // return await axios({
    //   method: "get",
    //   baseURL: `${PROXY}/v1/search/book.json`,
    //   params: {
    //     query: keyword,
    //     display: 100,
    //     start: 1,
    //     sort: searchOptions,
    //   },
    //   headers: {
    //     "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_API_KEY}`,
    //     "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_API_SECRET}`,
    //   },
    // }).then((res) => {
    //   res.data.items.map((item) => {
    //     item.author = item.author.replaceAll("^", " ");
    //     item.publisher = item.publisher.replaceAll("^", " ");
    //   });
    //   return res.data.items;
  });
}
