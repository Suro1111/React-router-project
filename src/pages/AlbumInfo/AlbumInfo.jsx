import React from 'react'
import { useParams } from 'react-router-dom'


import style from "./AlbumInfo.module.css"

export function AlbumInfo({albums}) {
    const {id} = useParams();
    const albumInfo = albums.find(a => a.id == id)
  return (
    <div className={style.box}>
        <h2>{albumInfo.title}</h2>
    </div>
  )
}
