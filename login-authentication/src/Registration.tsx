import React, { FormEvent, useState } from "react";
import { IRegestration } from "./interface/IRegistration";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues: IRegestration = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export default function Registration() {
  const dp = useNavigate();

  const [data, setData] = useState(initialValues);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "Checkbox" ? checked : value,
    });
  };

  const notify = (d: string) =>
    toast(d, {
      type: "success",
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/register", data)
      .then((y) => {
        notify(y.data.message);
        dp("/");
      })
      .catch((y: string) => {
        notify("Error");
        // console.log(y);
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input name="title" onChange={handleInput} />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input name="firstName" onChange={handleInput} />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input name="lastName" onChange={handleInput} />
          </FormControl>
        </Grid>

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
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              name="confirmPassword"
              type="password"
              onChange={handleInput}
            />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <FormControlLabel
            control={
              <Checkbox
                name="acceptTerms"
                checked={data.acceptTerms}
                onChange={handleInput}
              />
            }
            label="I accept the terms and conditions"
          />
        </Grid>

        <Grid item xs={8}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
