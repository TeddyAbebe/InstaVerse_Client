import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import styles from "./styles";
import Logo from "../../Images/logo.png";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../Constants/actionTypes";
import decode from "jwt-decode";

const { Title } = Typography;
const { Header } = Layout;

export default function AppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    navigate("/authform");
    setUser(null);
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, logout, user?.token]);

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
            {user?.result?.username?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Title style={styles.title} level={4}>
            {user?.result?.username}
          </Title>
          <Button onClick={logout} htmlType="button">
            Log Out
          </Button>
        </div>
      )}
    </Header>
  );
}
