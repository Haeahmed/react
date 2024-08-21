import React from 'react'
import Flex from '../Flex/Flex'
import Title from '../Title/Title'
import { BsStarFill } from 'react-icons/bs'
import './RecentReviews.css'
export default function RecentReviews(props) {
  return (
    <Flex key={props.key} className={"recentReview"}>
            <img src={props.img} alt="" />
            <Flex>
              <Title fontSize={"24px"} content={props.title} />
              <Flex>
                <BsStarFill className='star' />
                <BsStarFill className='star' />
                <BsStarFill className='star' />
                <BsStarFill className='star' />
                <BsStarFill className='star' />
              </Flex>
              <Title fontSize={"15px"} content={props.description} />
            </Flex>
          </Flex>
  )
}
