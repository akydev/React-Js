import { Button } from "@mui/material";
import React, { useState } from "react";
import FormChild from "./FormChild";
import DisplayFormResult from "./DisplayFormResult";
import { dataGridArray } from "./interface/ICrud";

export default function ParentMain() {
  const [open, setOpen] = useState<boolean>(false);
  const [arr, setArr] = useState<dataGridArray[]>([]);
  const [id, setId] = useState<number>(-1);
  console.log(arr);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleEdit = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const deleteInfo = (id: number) => {
    const newArray = [...arr];
    const removedNewArray = newArray.filter((v) => {
      return v.id !== id;
    });
    console.log(removedNewArray);
    setArr(removedNewArray);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <FormChild
        handleClose={handleClickClose}
        open={open}
        arr={arr}
        setArr={setArr}
        id={id}
        setId={setId}
      />
      <DisplayFormResult
        data={arr}
        deleteInfo={deleteInfo}
        handleEdit={handleEdit}
      />
    </>
  );
}
