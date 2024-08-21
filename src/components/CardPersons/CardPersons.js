import React, { useState } from 'react'
import Flex from '../Flex/Flex'
import './CardPersons.css'
import { BiLinkAlt } from 'react-icons/bi'
export default function CardPersons(props) {
    const [shadow, setShadow] = useState("none")
   return (
    <Flex onMouseOver={() =>{setShadow("block")}} onMouseLeave={() =>{setShadow('none')}} className={"CardPer"} width={"450px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
    <p className="topPhotoPerson">{props.topText}</p>
  <Flex className={"imgPersonShadow"}>
  <img className="imgPerson" src={props.image} alt="" />
  <span style={{display: `${shadow}`}} className='shadow'>
    <BiLinkAlt />
  </span>
  </Flex>
  
  <Flex display={"flex"} alignItems={"center"}><p className="date">{props.date}</p>........................................................</Flex>
  <h3 className="description">{props.description}</h3>
</Flex>
  )
}
