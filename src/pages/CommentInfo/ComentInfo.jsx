import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./CommentInfo.module.css";

export function ComentInfo({ comments }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const albumInfo = comments.find((c) => c.id == id);
  return (
    <div className={style.box}>
      <h3>{albumInfo.name}</h3>
      <h4>{albumInfo.email}</h4>
      <p>{albumInfo.body}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
