import React from "react";

import { NavLink } from "react-router-dom";

import style from "./Album.module.css";

export function Album({ a }) {
  return (
    <div className={style.box}>
      <h2>{a.id}</h2>
      <NavLink to={`${a.id}`}>
        <h3>{a.title}</h3>
      </NavLink>
    </div>
  );
}
