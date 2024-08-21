import React from "react";
import "./Home.css";
import imageHome from "../../assest/model-1.png";
import Flex from "../../components/Flex/Flex";
import BigButton from "../../components/BigButton/BigButton";
import DetailsBottomBarHome from "../../components/DetailsBottomBarHome/DetailsBottomBarHome";
import SmallCard from "../../components/SmallCard/SmallCard";
import BigCard from "../../components/BigCard/BigCard";
import TitleShadow from "../../components/TitleShadow/TitleShadow";
import Title from "../../components/Title/Title";
import CardProduct from "../../components/CardProduct/CardProduct";
import CardTypeProduct from "../../components/CardTypeProduct/CardTypeProduct";
import { PersonCards, Products } from "../../data";
import CardPersons from "../../components/CardPersons/CardPersons";
export default function Home() {
  return (
    <>
      <div className="Home">
        <Flex
          padding={"50px"}
          className={"leftHome"}
          height={"900px"}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          flexDirection={"column"}
        >
          <TitleShadow content={"XtraSupermarket"} />
          <h1 className="secondH1">Fresher than Ever</h1>
          <p className="paragraph">
            A supermarket is a self-service shop offering a wide variety of
            food, beverages and household products, organized into sections.
          </p>
          <Flex
            display={"flex"}
            alignItems={"center"}
            gap={"50px"}
            width={"max-content"}
            height={"200px"}
          >
            <BigButton className={"buttonHome"}>25% Off Festival</BigButton>
            <BigButton className={"buttonHome2"}>Discover Shop</BigButton>
          </Flex>
        </Flex>
        <div className="rightHome">
          <img src={imageHome} alt="" />
        </div>
      </div>
      <Flex
        className={"bottomBar"}
        display={"flex"}
        alignItems={"center"}
        width={"90%"}
        minHeight={"200px"}
      >
        <DetailsBottomBarHome
          h1={"Free shipping"}
          p={"On all orders over $50.00"}
          img={
            "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-1.png"
          }
        />
        <DetailsBottomBarHome
          h1={"Return for free"}
          p={"Returns are free 3 days"}
          img={
            "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-2.png"
          }
        />
        <DetailsBottomBarHome
          h1={"Secure payment"}
          p={"Your payments 100% safe"}
          img={
            "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-3.png"
          }
        />
        <DetailsBottomBarHome
          h1={"24/7 Support"}
          p={"Contact us anytime want"}
          img={
            "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-2.png"
          }
        />
      </Flex>
      <Flex className={"sectionThreeHome"}>
        <Flex
        className={"flexCardsInSmallScreen"}
          display={"flex"}
          flexDirection={"column"}
          gap={"120px"}
          width={"50%"}
        >
          <Flex
          className={"flexSmallCard"}
            position={"relative"}
            transform={"translateY(-236px)"}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
            width={"100%"}
          >
            <SmallCard
              backgroundPosition={"right bottom"}
              linear={"90deg, #ff3f55, #ff3f55"}
              image={
                "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-2.png"
              }
              h1={"Souces"}
              h3={"50% OFF"}
            />
            <SmallCard
              textAlign={"right"}
              backgroundPosition={"left bottom"}
              colorH3={"#01e281"}
              colorH1={"#173850"}
              linear={"90deg, #f4f9f5, #f4f9f5"}
              image={
                "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-1.png"
              }
              h1={"ALL Chips"}
              h3={"50% OFF"}
            />
            <BigCard
              className={"BigCardTwo"}
              h3={"50% OFF"}
              h1={"Full Fresh Vegetable"}
              transform={"translateX(-1000px)"}
              image={
                "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-3.png"
              }
              linear={"90deg, #122d40, #122d40"}
            />
          </Flex>
        </Flex>
        <BigCard
          h3={"50% OFF"}
          h1={"Sale 58% Off All Fruit Products"}
          textAlign={"start"}
          image={
            "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-4.png"
          }
          linear={"90deg, #01e281, #01e281"}
        />
      </Flex>
      <Flex
        marginBottom={"100px"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        textAlign={"center"}
        width={"100%"}
      >
        <Flex
        className={"titleSectionThree"}
          width={"850px"}
          display={"flex"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Title content={"Discover our"} />
          <TitleShadow content={"Categories"} />
        </Flex>
        <Flex
          marginBottom={"50px"}
          marginTop={"100px"}
          display={"flex"}
          alignItems={"center"}
          gap={"60px"}
          width={"90%"}
          flexWrap={"wrap"}
        >
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png"
            }
            text={"Fishes & Raw Meats"}
          />
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s2.png"
            }
            text={"Fruits & Vegetables"}
          />
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s3.png"
            }
            text={"Breads & Sweats"}
          />
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s4.png"
            }
            text={"Milks & Proteins"}
          />
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s5.png"
            }
            text={"Cleaning Materials"}
          />
          <CardProduct
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s6.png"
            }
            text={"Ready touse Foods"}
          />
        </Flex>
      </Flex>
      <Flex
        className={"sectionForHome"}
        marginBottom={"100px"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        textAlign={"center"}
        width={"100%"}
      >
        <Flex
          width={"93%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex className={"titleSectionFour titleSection"} display={"flex"} alignItems={"center"}>
            <Title content={"Best Seller"} />
            <TitleShadow content={"Products"} />
          </Flex>
          <a href="" style={{ textDecoration: "none" }}>
            <BigButton className={"viewProduct"}>View all Products</BigButton>
          </a>
        </Flex>
        <Flex className={"CardsTypeProduct"}>
          {Products.map((pro) => {
            return (
              <CardTypeProduct
                img={pro.img}
                price={pro.price}
                content={pro.content}
              />
            );
          })}
        </Flex>
      </Flex>
      <Flex className={"forSectionHome"} display={"flex"} alignItems={"center"}>
        <Flex
        className={"leftSectionFor"}
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
        >
          <h6 className="titleSquare">XtraSupermarket</h6>
          <h1 className="descriptionSquare">Faster on Mobile</h1>
          <h4 className="textSquare">
            A supermarket is a self-service shop offering a wide variety of
            food, beverages and household products, organized into sections.
          </h4>
          <Flex className={"applegoogle"}  width={"500px"} display={"flex"} alignItems={"center"} gap={"20px"}>
            <img className="appleStore" src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/btn2.png" alt="" />
            <img className="googlePlay" src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/btn-1.png" alt="" />
        </Flex>
        </Flex>
        <img
        className="mobilePhoto"
          src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/mobile.png"
          alt=""
        />
        
      </Flex>
      <Flex className={"personCards"} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Flex className={"titleSectionFive"} display={"flex"} alignItems={"center"} width={"800px"}>
        <Title content={"Latest"} />
        <TitleShadow content={"News & Blog"} />
        </Flex>
       <Flex display={"flex"} alignItems={"center"} className={"sideBarCard"}>
       {PersonCards.map((per) =>{
        return(
            <CardPersons topText={per.topText} image={per.image} description={per.description} date={per.date}/>
        )
       })}
       </Flex>
      </Flex>
    </>
  );
}
