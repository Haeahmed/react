import React, { useState } from "react";
import Flex from "../Flex/Flex";
import './CardProduct.css'
export default function CardProduct(props) {
    const [animationPhoto, setAnimationPhoto] = useState(false)

  return (
    <Flex
      onMouseOver={() => {
        setAnimationPhoto(true);
      }}
      onMouseLeave={() => {
        setAnimationPhoto(false);
      }}
      className="cardProducts"
      boxShadow={props.boxShadow}
      width={props.width}
      background={props.background}
      height={props.height}
      padding={props.padding}
    >
      <img
        style={{
          transform: animationPhoto ? "rotateY(180deg)" : "rotateY(-180deg)",
        }}
        src={props.img}
        alt=""
      />
      <Flex className={"flexCardProd"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"30px"}>
      <h1 className="h1Card" style={{color: `${props.colorH1}`, lineHeight: "normal"}}>{props.text}</h1>
      <h4 className="h4Card" style={{color: "#01e281", fontSize: "25px", fontWeight: "400"}}>{props.Off}</h4>
      </Flex>
    </Flex>
  );
}
