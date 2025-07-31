import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Notefound.module.css";

export function Notefound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.noteFound}>
      <h2>NOT FOUND 404</h2>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
