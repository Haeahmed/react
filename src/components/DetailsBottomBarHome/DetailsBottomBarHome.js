import React from 'react'
import Flex from '../Flex/Flex'
import './DetailsBottomBarHome.css'
export default function DetailsBottomBarHome(props) {
  return (
    <Flex width={"420px"} padding={"0px"} display={"flex"} alignItems={"center"} gap={"20px"}>
          <img
            decoding="async"
            src={props.img}
            data-src=""
            className="img"
            alt=""
          />
          <Flex className={"Title&Discription"}  >
            <h1 className='h1Details'>{props.h1}</h1>
            <p className='paraDetails'>{props.p}</p>
          </Flex>
        </Flex>
  )
}
