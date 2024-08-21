import React from 'react'
import './LeftTableCheckout.css'
import Flex from '../Flex/Flex'
import Title from '../Title/Title'
import Input from '../Input/Input'
import TopBarBox from '../TopBarBox/TopBarBox'
export default function LeftTableCheckout() {
  return (
    <div className='LeftTableCheckout'>
      <TopBarBox title={"Billing details"} />
      <Flex display={"flex"} marginTop={"50px"} alignItems={"center"} gap={"10px"} flexDirection={"column"} width={"97%"}>
      <Flex display={"flex"} alignItems={"center"} gap={"0px"} marginRight={"40px"} >
        <Input star={"*"} label={"First Name"} />
        <Input star={"*"} label={"Last Name"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} className={"bigLabel"} label={"Company name (optional)"} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Country / Region"} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Street address"} placeholder={"House number and street name"} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Street address"} placeholder={"Apartment suite, unit, etc. (optional)"} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={""} className={"bigLabel"} label={""} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Town / City"} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"State"} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"ZIP Code"} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Phone"} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      <Flex width={"90%"}>
      <Input height={"80px"} star={"*"} className={"bigLabel"} label={"Email address"} placeholder={""} width={"100%"} marginLeft={"50px"} />
      </Flex>
      </Flex>
      <Flex marginRight={"500px"} display={"flex"} alignItems={"start"} flexDirection={"column"}>
      <Title fontSize={"35px"} content={"Additional information"} />
      <hr className='hr'/>
      <p className='paragreph'>Order notes (optional)</p>
      </Flex>
      <textarea className='textArea' placeholder='Notes about your order, e.g. special notes for delivery.' cols="30" rows="10"></textarea>
    </div>
  )
}
