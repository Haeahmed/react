import React from 'react'
import './Contact.css'
import HeadInnerPages from '../../components/HeadInnerPages/HeadInnerPages'
import Flex from '../../components/Flex/Flex'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import TitleShadow from '../../components/TitleShadow/TitleShadow'
import { MdEmail } from 'react-icons/md'
import { HiPhoneIncoming } from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'
import BigButton from '../../components/BigButton/BigButton'
export default function Contact() {
  return (
    <div className='contact'>
      <HeadInnerPages display={"none"} namePage={"Checkout"} />
      <Flex className={"iconsContact"}>
        <Flex alignItems={"center"} display={"flex"} flexDirection={"column"} width={"350px"}>
            <MdEmail className='iconContact' />
            <Title fontSize={"40px"} content={"Support"} />
            <h4>haedaraSalloum434@gmail.com</h4>
        </Flex>
        <Flex alignItems={"center"} display={"flex"} flexDirection={"column"} width={"350px"}>
        <HiPhoneIncoming className='iconContact' />
            <Title fontSize={"40px"} content={"Phone"} />
            <h4>+963 0983-796-029</h4>
        </Flex>
        <Flex alignItems={"center"} display={"flex"} flexDirection={"column"} width={"350px"}>
        <FaLocationDot className='iconContact' />
            <Title fontSize={"40px"} content={"Address"} />
            <h4>Tartus-Elsheck-Badr</h4>
        </Flex>
      </Flex>
      <Flex className={"bigBox"}>
        <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
            <TitleShadow content={"Get in touch"} />
            <Title color={"white"} fontSize={"70px"} content={"with us"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Your Name"} star={"*"} />
            <Input width={"400px"} type={"email"} label={"Your Email"} star={"*"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Subject"} />
            <Input width={"400px"} type={"text"} label={"Department"} />
        </Flex>
      <textarea className='textArea' placeholder='Notes about your order, e.g. special notes for delivery.' cols="30" rows="10"></textarea>
      <BigButton className={"btnSend"}>Send Now</BigButton>
      </Flex>
      <Flex className={"bigBox bigBox2"}>
        <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
            <TitleShadow content={"Get in touch"} />
            <Title color={"white"} fontSize={"70px"} content={"with us"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Your Name"} star={"*"} />
            <Input width={"400px"} type={"email"} label={"Your Email"} star={"*"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Subject"} />
            <Input width={"400px"} type={"text"} label={"Department"} />
        </Flex>
      <textarea className='textArea' placeholder='Notes about your order, e.g. special notes for delivery.' cols="30" rows="10"></textarea>
      <BigButton className={"btnSend"}>Send Now</BigButton>
      </Flex>
      <Flex className={"bigBox"}>
        <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
            <TitleShadow content={"Get in touch"} />
            <Title color={"white"} fontSize={"70px"} content={"with us"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Your Name"} star={"*"} />
            <Input width={"400px"} type={"email"} label={"Your Email"} star={"*"} />
        </Flex>
        <Flex className={"inputs"}>
            <Input width={"400px"} label={"Subject"} />
            <Input width={"400px"} type={"text"} label={"Department"} />
        </Flex>
      <textarea className='textArea' placeholder='Notes about your order, e.g. special notes for delivery.' cols="30" rows="10"></textarea>
      <BigButton className={"btnSend"}>Send Now</BigButton>
      </Flex>
    </div>
  )
}
