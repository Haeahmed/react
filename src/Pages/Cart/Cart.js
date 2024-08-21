import React from "react";
import "./Cart.css";
import HeadInnerPages from "../../components/HeadInnerPages/HeadInnerPages";
import Flex from "../../components/Flex/Flex";
import Title from "../../components/Title/Title";
import TopBarBox from "../../components/TopBarBox/TopBarBox";
import CardTypeProduct from "../../components/CardTypeProduct/CardTypeProduct";
import BigButton from "../../components/BigButton/BigButton";
export default function Cart() {
  return (
    <div className="Cart">
      <HeadInnerPages display={"flex"} namePage={"Cart"} />
      <table className="tableItems">
        <thead>
          <tr key="">
            <td></td>
            <td></td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          <tr key="">
            <td className="closeItem">
              <span className="deleteItem">x</span>
            </td>
            <td>
              <img
                className="img"
                src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr3-600x600.jpg"
                alt=""
              />
            </td>
            <td>
              <Flex>
                <Title
                  className={"textLink"}
                  fontSize={"25px"}
                  content={"The Sparkling Mineral Water"}
                />
                <h5>SKU: SKU_1194</h5>
              </Flex>
            </td>
            <td>$99</td>
            <td>
              <Flex className={"decIncNumber"}>
                <span className="circle">-</span>
                <input type="number" className="inputNumber" />
                <span className="circle">+</span>
              </Flex>
            </td>
            <td>$79</td>
          </tr>
        </tbody>
      </table>
      <Flex width={"100%"} display={"flex"} alignItems={"start"} gap={'50px'}>
      <Flex className={"leftBox"}>
        <TopBarBox title={"You may be interested in ..."} />
        <Flex className={"cards"}>
          <CardTypeProduct
            backgroundColor={"white"}
            boxShadow={"none"}
            price={"$35"}
            content={"Flash Spray Wipe Done"}
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr7-600x600.jpg"
            }
          />
          <CardTypeProduct
            backgroundColor={"white"}
            boxShadow={"none"}
            price={"$44"}
            content={"Picard Asparagus Morel"}
            img={
              "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr12-600x600.jpg"
            }
          />
        </Flex>
      </Flex>
      <Flex className={"rightBox"}>
        <TopBarBox title={"Cart totals"} />
        <Flex display={"flex"} flexDirection={"column"} width={"90%"}>
          <Flex className={"row"}>
            <h3>Subtotal</h3>
            <h4>$245</h4>
          </Flex>
          <Flex className={"row"}><h3>Total</h3><h2>$245</h2></Flex>
        </Flex>
        <BigButton className={"butn"}>Proceed to checkout</BigButton>
      </Flex>
      </Flex>
    </div>
  );
}
