import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";

import { Photo } from "./Photo/Photo";

import style from "./Photos.module.css";

export function Photos({ photos }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(photos)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="photos">
      <Container>
        <div className="block">
          {data.length == 0 ? <h3>Loading...</h3> : ""}
          {data.map((p) => (
            <Photo key={p.id} p={p} />
          ))}
        </div>
        <div className="goback" onClick={goBack}>
          go Back
        </div>
      </Container>
    </Maincontainer>
  );
}
