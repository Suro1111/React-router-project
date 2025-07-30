import React from 'react'

import "../../assets/global/global.scss";

export function Container(props) {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}
