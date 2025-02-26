import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Movie from "./routes/Movie.jsx";
import ErrorPage from "./routes/Errorpage.jsx";
import Account from "./routes/Account.jsx";
import { useSelector } from "react-redux";
import createAppTheme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import './App.css'

const App = () => {
  const isLight = useSelector((state) => state.isLight);

  // Создаем тему через useMemo для оптимизации
  const theme = useMemo(() => createAppTheme(isLight), [isLight]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          paddingTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "all 0.3s ease-in-out", // Плавный переход всей страницы
        }}
      >
        <Router basename={ import.meta.env.BASE_URL }>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="movie/:movieId" element={<Movie />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
