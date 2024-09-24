import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

export default function MyInfoCommentsApi() {
  const [data, setData] = useState<any[]>([]);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((y) => y.json())
      .then((y) => {
        setData(y);
      });
  }, []);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
}
