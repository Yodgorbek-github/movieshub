import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Badge } from "@mui/material";

function Movies() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);

    // API kalitingiz
    const API_KEY = "ff4563e2385fc37e397db91c09c01981"; // Bu yerda sizning kalitingiz turadi
    const API_URL = "https://api.themoviedb.org/3";
    // Janrlarni olish
    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setGenres(data.genres); // Janrlar ro'yxatini o'rnatish
            } catch (error) {
                console.error("Janrlarni olishda xatolik:", error);
            }
        };
        getGenres();
    }, []);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Filmlarni olishda xatolik:", error);
            }
        };
        getMovies();
    }, []);

    return (
        <>
            <Box sx={{ mb: '70px', p: 2}}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', xl: '4rem' },
                        fontWeight: 'light',
                        color: 'white',
                        textAlign: 'center',
                        letterSpacing: '10px',
                        mb: 4
                    }}
                >
                    DISCOVER MOVIES
                </Typography>
                {genres.map((button) => (
                    <Button
                        variant="contained"
                        key={button.id}
                        sx={{
                            borderRadius: 10,
                            bgcolor: '#ddd',
                            color: 'black',
                            fontSize: '10px',
                            width: 'auto',
                            height: 'auto',
                            p: '4px',
                            px: '7px',
                            mb: '7px',
                            mx: '2.2px',
                            '&:hover': {
                                bgcolor: '#ccc',
                            },
                        }}
                    >
                        {button.name}
                    </Button>
                ))}

        <Grid container spacing={4} sx={{ gap: '-50px' , mt: -3}}>
          {movies.map((movie) => (
              <Grid
                item
                xs={6}
              sm={4}
              md={3}
              lg={2.2}
              xl={2.3}
                sx={{ display: 'flex', justifyContent: 'center'}}
                key={movie.vote_average}
              >
                <Badge
                  badgeContent=
                  {movie.vote_average}
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
                      bgcolor: '#282c34',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'white',
                        color: 'black',
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
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 1,
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h4"
                        sx={{ fontSize: '20px', letterSpacing: '1.5px', textAlign: 'center', mb: 1 }}
                      >
                        {movie.title}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 'thin', fontSize: '15px', letterSpacing: '1.5px' }}
                        >
                            
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 'thin', fontSize: '15px', letterSpacing: '2.5px' }}
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
            </Box>
        </>
    );
}

export default Movies;
