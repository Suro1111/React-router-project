import React from "react";
import { NavLink } from "react-router-dom";

import style from "./User.module.css";

export function User({ u }) {
  return (
    <div className={style.box}>
      <NavLink to={`${u.id}`}>
        <h3>{u.id}</h3>
        <h3>{u.name}</h3>
        <h3>{u.username}</h3>
        <h5>{u.email}</h5>
        <p>phone: {u.phone}</p>
      </NavLink>
    </div>
  );
}
