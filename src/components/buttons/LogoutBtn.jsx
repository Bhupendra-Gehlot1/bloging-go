import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutBtnHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };
  return <button onClick={logoutBtnHandler}>LogoutBtn</button>;
}

export default LogoutBtn;
