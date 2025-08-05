import React, { useEffect, useState } from "react";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Comment } from "./Comment/Comment";
import { useNavigate } from "react-router-dom";

import style from "./Comments.module.css";

export function Comments({ comments }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(comments)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="comments">
      <Container>
        <div className="block">
          {data.length == 0 ? <h3>Loading...</h3> : ""}
          {data.map((c) => (
            <Comment key={c.id} c={c} />
          ))}
        </div>
        <div className="goback" onClick={goBack}>
          go Back
        </div>
      </Container>
    </Maincontainer>
  );
}
