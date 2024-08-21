import React, { useContext, useState } from 'react';
import './ItemSelectedList.css';
import Flex from '../Flex/Flex';
import { BiCart, BiCoinStack } from 'react-icons/bi';
import { BsTriangleFill } from 'react-icons/bs';
import ItemSelected from '../ItemSelected/ItemSelected';
import { Link, Outlet } from 'react-router-dom';
import { SelectedItem } from '../../Context/ContextItemSelected';

export default function ItemSelectedList(props) {
  const {items, setItems} = useContext(SelectedItem);
  setItems(
    [{ id: 1, img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr11-600x600.jpg", text: "Aberdeen Angus Burgers", price: "7 x $66" },
    { id: 2, img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr3-600x600.jpg", text: "The Sparkling Mineral Water", price: "7 x $66" },
    { id: 3, img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr10-600x600.jpg", text: "Ocado Cowboy Steak", price: "7 x $66" },
  ])
  const handleDelete = (idToDelete) => {
    setItems(items.filter(item => item.id !== idToDelete));
  };

  return (
    <div onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className='ItSelectedList' style={{ display: props.display, transform: props.transform }}>
      {items.map(item => (
        <ItemSelected 
          key={item.id}
          onClick={() => handleDelete(item.id)} // Call delete on click
          className={"eachItem"}
          img={item.img}
          text={item.text}
          price={item.price}
        />
      ))}
      {props.children}
      <Flex className={"bottomField"}>
        <Flex className={"details"}>
            <BiCoinStack className='coinIcon' />
            <h3>Cart $257</h3>
        </Flex>
        <Flex className={"details"}>
        <Link style={{display: "flex", alignItems: "center", gap: "20px"}} to='checkout'>
            <BiCart className='cartIcon' />
            <h3>Check $257</h3>
        </Link>
        <Outlet />
        </Flex>
      </Flex>
      <span className='FooterList'>Free shipping on purchases over $100</span>
      <BsTriangleFill className='after' />
    </div>
  );
}