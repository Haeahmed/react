import React from "react";
import "./RightTableCheckout.css";
import Flex from "../Flex/Flex";
import { BiSolidCoupon } from "react-icons/bi";
import BigButton from "../BigButton/BigButton";
import TopBarBox from "../TopBarBox/TopBarBox";
export default function RightTableCheckout() {
  return (
    <div className="RightTableCheckout">
      
      <TopBarBox title={"Your order"} />
      <table>
        <thead>
          <td>Product</td>
          <td>Subtotal</td>
        </thead>
        <tbody>
          <tr key="">
            <td className="classtd">Aberdeen Angus Burgers × 7</td>
            <td>$140</td>
          </tr>
          <tr key="">
            <td className="classtd">The Sparkling Mineral Water × 1</td>
            <td>$99</td>
          </tr>
          <tr key="">
            <td className="classtd">Ocado Cowboy Steak × 1</td>
            <td>$14</td>
          </tr>
          <tr key="">
            <td className="classtd">Subtotal</td>
            <td>$257</td>
          </tr>
          <tr key="">
            <td className="classtd">Total</td>
            <td>$257</td>
          </tr>
        </tbody>
      </table>
      <Flex className="squareText">
         <p className="textTable">
         Sorry, it seems that there are no available payment methods. Please
          contact us if you require assistance or wish to make alternate
          arrangements.
      <BiSolidCoupon className='codeSquare' />
         </p>
         <hr/>
         <BigButton className={"buttonText"}>
         Place order
         </BigButton>
      </Flex>
    </div>
  );
}
