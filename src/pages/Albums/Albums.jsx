import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Album } from "./Album/Album";

import style from "./Albums.module.css";

export function Albums({ albums }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(albums)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="albums">
      <Container>
        <div className="block">
          {data.length == 0 ? <h2>Loading...</h2> : ""}
          {data.map((a) => (
            <Album key={a.id} a={a} />
          ))}
        </div>
      </Container>
      <div className="goback" onClick={goBack}>
        go Back
      </div>
    </Maincontainer>
  );
}
