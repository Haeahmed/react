import React from "react";
import Flex from "../Flex/Flex";
import CardProduct from "../CardProduct/CardProduct";
import './FirstListHeader.css'
export default function FirstListHeader(props) {
  return (
    <Flex onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className="listCards" display={props.display}>
      <CardProduct
        background={"none"}
        width={"280px"}
        boxShadow={"none"}
        colorH1={"white"}
        height={"350px"}
        img={
          "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png"
        }
        text={"Fishes & Raw Meats"}
        Off={"%20 OFF"}
      />
      <CardProduct
        background={"none"}
        width={"280px"}
        boxShadow={"none"}
        colorH1={"white"}
        height={"350px"}
        Off={"%50 OFF"}
        img={
          "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s2.png"
        }
        text={"Fruits & Vegetables"}
      />
      <CardProduct
        width={"260px"}
        background={"none"}
        boxShadow={"none"}
        colorH1={"white"}
        height={"350px"}
        Off={"%25 OFF"}
        img={
          "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s3.png"
        }
        text={"Breads & Sweats"}
      />
      <CardProduct
        width={"252px"}
        background={"none"}
        boxShadow={"none"}
        colorH1={"white"}
        height={"350px"}
        Off={"%60 OFF"}
        img={
          "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s4.png"
        }
        text={"Milks & Proteins"}
      />
      <CardProduct
        width={"260px"}
        background={"none"}
        boxShadow={"none"}
        colorH1={"white"}
        height={"350px"}
        Off={"%66 OFF"}
        img={
          "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s6.png"
        }
        text={"Ready touse Foods"}
      />
    </Flex>
  );
}
