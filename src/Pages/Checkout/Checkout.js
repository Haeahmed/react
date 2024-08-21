import React, { useState } from "react";
import "./Checkout.css";
import Title from "../../components/Title/Title";
import Swal from "sweetalert2";
import { BiArrowToRight, BiSolidCoupon, BiSolidHome } from "react-icons/bi";
import Flex from "../../components/Flex/Flex";
import { Link } from "react-router-dom";
import LeftTableCheckout from "../../components/LeftTableCheckout/LeftTableCheckout";
import RightTableCheckout from "../../components/RightTableCheckout/RightTableCheckout";
import HeadInnerPages from "../../components/HeadInnerPages/HeadInnerPages";
export default function Checkout() {
  const [valueInput, setValueInput] = useState([]);
  return (
    <Flex className="Checkout">
      <HeadInnerPages display={"flex"} namePage={"Checkout"} />
      <Flex className={"sectionCode"}>
        <BiSolidCoupon className="codeSquare" />
        <Flex
          className={"question"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Title
            fontWeight={"400"}
            fontSize={"30px"}
            content={"Have a coupon?"}
          />
           {/* اظهار رسالة عند ادخال الكوبون  باستخدام مكتبة SweetAlert من JavaScript */}
          <h2
            onClick={() => {
              return Swal.fire({
                title: "Enter your coupon",
                input: "number",
                inputValue: "12345",
                confirmButtonColor: "#01e281",
                inputAttributes: {
                  autocapitalize: "off",
                },
                showCancelButton: true,
                confirmButtonText: "Apply coupon",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire("Coupon is confirmed", "", "success");
                } else if (! result.isConfirmed) {
                  Swal.fire("Coupon is not confirmed");
                }
              });
            }}
            className="buttonCode"
          >
            Click here to enter your code
          </h2>
        </Flex>
      </Flex>
      <Flex
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        width={"100%"}
      >
        <LeftTableCheckout />
        <RightTableCheckout />
      </Flex>
    </Flex>
  );
}
