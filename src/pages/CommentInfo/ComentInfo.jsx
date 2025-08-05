import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./CommentInfo.module.css";

export function ComentInfo({ comments }) {
  const [commentInfo, setCommentInfo] = useState([]);
  useEffect(() => {
    fetch(`${comments}/${id}`)
      .then((res) => res.json())
      .then((res) => setCommentInfo(res));
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.box}>
      {commentInfo.length == 0 ? <h3>Loading...</h3> : ""}
      <h3>{commentInfo.name}</h3>
      <h4>{commentInfo.email}</h4>
      <p>{commentInfo.body}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
