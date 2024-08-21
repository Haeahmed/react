import React from "react";
import './LinksFooter.css'
import Flex from "../Flex/Flex";
import { BiLinkAlt } from "react-icons/bi";
export default function LinksFooter(props) {
  return (
    <Flex className={"linkFooter"}>
      <BiLinkAlt className="iconLink" />
      <p>{props.content}</p>
    </Flex>
  );
}
