import { NavLink } from "react-router-dom";

import logo from "../../../assets/react.svg";

import style from "./Photo.module.css";

export function Photo({ p }) {
  return (
    <div className={style.box}>
      <NavLink to={`${p.id}`}>
        <h3>{p.id}</h3>
        <img src={logo} alt="img" />
        <h4>{p.title}</h4>
      </NavLink>
    </div>
  );
}
