import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Todo } from "./Todo/Todo";

export function Todos({ todos }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(todos)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="todos">
      <Container>
        <div className="block">
          {data.length == 0 ? <h3>Loading...</h3> : ""}
          {data.map((t) => (
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
