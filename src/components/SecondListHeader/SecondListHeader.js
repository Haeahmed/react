import React from "react";
import "./SecondListHeader.css";
import Flex from "../Flex/Flex";
import { BiLinkAlt, BiSolidFolder } from "react-icons/bi";
import { BsFillTagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Category, TopTags } from "../../data";
export default function SecondListHeader(props) {
  return (
    <Flex
      transform={props.transform}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className="listHeader"
      display={props.displayList}
    >
      <Flex className={"list"}>
        <h1>Category</h1>
        <ul>
          {Category.map((pro) => {
            return (
              <Link
                to={`/shop/${pro.product}`}
              >
                <li key={pro.id}>
                  <BiSolidFolder className="iconList" />
                  {pro.product}
                </li>
              </Link>
            );
          })}
        </ul>
      </Flex>
      <span className="BigLine"></span>
      <Flex className={"list"}>
        <h1>Top Tags</h1>
        <ul>
          {TopTags.map((pro) => {
            return (
              <Link to={`/shop/${pro.product}`}>
                <li>
                  <BsFillTagFill className="iconList" />
                  {pro.product}
                </li>
              </Link>
            );
          })}
        </ul>
      </Flex>
      <span className="line"></span>
      <Flex className={"list"}>
        <h1>Quick Access</h1>
        <ul>
          <li>
            <BiLinkAlt className="iconList" /> About
          </li>
          <li>
            <BiLinkAlt className="iconList" /> FAQ
          </li>
          <li>
            <BiLinkAlt className="iconList" /> My Account
          </li>
          <li>
            <BiLinkAlt className="iconList" /> Orders
          </li>
          <li>
            <BiLinkAlt className="iconList" /> Downloads
          </li>
          <li>
            <BiLinkAlt className="iconList" /> Lost Password
          </li>
        </ul>
      </Flex>
    </Flex>
  );
}
