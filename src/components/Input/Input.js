import React from "react";
import './Input.css'
export default function Input(props) {
  return (
    <>
      <label className={`${props.className} label`} htmlFor="name">{props.label}<span>{props.star}</span></label>
      <input onChange={props.onChange} value={props.value} style={{width: `${props.width}`, marginLeft: `${props.marginLeft}`, height: `${props.height}`}} placeholder={props.placeholder} className="input" type={`${props.type}text`} id="name" />
    </>
  );
}
