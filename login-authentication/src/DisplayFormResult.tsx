import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { IDisplayFormResultGrid } from "./interface/ICrud";

export default function DisplayFormResult(p: IDisplayFormResultGrid) {
  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "last Name", width: 150 },
    {
      field: "",
      headerName: "Action",
      width: 350,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <Button
              onClick={() => {
                p.handleEdit(params.row.id);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                p.deleteInfo(params.row.id);
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return <DataGrid rows={p.data} columns={columns} />;
}
