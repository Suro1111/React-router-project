import React from "react";
import { useNavigate } from "react-router-dom";

import { Maincontainer } from "../MainContainer/Maincontainer";
import { Container } from "../Container/Container";

import { Photo } from "./Photo/Photo";

import style from "./Photos.module.css";

export function Photos({ photos }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Maincontainer id="photos">
      <Container>
        <div className="block">
          {photos.map((p) => (
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
