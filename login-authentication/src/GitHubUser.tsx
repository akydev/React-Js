import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IGitHubUsers } from "./interface/IGitHubUsers";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

export default function GitHubUser() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [followersData, setFollowerData] = useState<IGitHubUsers[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/followers?per_page=100`
      );
      setFollowerData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchFollowing = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/following?per_page=100`
      );
      //   console.log("Following Data", response.data);
      return response.data;
    } catch (error) {
      console.log("Error fetching following data:", error);
    }
  };

  const totalPages = Math.ceil(followersData.length / itemsPerPage);
  const paginateData = followersData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  const handleClickFollower = (username: string) => {
    navigate(`/github/${username}/followers`);
  };

  const handleClickFollowing = async (username: string) => {
    const followingData = await fetchFollowing(username);
    // Optionally, you can save this data in state or handle it in some other way
    // For now, let's just navigate to a new route
    navigate(`/github/${username}/following`, { state: { followingData } });
  };
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center" marginTop="30px">
        {paginateData.map((value) => {
          return (
            <Grid2 key={value.id}>
              <Card sx={{ maxWidth: 255 }}>
                <CardMedia
                  component="img"
                  alt={value.login}
                  image={value.avatar_url}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {value.login}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardContent>
                  <Button
                    size="small"
                    onClick={() => handleClickFollower(value.login)}
                  >
                    Followers
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleClickFollowing(value.login)}
                  >
                    Following
                  </Button>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <a href={value.html_url} target="_blank">
                    <Button size="small">View More</Button>
                  </a>
                </CardActions>
              </Card>
            </Grid2>
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
      </Grid2>
    </Container>
  );
}
