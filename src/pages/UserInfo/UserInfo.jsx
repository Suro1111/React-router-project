import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./UserInfo.module.css";

export function UserInfo({ users }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${users}/${id}`)
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
      <h3>{data.name}</h3>
      <h3>{data.username}</h3>
      <h5>{data.email}</h5>
      <p>{data.phone}</p>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </div>
  );
}
