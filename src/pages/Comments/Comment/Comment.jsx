import React from "react";

import style from "./Comment.module.css";
import { NavLink } from "react-router-dom";

export function Comment({ c }) {
  return (
    <div className={style.box}>
      <NavLink to={`${c.id}`}>
        <h3>{c.name}</h3>
        <h4>{c.email}</h4>
        <p>{c.body}</p>
      </NavLink>
    </div>
  );
}
