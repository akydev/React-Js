import React, { useEffect, useState } from "react";
import { IGitHubUsers } from "./interface/IGitHubUsers";
import axios from "axios";
import {
  Container,
  Grid,
  Grid2,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import GitHubUsers from "./GitHubUsers";
import { useNavigate } from "react-router-dom";
import { number } from "yup";

export default function GitHub() {
  const [data, setData] = useState<IGitHubUsers[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    document.title = "GitHub Demo";
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginateData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

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
        {paginateData.map((git, index: number) => {
          return (
            <GitHubUsers hub={git} i={index}>
              This is GitHub Users Information.
            </GitHubUsers>
          );
        })}
        <Grid2 container spacing={3} justifyContent="center">
          <Stack spacing={2} margin={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              color="secondary"
            />
          </Stack>
        </Grid2>
      </Grid>
    </Container>
  );
}
