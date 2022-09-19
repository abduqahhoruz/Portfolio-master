import React from "react";
import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import LifeImg from "./pages/lifeImg/lifeImg.jsx";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Contact from "./pages/Contact/Contact";
import ThemeColor from "./components/ThemeColor/themeColor";
function App() {
  return (
    <Container className="mt-3 " maxWidth={"lg"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <div className="main-content container_shadow">
            <Routes>
              <Route path="/" element={<LifeImg />} />
              <Route path="/portfolio" element={<Portfolio />} />

              <Route exact={1} path="/resume" element={<Resume />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="mt-2">
            <Footer />
           
          </div>
          <ThemeColor />  
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
