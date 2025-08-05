import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/react.svg";

import style from "./PhotoInfo.module.css";

export function PhotoInfo({ photos }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${photos}/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { id } = useParams();
  return (
    <div className={style.box}>
      <h3>{data.id}</h3>
      {data.length == 0 ? <h3>Loading...</h3> : <img src={logo} alt="img" />}
      <h4>{data.title}</h4>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
