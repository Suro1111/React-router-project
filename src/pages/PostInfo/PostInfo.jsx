import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./PostInfo.module.css";

export function PostInfo({ posts }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${posts}/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.box}>
      {data.length == 0 ? <h2>Loading....</h2> : ""}
      <h3>{data.id}</h3>
      <h4>{data.title}</h4>
      <p>{data.body}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
