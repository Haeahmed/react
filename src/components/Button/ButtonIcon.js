import React from 'react'

export default function ButtonIcon(props) {
  return (
    <button className='button' style={{ borderBlockColor: `${props.borderBlockColor}`, color: `${props.color}`, display: `${props.display}`}} type={props.type}>{props.children}</button>
  )
}
