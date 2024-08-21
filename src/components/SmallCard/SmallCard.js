import React from 'react'
import './SmallCard.css'
export default function SmallCard(props) {
  return (
    <div className="smallCard" style={{backgroundImage: `url(${props.image}),  linear-gradient(${props.linear})`, textAlign: `${props.textAlign}`, backgroundPosition: `${props.backgroundPosition}`}}>
            <h3 className="smallCardH3" style={{color: `${props.colorH3}`}}>{props.h3}</h3>
            <h1 className="smallCardH1" style={{color: `${props.colorH1}`}}>{props.h1}</h1>
    </div>
  )
}
