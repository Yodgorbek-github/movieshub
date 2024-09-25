import React from "react";
import movies from "./movies.json";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Badge } from "@mui/material";

function Movies() {
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
          TRENDING TODAY
        </Typography>
        
        <Grid container spacing={4} sx={{ gap: '-50px' }}>
          {movies.movies.map((film) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2.2}
              xl={2.3}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              key={film.name}
            >
              <Badge
                badgeContent={film.rating}
                color={
                  film.rating > 8.9
                    ? "primary"       // 8.9 va undan yuqori uchun primary
                    : film.rating > 8.5
                    ? "secondary"     // 8 dan yuqori lekin 8.9 dan past uchun secondary
                    : "error"         // 8 dan past uchun error (yoki siz tanlagan rang)
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
                    image={film.img}
                    alt={film.name}
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
                      sx={{
                        fontSize: '20px',
                        letterSpacing: '1.5px',
                        textAlign: 'center',
                        mb: 1,
                      }}
                    >
                      {film.name}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 'thin',
                          fontSize: '15px',
                          letterSpacing: '1.5px',
                        }}
                      >
                        {film.type}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 'thin',
                          fontSize: '15px',
                          letterSpacing: '2.5px',
                        }}
                      >
                        {film.year}
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
