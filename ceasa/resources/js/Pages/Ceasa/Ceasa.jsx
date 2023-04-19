import { Head } from "@inertiajs/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import "./style.css";
import LandingPageLayout from "@/Layouts/LandingPageLayout";

function Table() {
  return (

   <LandingPageLayout>
    <div>
      <div className=" flex flex-col lg:flex-col justify-center items-center lg:px-4 m-auto max-w-[343px] lg:max-w-[1240px] md:max-w-[820px] ">
        <div className="text-white w-full md:ml-2 flex flex-col ml-4 ">
          <h1 className="lg:text-2xl text-xl font-semibold  ">
            Cotações do Ceasa
          </h1>
          <p className=" text-xs ">
            pesquisar preço dos produtos por período específico
          </p>
          <span className="bg-white w-1/3 p-[1px] my-1"></span>
        </div>
        <div className="header justify-between  flex flex-col md:flex-col lg:flex-row lg:w-full ">
          <div className="date flex flex-col md:flex-row lg:flex-row md:space-x-5  lg:space-x-5">
            <div className="flex flex-row my-4 justify-between md:space-x-5 lg:space-x-5 ">
              <div className="dataInicial ">
                <p className="text-white">Data Inicial</p>
                <input
                  className=" feild "
                  type="date"
                  name="DataInicial"
                  id="DataInicial" />
              </div>
              <div className="dataFinal ">
                <p className="text-white">Data Final</p>
                <input
                  className=" feild "
                  type="date"
                  name="DataFinal"
                  id="DataFinal" />
              </div>
            </div>
            <div className="lg:m-auto md:my-auto">
              <div className="ProductInput text-white">
                <p>Produto</p>
                <input
                  className=" feild text-gray-800 w-full "
                  type="text"
                  name="Produto"
                  id="Product" />
              </div>
            </div>
          </div>
          <div className="search flex lg:flex-row space-x-5 lg:-mb-[10px] md:flex-row my-4">
            <div className="feild bg-white Filter justify-start m-auto flex lg:flex-row space-x-2">
              <BiFilter size={20} />
              <button type="/">Filtro</button>
            </div>
            <div className=" feild bg-white pesquisar justify-start m-auto md:w-full flex lg:flex-row space-x-2">
              <AiOutlineSearch className="m-auto" size={20} />
              <input
                type="text"
                className=" Pesquisar p-0 "
                placeholder="Pesquisar" />
            </div>
          </div>
        </div>
        <table className="  text-gray-700 lg:w-full md:w-full m-2 text-center lg:text-sm md:text-sm text-[0.5rem]">
          <thead>
            <tr className=" bg-white ">
              <th className=" rounded-l-lg ">
              </th>
              <th className="">Produto</th>
              <th>Packing</th>
              <th>Data</th>
              <th>Prico Min</th>
              <th>Prico Mid</th>
              <th>Prico Max</th>
              <th className=" rounded-r-lg ">Situacao</th>
            </tr>
            <span className="p-1 w-full"></span>
          </thead>
          <tbody>
            <tr className="">
              <td className=" tdp  ">
                {" "}
                <HiOutlineChevronDown></HiOutlineChevronDown>{" "}
              </td>
              <td className="">Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td className="tdl">Alfreds Futterkiste</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    </LandingPageLayout> 
  );
}

export default Table;
