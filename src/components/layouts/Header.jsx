import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Logo from "/src/assets/logo.jpg";
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <>
      <section>
        <Container>
            <div className="flex justify-between items-center py-5">
                <div className="">
                    <Image imgSrc={Logo} className={"w-20 rounded-full"}/>
                </div>
                <div className="">
                    <ul className='flex gap-x-8'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/service"}>Service</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                    </ul>
                </div>
                <div className="">
                    <div className="text-2xl">
                        <MdOutlineShoppingCart/>
                    </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Header
