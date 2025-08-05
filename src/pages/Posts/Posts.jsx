import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";
import { Post } from "./Post/Post";

export function Posts({ posts }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(posts)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="posts">
      <Container>
        <div className="block">
          {data.length == 0 ? <h2>Loading</h2> : ""}
          {data.map((p) => (
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
