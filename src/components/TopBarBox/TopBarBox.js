import React from 'react'
import './TopBarBox.css'
import Flex from '../Flex/Flex'
import Title from '../Title/Title'
export default function TopBarBox(props) {
  return (
    <Flex className={"topBar"}>
    <Title color={"#173850"} fontWeight={"900"} fontSize={"25px"} content={props.title} />
  </Flex>
  )
}
