import React from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { User } from "./User/User";

export function Users({ users }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="users">
      <Container>
        <div className="block">
          {users.map((u) => (
            <User key={u.id} u={u} />
          ))}
        </div>
        <div className="goback" onClick={goBack}>
          go Back
        </div>
      </Container>
    </Maincontainer>
  );
}
