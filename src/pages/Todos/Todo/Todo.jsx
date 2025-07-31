import React from "react";

import style from "./Todo.module.css";

export function Todo({ t }) {
  return (
    <label className={style.box}>
      <input
        type="checkbox"
        checked={t.completed}
        onChange={() => alert(t.id)}
      />
      {t.title}
    </label>
  );
}
