import React, { FormEvent, useState } from "react";
import { FormControl, Grid, Input, InputLabel, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/authenticate", data)
      .then((y) => {
        localStorage.setItem("token", y.data.jwtToken);
        nav("/Account");
      })
      .catch((y) => {
        // console.log("error");
        console.log(y);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input name="email" type="email" onChange={handleInput} />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" onChange={handleInput} />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
