import React from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Post } from "./Post/Post";

export function Posts({ posts }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="posts">
      <Container>
        <div className="block">
          {posts.map((p) => (
            <Post key={p.id} p={p} />
          ))}
        </div>
        <div className="goback" onClick={goBack}>
          go Back
        </div>
      </Container>
    </Maincontainer>
  );
}
