import React, { useEffect, useState } from "react";
import { IGitHubUsers } from "./interface/IGitHubUsers";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
import GitHubUsers from "./GitHubUsers";
import { useNavigate } from "react-router-dom";

export default function GitHub() {
  // const navigate = useNavigate();
  const [data, setData] = useState<IGitHubUsers[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleClickFollower = (username: string) => {
  //   navigate(`/githubusers/${username}/followers`);
  // };
  return (
    <Container>
      <Typography
        sx={{ textTransform: "uppercase" }}
        gutterBottom
        variant="h5"
        component="div"
        mb={4}
      >
        Welcome To GitHub
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {data.map((git: IGitHubUsers, index: number) => {
          return (
            <GitHubUsers hub={git} i={index}>
              This is GitHub Users Information.
            </GitHubUsers>
          );
        })}
      </Grid>
    </Container>
  );
}
