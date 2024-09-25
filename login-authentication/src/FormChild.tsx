import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { formObj, IFormChildPage } from "./interface/ICrud";

export default function FormChild(props: IFormChildPage) {
  useEffect(() => {
    if (props.id > 0) {
      const p = props.arr.find((v) => v.id == props.id);
      if (p) {
        setData({ ...p });
      }
    } else {
      setData({ firstName: "", lastName: "" });
    }
  }, [props.id, props.open, props.arr]);

  const [data, setData] = useState<formObj>({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveInfo = () => {
    const p = [...props.arr];
    if (props.id <= 0) {
      // Generate a unique ID based on the highest existing ID
      const newId =
        p.length > 0 ? Math.max(...p.map((item) => item.id)) + 1 : 1;
      p.push({ ...data, id: newId });
    } else {
      const u = p.find((v) => v.id == props.id);
      if (u) {
        // Only update if the object exists
        u.firstName = data.firstName;
        u.lastName = data.lastName;
      }
    }
    props.setArr(p);
    props.setId(-1);
    props.handleClose();
  };
  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.handleClose();
      }}
    >
      <DialogTitle>Add/Edit Employee</DialogTitle>
      <DialogContent>
        <TextField
          type="text"
          fullWidth
          variant="standard"
          id="firstName"
          name="firstName"
          label="First Name"
          value={data.firstName}
          onChange={handleChange}
          margin="dense"
          autoFocus
          required
        />
        <TextField
          type="text"
          fullWidth
          variant="standard"
          id="lastName"
          name="lastName"
          label="Last Name"
          value={data.lastName}
          onChange={handleChange}
          margin="dense"
          autoFocus
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="button"
          onClick={() => {
            props.handleClose();
          }}
        >
          Cancle
        </Button>
        <Button type="button" onClick={saveInfo}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
