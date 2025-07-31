import React from "react";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Comment } from "./Comment/Comment";
import { useNavigate } from "react-router-dom";


import style from "./Comments.module.css";

export function Comments({ comments }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="comments">
      <Container>
        <div className="block">
          {comments.map((c) => (
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
