import React from 'react'
import './BigButton.css'
export default function BigButton(props) {
  return (
    <button onClick={props.onClick} style={{display: `${props.display}`}} className={`${props.className} giftButton`}>
    {props.children}
    </button>
  )
}
