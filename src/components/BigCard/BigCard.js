import React from 'react'
import './BigCard.css'
import BigButton from '../BigButton/BigButton'
import { BiArrowToRight } from 'react-icons/bi'
export default function BigCard(props) {
  return (
    <div className={`${props.className} BigCard`} style={{backgroundImage: `url(${props.image}), linear-gradient(${props.linear})`, textAlign: `${props.textAlign}`, width: `${props.width}`, height: `${props.height}`, transform: `${props.transform}`, backgroundPosition: `${props.backgroundPosition}`, paddingTop: `${props.paddingTop}`, paddingRight: `${props.paddingRight}`, paddingLeft: `${props.paddingLeft}`}}>
            <h3 className="tallCardH3">{props.h3}</h3>
            <h1 className="tallCardH1">{props.h1}</h1>
            <BigButton className={`${props.classNameButton} shopNow`}>
               <a href="/">SHOP NOW </a>
                <BiArrowToRight fontSize={"30px"} />
            </BigButton>
        </div>
  )
}
