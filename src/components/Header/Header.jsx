import React from "react";
import { Logo, LogoutBtn, Button } from "../index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    { text: "Home", slug: "/", activeStatus: true },
    { text: "Login", slug: "/Login", activeStatus: !authStatus },
    { text: "Signup", slug: "/", activeStatus: !authStatus },
    { text: "Add Post", slug: "/", activeStatus: authStatus },
    { text: "All Posts", slug: "/", activeStatus: authStatus },
  ];
  return (
    <Header>
      <Logo />
      <ul>
        {navItems.map((item) =>
          item.activeStatus ? (
            <li key={item.text}>
              <Button
                onClick={() => navigate(item.slug)}
                children={item.text}
              />
            </li>
          ) : null
        )}
        {authStatus ? (
          <li>
            <LogoutBtn />
          </li>
        ) : null}
      </ul>
    </Header>
  );
}

export default Header;
