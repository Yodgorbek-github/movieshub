// git remote remove origin
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Search from './Routes/Search';
import Movies from './Routes/movies';
import Trending from './Routes/trending';
import TvSeries from './Routes/tvSeries';
import NotFoundPage from './Routes/notFoundPage';
import { Box } from "@mui/material";

// Layout for pages with Header and Footer
const MainLayout = () => (
  <>
    <Header />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
);

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Trending />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/tvSeries",
        element: <TvSeries />
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
