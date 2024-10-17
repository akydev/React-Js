import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [data, setData] = useState<any[]>([]);

  const pagination = () => {
    let page = [];
    for (let i = 1; i < Math.ceil(data.length / pageSize); i++) {
      page.push(i);
    }
    return page;
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div>
      {data
        .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
        .map((value: any) => {
          return (
            <div>
              {value.id}
              {value.title}
            </div>
          );
        })}
      {pagination().map((num: any) => {
        return (
          <button
            onClick={() => {
              setPage(num);
            }}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
