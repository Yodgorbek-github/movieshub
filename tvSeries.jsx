import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Pagination,
  Chip,
} from "@mui/material";
import axios from "axios";

function Movies() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = "ff4563e2385fc37e397db91c09c01981";
  const API_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(`${API_URL}/genre/movie/list`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
          },
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getMovies = async (page) => {
      try {
        const response = await axios.get(`${API_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: page,
          },
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ mb: "70px", p: 2,}}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", xl: "4rem" },
          fontWeight: "light",
          color: "white",
          textAlign: "center",
          letterSpacing: "10px",
          mb: 4,
        }}
      >
        TV SERIES
      </Typography>

      <Box sx={{ mb: 2 }}>
        {genres.map((genre) => (
          <Chip variant="outlined"
            label={genre.name}
            key={genre.id}
            sx={{
              borderRadius: 10,
              bgcolor: '#ddd',
              color: 'black',
              fontSize: '15px',
              p: '4px',
              px: '7px',
              mb: '7px',
              mx: '2.2px',
              '&:hover': {
                bgcolor: '#ccc',
                cursor: 'pointer',
              },
            }}
          />
        ))}
      </Box>

      <Grid container spacing={4} sx={{ gap: "-50px", mt: -3 }}>
        {movies.map((movie) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2.2}
            xl={2.3}
            sx={{ display: "flex", justifyContent: "center" }}
            key={movie.id}
          >
            <Badge
              badgeContent={movie.vote_average}
              color={
                movie.vote_average > 7
                  ? "primary"
                  : movie.vote_average > 6
                  ? "secondary"
                  : "error"
              }
            >
              <Card
                sx={{
                  maxHeight: "370px",
                  maxWidth: "220px",
                  bgcolor: "#282c34",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  boxShadow: 3,
                  p: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  sx={{
                    height: 250,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 1,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      letterSpacing: "1.5px",
                      textAlign: "center",
                      mb: 1,
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "thin",
                        fontSize: "15px",
                        letterSpacing: "1.5px",
                      }}
                    ></Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "thin",
                        fontSize: "15px",
                        letterSpacing: "2.5px",
                      }}
                    >
                      {movie.release_date}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Badge>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 6 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default Movies;
