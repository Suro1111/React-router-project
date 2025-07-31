import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/react.svg";

import style from "./PhotoInfo.module.css";

export function PhotoInfo({ photos }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { id } = useParams();
  const photoInfo = photos.find((p) => p.id == id);
  return (
    <div className={style.box}>
      <h3>{photoInfo.id}</h3>
      <img src={logo} alt="img" />
      <h4>{photoInfo.title}</h4>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
