import React from "react";
import { Link } from "react-router-dom";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import styles from "./styles";
import Logo from "../../Images/logo.png";

const { Title } = Typography;
const { Header } = Layout;

export default function AppBar() {
  const user = null;
  return (
    <Header style={styles.header}>
      <Link to="/">
        <div style={styles.homeLink}>
          <Image style={styles.image} preview={false} src={Logo} />
          &nbsp;
          <Title style={styles.title}>InstaVerse</Title>
        </div>
      </Link>

      {!user ? (
        <Link to="/authform">
          <Button htmlType="button" style={styles.login}>
            Log In
          </Button>
        </Link>
      ) : (
        <div style={styles.userInfo}>
          <Avatar styles={styles.avatar} alt="username" size="large">
            U
          </Avatar>
          <Title style={styles.title} level={4}>
            Jhon Doe
          </Title>
          <Button htmlType="button">Log Out</Button>
        </div>
      )}
    </Header>
  );
}
