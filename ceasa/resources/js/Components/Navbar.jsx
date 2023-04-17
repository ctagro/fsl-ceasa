import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import {AiOutlineCheckSquare} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handlenav = () => {
    setNav(!nav);
  };

  const [LogInForm, setLogInForm] = useState(false);

  const toggleLogInForm = () => {
    setLogInForm(!LogInForm);
  };
  if(LogInForm) {
    document.body.classList.add('active-LogInForm')
  } else {
    document.body.classList.remove('active-LogInForm')
  }

  return (
    <>
      <div className="overflow-y-hidden w-screen h-24 bg-[#FAF3E3]">
        <div className="flex justify-between items-center text-gray-600 h-24 max-w-[1240px] mx-auto  font-sans">
          <Link to="../">
            {" "}
            <img
              src={logo}
              alt="logo"
              className=" w-[170px] lg:w-[170px] sm:w-[100px] ml-4 p-4 pl-0 "
            />{" "}
          </Link>
          <ul className="hidden md:flex uppercase pr-0">
            <li className=" p-4">
              <Link to="../pages/Historia">Historia</Link>{" "}
            </li>
            <li className=" p-4">Produtos</li>
            <li className=" p-4">Fotos</li>
            <li href="" className=" p-4">
              <Link to="../pages/Ceasa">Cotações do Ceasa</Link>
            </li>
            <li className=" p-4">
              <Link to="../pages/Blog">Blog</Link>{" "}
            </li>
            <li onClick={toggleLogInForm} className=" p-4 pr-0 mr-4  ">
              {" "}
              <Link to="/">
                {" "}
                <BiUserCircle size={25} />{" "}
              </Link>
            </li>
          </ul>
          <div onClick={handlenav} className=" block md:hidden mr-[15px] z-40">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              !nav
                ? "fixed   left-0 top-0 w-[100%] h-full bg-[#FBEAC2] ease-in-out duration-500 z-30 "
                : "fixed left-[-100%] ease-in-out duration-500 "
            }
          >
            <Link to="../">
              {" "}
              <img
                src={logo}
                alt="logo"
                className=" w-[170px] lg:w-[170px] sm:w-[100px] ml-4 p-4 pl-0 "
              />{" "}
            </Link>
            <ul className="pl-4 pt uppercase ">
              <li className=" p-4">
                <Link to="../pages/Historia">Historia</Link>{" "}
              </li>
              <li className=" p-4">Produtos</li>
              <li className=" p-4">Fotos</li>
              <li href="" className=" p-4">
                <Link to="../pages/Ceasa">Cotações do Ceasa</Link>
              </li>
              <li className=" p-4">
                <Link to="../pages/Blog">Blog</Link>{" "}
              </li>
              <li  onClick={toggleLogInForm} className=" p-4 pr-0 mr-4  ">
                {" "}
                <Link to="">
                  {" "}
                  <BiUserCircle  size={25} />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {LogInForm &&
      (  <div className=" backdrop-blur-md py-40  w-screen h-screen z-50 ">
        <div className="flex bg-[#8CC7D7] text-xs lg:text-sm justify-center md:w-1/2 w-10/12 lg:w-96 lg:p-10 p-7 mx-auto  rounded-lg ">
          <div className="m-auto">
            <div className="-mr-4">
              <p className="text-[#FFF3C9]">Email</p>
              <input
                placeholder="Example@gmail.com"
                type="text"
                id="UserName"
                className="lg:h-9 p-2  w-11/12  rounded-lg drop-shadow-md mb-2 "
              />

              <p className="text-[#FFF3C9]">Senha</p>
              <input
                placeholder="********"
                type="Password"
                id="Password"
                className=" lg:h-9 p-2 w-11/12 rounded-lg drop-shadow-md mb-2"
              />
            </div>
            <div className="text-[#FFF3C9] flex space-x-10">
              <div className="flex ">
                <AiOutlineCheckSquare
                  className="m-auto mr-1"
                  size={15}
                ></AiOutlineCheckSquare>
                <p>Lembrar-Me</p>
              </div>
              <p className="underline font-semibold">Esqueceu sua senha?</p>
            </div>
            <div className="flex flex-col justify-center">
              <button
                type="submit"
                className="rounded text-[#FFF3C9] bg-[#8BC83F] m-auto my-4 py-2 px-4"
              >
                {" "}
                ENTRAR{" "}
              </button>
              <p className=" text-white mx-auto ">Nao Tem Conta? <a href="" className="underline font-semibold" > Cadastre </a> </p>
            </div>
          </div>
        </div>
      </div> )
        }
    </>
  );
};

export default Navbar;
