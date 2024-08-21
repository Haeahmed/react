import React, { useContext, useEffect, useState } from "react";
import Flex from "../Flex/Flex";
import "./CardTypeProduct.css";
import {
  BiHeart,
  BiSearch,
  BiSolidShareAlt,
  BiSolidShoppingBags,
  BiSolidStar,
  BiStar,
} from "react-icons/bi";
import BigButton from "../BigButton/BigButton";
import { SelectedItem } from "../../Context/ContextItemSelected";
import Swal from "sweetalert2";

export default function CardTypeProduct(props) {
  const [displayHeart, setDisplayHeart] = useState("none");
  const [displayShare, setDisplayShare] = useState("none");
  const [displaySearch, setDisplayShearch] = useState("none");
  const [colorContent, setColorContent] = useState("black");
  const [displayButton, setDisplayButton] = useState("none");

  return (
    <Flex
      key={props.key}
      onMouseOver={() => {
        setDisplayButton("flex");
      }}
      onMouseLeave={() => {
        setDisplayButton("none");
      }}
      className={"DetailsCard"}
      boxShadow={props.boxShadow}
      backgroundColor={props.backgroundColor}
    >
      <img className="photo" src={props.img} alt="" />
      <h1 style={{ color: `${colorContent}` }} className="h1DetailsCard">
        {props.content}
      </h1>
      <Flex className={"stars"}>
        <Flex>
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiStar />
        </Flex>
        <h3 style={{ color: "#7a7a7a" }}>{props.price}</h3>
      </Flex>
      <Flex className={"rightCircle"}>
        <p
          onMouseLeave={() => {
            setColorContent("black");
            setDisplayHeart("none");
          }}
          onMouseOver={() => {
            setColorContent("#01e281");
            setDisplayHeart("flex");
          }}
          style={{
            display: `${displayHeart}`,
            transform: "translateX(-145px)",
            backgroundColor: `#01e281`,
            color: `#173850`,
            borderRadius: "30px",
          }}
          className={"innerButtonIcon1"}
        >
          Add to wishlist
        </p>
        <BiHeart
          onMouseLeave={() => {
            setDisplayHeart("none");
            setColorContent("black");
          }}
          onMouseOver={() => {
            setDisplayHeart("flex");
            setColorContent("#01e281");
          }}
          className="icon"
        />

        <p
          onMouseLeave={() => {
            setColorContent("black");
            setDisplayShare("none");
          }}
          onMouseOver={() => {
            setColorContent("#01e281");
            setDisplayShare("flex");
          }}
          style={{
            display: `${displayShare}`,
            transform: "translateX(-145px)",
            backgroundColor: `#01e281`,
            color: `#173850`,
            borderRadius: "30px",
          }}
          className={"innerButtonIcon2"}
        >
          Add to compare
        </p>
        <BiSolidShareAlt
          onMouseLeave={() => {
            setColorContent("black");
            setDisplayShare("none");
          }}
          onMouseOver={() => {
            setColorContent("#01e281");
            setDisplayShare("flex");
          }}
          className="icon"
        />
        <p
          onMouseLeave={() => {
            setColorContent("black");
            setDisplayShearch("none");
          }}
          onMouseOver={() => {
            setColorContent("#01e281");
            setDisplayShearch("flex");
          }}
          style={{
            display: `${displaySearch}`,
            transform: "translateX(-145px)",
            backgroundColor: `#01e281`,
            color: `#173850`,
            borderRadius: "30px",
          }}
          className={"innerButtonIcon3"}
        >
          Quick view
        </p>
        <BiSearch
          onMouseOver={() => {
            setColorContent("#01e281");
            setDisplayShearch("flex");
          }}
          onMouseLeave={() => {
            setColorContent("black");
            setDisplayShearch("none");
          }}
          className="icon"
        />
      </Flex>
      <div className={"bottomButton"}>
          <BigButton
            onClick={props.onClick}
            display={displayButton}
            className={"buttonbottom"}
          >
            <BiSolidShoppingBags />
            Add to card
          </BigButton>
      </div>
    </Flex>
  );
}
