import React from "react";
import "./Footer.css";
import Title from "../../components/Title/Title";
import TitleShadow from "../../components/TitleShadow/TitleShadow";
import BigButton from "../../components/BigButton/BigButton";
import Flex from "../../components/Flex/Flex";
import ButtonIcon from "../../components/Button/ButtonIcon";
import {
  BiEnvelope,
  BiEnvelopeOpen,
  BiHeart,
  BiLinkAlt,
  BiLinkExternal,
  BiPhoneCall,
} from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import LinksFooter from "../../components/LinksFooter/LinksFooter";
import { Links } from "../../data";
export default function Footer() {
  return (
    <div className="Footer">
      <Flex className={"topFooter"}>
        <Flex display={"flex"} alignItems={"center"} gap={"5px"}>
          <Title fontSize={"50px"} color={"white"} content={"Subscribe to"} />
          <TitleShadow fontSize={"50px"} content={" Newsletter"} />
        </Flex>
        <Flex className={"flexInput"}>
          <input type="email" placeholder="Enter your email..." />
          <BigButton className={"buttonSubscribe"}>
            <BiEnvelopeOpen />
            Supscribe
          </BigButton>
        </Flex>
      </Flex>
      <Flex className={"middleFooter"}>
        <Flex className={"square"}>
          <img
            src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/logo-sm.png"
            alt=""
          />
          <h3>
            “Be who you are and say what you feel, because those who mind don't
            matter, and those who matter don't mind.”
          </h3>
          <Flex className={"socialIcons"}>
            <BsFacebook className="soIcon" />
            <BsTwitter className="soIcon" />
            <CiInstagram className="soIcon" />
          </Flex>
        </Flex>
        <Flex className={"square"}>
          <h1>Useful Links</h1>
          <span />
          <Flex display={"flex"} flexDirection={"column"} gap={"5px"}>
            {Links.map((li) => {
              return <LinksFooter key={li.id} content={li.content} />;
            })}
            <Flex className={"linkFooter"}>
              <BiPhoneCall className="iconLink" />
              <p>+12 534 565 896</p>
            </Flex>
            <Flex className={"linkFooter"}>
              <BiEnvelopeOpen className="iconLink" />
              <p>info@xtramarket.com</p>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={"square"}>
            <h1>Interested in a Great Way
           <span style={{color: "#01e281"}}>Make Money?</span></h1>
           <h4>
           A supermarket is a self-service shop offering a wide variety of food, beverages and household products.</h4>
           <BigButton className={"buttonThreeSquare"}>Become a Seller</BigButton>
        </Flex>
      </Flex>
      <Flex className={"bottomFooter"}>
            <h3>With <BiHeart /> by XtraTheme. Copyright © 2024 Xtra Theme</h3>
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/22.png" alt="" />
      </Flex>
    </div>
  );
}
