import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import style from "./AlbumInfo.module.css";

export function AlbumInfo({ albums }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${albums}/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.box}>
      {data.length == 0 ? <h2>Loading...</h2> : ""}
      <h2>{data.title}</h2>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
