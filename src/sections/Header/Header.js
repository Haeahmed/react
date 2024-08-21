import React, { useState } from "react";
import "./Header.css";
import {
  BiDotsVertical,
  BiGift,
  BiHeart,
  BiPhoneCall,
  BiSearch,
  BiSolidDownArrow,
} from "react-icons/bi";
import Flex from "../../components/Flex/Flex";
import { CiShoppingBasket } from "react-icons/ci";
import Line from "../../components/Line/Line";
import { BsPerson } from "react-icons/bs";
import ButtonIcon from "../../components/Button/ButtonIcon";
import BigButton from "../../components/BigButton/BigButton";
import SecondListHeader from "../../components/SecondListHeader/SecondListHeader";
import FirstListHeader from "../../components/FirstListHeader/FirstListHeader";
import { Link, Outlet } from "react-router-dom";
import ItemSelectedList from "../../components/ItemSelectedList/ItemSelectedList";
import { CgCloseR } from "react-icons/cg";
export default function Header() {
  const [borderCall, setBorderCall] = useState("rgba(175, 174, 174, 0.15)");
  const [colorButtonCall, setColorButtonCall] = useState("white");
  const [translate, setTranslate] = useState("1400px");
  const [displayFList, setDisplayFList] = useState("none");
  const [displayListItem, setDisplayListItem] = useState("none");
  const [listDisplay, setListDisplay] = useState("flex");

  return (
    <div className="Header">
      <Outlet />
      <div className="oneSectionHeader">
       <Link to="/react">
       <img
          style={{ width: "258px" }}
          className="logo"
          src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          alt="XTRA WordPress Theme on Envato Market"
        />
       </Link>
        <p className="centerPara">
          Limited time offer, Buy XTRA theme only <strong>$49</strong>
        </p>
        <a href="/" className="rightButton">
          Download XTRA Theme
        </a>
        <BiDotsVertical onClick={() =>{setListDisplay("flex")}} className="modileIcon" />
      </div>
      <div className="twoSectionHeader">
        <div className="left">
          <img
            src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/logo-sm.png"
            data-src=""
            alt="Supermarket WordPress Theme"
            style={{ width: 400 }}
            className="lazyDone"
          />
          <Line />
          <div className="flex">
            <input
              placeholder="What are you looking for ?"
              className="inputSearch"
              type="search"
            />
            <button type="submit" className="searchButton">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="right">
          <Flex
            className={"flexCallcenter"}
            marginLeft={"100px"}
            width={"300px"}
            height={"200px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            onMouseOver={() => {
              setColorButtonCall("#01e281");
              setBorderCall("#01e281");
            }}
            onMouseLeave={() => {
              setBorderCall("rgba(175, 174, 174, 0.15)");
              setColorButtonCall("white");
            }}
          >
            <ButtonIcon
              className="button"
              borderBlockColor={borderCall}
              color={colorButtonCall}
            >
              <BiPhoneCall />
            </ButtonIcon>
            <Flex
              marginLeft={"10px"}
              display={"flex"}
              flexDirection={"column"}
              width={"200px"}
            >
              <h3 className="ParaCallCenter">Call center</h3>
              <h3 className="mobleNumber">0983-796029</h3>
            </Flex>
          </Flex>
          <Flex
            width={"500px"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <ButtonIcon type={"submit"}>
              <Link to="cart">
              <CiShoppingBasket onMouseOver={() =>{setDisplayListItem("flex")}} onMouseLeave={() =>{setDisplayListItem("none")}}/>
              </Link>
            </ButtonIcon>
            <Line />
            <ButtonIcon type={"submit"}>
              <BiHeart />
            </ButtonIcon>
            <ButtonIcon type={"submit"}>
              <BsPerson />
            </ButtonIcon>
          </Flex>
        </div>
      </div>
            <ItemSelectedList onMouseOver={() =>{setDisplayListItem("flex")}} onMouseLeave={() =>{setDisplayListItem("none")}} display={displayListItem} />

      <div style={{display: `${listDisplay}`}} className="threeSectionHeader">
        <CgCloseR onClick={() =>{setListDisplay('none')}} className="icnCls" />
        <ul className="mainList">
          <Link to="/shop">
          <li>
           New Products
          </li>
          </Link>
          <li>
          Best Sales
            <span>Hot</span>
          </li>
          <li
            onMouseOver={() => {
              setDisplayFList("flex");
            }}
            onMouseLeave={() => {
              setDisplayFList("none");
            }}
            className="selectOne"
          >
            Special Offers <BiSolidDownArrow className="iconArrow" />
          </li>
          <FirstListHeader
            display={displayFList}
            onMouseOver={() => {
              setDisplayFList("flex");
            }}
            onMouseLeave={() => {
              setDisplayFList("none");
            }}
          />
          <li
            className="selectTwo"
            onMouseLeave={() => {
              setTranslate("1400px");
            }}
            onMouseOver={() => {
              setTranslate("0px");
            }}
          >
            Quick Find <BiSolidDownArrow className="iconArrow" />
          </li>
          <SecondListHeader
            onMouseLeave={() => {
              setTranslate("1400px");
            }}
            onMouseOver={() => {
              setTranslate("0px");
            }}
            transform={`translateX(${translate})`}
          />

          <li>
            News
          </li>
          <Link to="/contact">
          <li className="contact">
            Contact
          </li>
          </Link>
        </ul>
        <BigButton>
          <BiGift className="giftIcon" />
          Daily Offers
        </BigButton>
      </div>
      <Flex display={"flex"} className={"bottomLinks"}>
        <Link className="linkSmallScreen" to='/react'>
            Home
        </Link>
        <Link className="linkSmallScreen" to='/faq'>
            FAQ
        </Link>
        <Link className="linkSmallScreen" to='/contact'>
            Contact
        </Link>
        <Link className="linkSmallScreen" to='/products'>
            Products
        </Link>
      </Flex>
    </div>
  );
}
 
