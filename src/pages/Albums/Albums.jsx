import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Maincontainer } from '../MainContainer/Maincontainer';
import { Container } from '../Container/Container';
import { Album } from './Album/Album';

import style from "./Albums.module.css";

export function Albums({albums}) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
   <Maincontainer id="albums">
        <Container>
          <div className="block">
            {albums.map(a => <Album key={a.id} a={a}/>)}
          </div>
        </Container>
        <div className="goback" onClick={goBack}>go Back</div>
   </Maincontainer>
  )
}
