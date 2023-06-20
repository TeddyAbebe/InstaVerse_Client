import React from "react";
import { Layout } from "antd";
import Home from "./Components/Home";
import styles from "./styles";
import AppBar from "./Components/AppBar/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "./Components/AuthForm/AuthForm";

const { Footer } = Layout;

const App = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <BrowserRouter>
      <Layout style={styles.layout}>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authform" element={<AuthForm />} />
        </Routes>
        <Footer style={styles.footer}>
          {date} :{" "}
          <b>
            <i>InstaVerse</i>
          </b>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
