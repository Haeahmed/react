import React from 'react'
import './Title.css'
export default function Title(props) {
  return (
    <h1 className={`${props.className} h1`} style={{color: `${props.color}`, fontSize: `${props.fontSize}`, fontWeight: `${props.fontWeight}`}}>{props.content}</h1>
  )
}
