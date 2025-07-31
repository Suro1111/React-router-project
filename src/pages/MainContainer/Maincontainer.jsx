import React from 'react'

export function Maincontainer(props) {
  return (
    <main>
        <section id={props.id}>
            {props.children}
        </section>
    </main>
  )
}
