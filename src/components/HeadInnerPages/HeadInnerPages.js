import React from 'react'
import Flex from '../Flex/Flex'
import Title from '../Title/Title'
import { BiArrowToRight, BiSolidHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './HeadInnerPages.css'
export default function HeadInnerPages(props) {
  return (
    <>
    <Flex className={"headerCheckout"}>
        <Title fontWeight={"400"} color={"#173850"} content={props.namePage} />
        <Flex
          width={"300px"}
          display={"flex"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Link to="/react" style={{ color: "#173850" }}>
            <BiSolidHome className="iconHome" />
          </Link>
          <BiArrowToRight className="arrowRight" />
          <Title
            fontWeight={"400"}
            color={"#173850"}
            fontSize={"20px"}
            content={props.namePage}
          />
        </Flex>
      </Flex>
      <Flex
        marginTop={"100px"}
        paddingLeft={"250px"}
        width={"90%"}
        gap={"50px"}
        display={props.display}
        alignItems={"center"}
      >
        <Flex
          opacity={"0.5"}
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
        >
          <span className="number">1</span>
          <Title
            fontWeight={"400"}
            fontSize={"35px"}
            content={"Shopping Cart"}
          />
        </Flex>
        <BiArrowToRight className="arrowch" />
        <Flex display={"flex"} alignItems={"center"} gap={"30px"}>
          <span className="number">2</span>
          <Title
            fontWeight={"400"}
            fontSize={"35px"}
            content={"Checkout Details"}
          />
        </Flex>
        <BiArrowToRight className="arrowch" />
        <Flex
          opacity={"0.5"}
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
        >
          <span className="number">3</span>
          <Title
            fontWeight={"400"}
            fontSize={"35px"}
            content={"Order Complete"}
          />
        </Flex>
      </Flex>
    </>
  )
}
