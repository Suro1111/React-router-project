import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./UserInfo.module.css";

export function UserInfo({ users }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const userInfo = users.find((u) => u.id == id);
  return (
    <div className={style.box}>
      <h3>{userInfo.id}</h3>
      <h3>{userInfo.name}</h3>
      <h3>{userInfo.username}</h3>
      <h5>{userInfo.email}</h5>
      <p>phone: {userInfo.phone}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
