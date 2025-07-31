import React from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Todo } from "./Todo/Todo";

export function Todos({ todos }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="todos">
      <Container>
        <div className="block">
          {todos.map((t) => (
            <Todo key={t.id} t={t} />
          ))}
        </div>
        <div className="goback" onClick={goBack}>
          go Back
        </div>
      </Container>
    </Maincontainer>
  );
}
