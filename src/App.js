import React from "react";
import { Layout, Image, Typography } from "antd";
import Logo from "./Images/logo.png";
import Home from "./Components/Home";
import Story from "./Components/Story";
import styles from "./styles";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width={45} preview={false} src={Logo} />
        &nbsp;
        <Title style={styles.title}>InstaVerse</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>2021 Instaverse</Footer>
    </Layout>
  );
};

export default App;
