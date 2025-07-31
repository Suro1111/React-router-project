import React from "react";
import { Container } from "../../pages/Container/Container";
import { NavLink } from "react-router-dom";

import style from "./Nav.module.css";

export function Nav({ myData }) {
  return (
    <nav>
      <Container>
        <ul>
          {myData[0].navLink.map((n) => {
            return (
              <li key={n.id}>
                <NavLink to={n.href}>{n.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
