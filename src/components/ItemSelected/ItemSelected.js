import React from 'react'
import Flex from '../Flex/Flex'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import './ItemSelected.css'
export default function ItemSelected(props) {
  return (
    <Flex display={props.display} key={"prps.key"} className={`${props.className} item`}>
    <img className='imgItem' src={props.img} alt="" />
    <Flex display={"flex"} flexDirection={"column"}>
    <Link to={`/${props.text}`}>
    <Title fontSize={"20px"} content={props.text}/>
    </Link>
    <h5>{props.price}</h5>
    </Flex>
    <h3 onClick={props.onClick} className='close'>x</h3>
  </Flex>
  )
}
