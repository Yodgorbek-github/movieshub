import { Paper, Button, Link } from "@mui/material";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";  
const Footer = () => {
    return (
        <Paper elevation={2} sx={{ backgroundColor: "#39445a", position: "sticky", bottom: 0, width: "100%", display: "flex", justifyContent: "center", gap: 10, flexDirection: "row", color: "white", zIndex: "1000000000" }}>
            <Link href="/" sx={{ textDecoration: "none" }}>
                <Button sx={{ display: "flex", flexDirection: "column", color : "white" }}>
                    <WhatshotIcon />
                    Trending
                </Button>
            </Link>
            <Link href="/movies" sx={{ textDecoration: "none" }}>
                <Button sx={{ display: "flex", flexDirection: "column", color : "white" }}>
                    <MovieIcon />
                    Movies
                </Button>
            </Link>
            <Link href="/tvSeries" sx={{ textDecoration: "none" }}>
                <Button sx={{ display: "flex", flexDirection: "column", color : "white" }}>
                    <TvIcon />
                    TV Series
                </Button>
            </Link>
            <Link href="/search" sx={{ textDecoration: "none" }}>
                <Button sx={{ display: "flex", flexDirection: "column", color : "white" }}>
                    < SearchIcon/>
                    Search
                </Button>
            </Link>
        </Paper>
    );
};

export default Footer;
