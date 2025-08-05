import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { User } from "./User/User";

export function Users({ users }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(users)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="users">
      <Container>
        <div className="block">
          {data.length == 0 ? <h2>Loading...</h2> : ""}
          {data.map((u) => (
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
