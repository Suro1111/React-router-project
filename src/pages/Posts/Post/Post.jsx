import React from 'react'

import style from "./Post.module.css";
import { NavLink } from 'react-router-dom';

export function Post({p}) {
  return (
    <div className={style.box}>
        <NavLink to={`${p.id}`}>
            <h3>{p.id}</h3>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
        </NavLink>
    </div>
  )
}
