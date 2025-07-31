import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./PostInfo.module.css";

export function PostInfo({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const postInfo = posts.find((p) => p.id == id);
  return (
    <div className={style.box}>
      <h3>{postInfo.id}</h3>
      <h4>{postInfo.title}</h4>
      <p>{postInfo.body}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
