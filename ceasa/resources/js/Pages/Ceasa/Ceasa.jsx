
import "./style.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Show(props) {

 
  return (

  
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
                  id="DataInicial"
                />
              </div>
              <div className="dataFinal ">
                <p className="text-white">Data Final</p>
                <input
                  className=" feild "
                  type="date"
                  name="DataFinal"
                  id="DataFinal"
                />
              </div>
            </div>
            <div className="lg:m-auto md:my-auto">
              <div className="ProductInput text-white">
                <p>Produto</p>
                <input
                  className=" feild text-gray-800 w-full "
                  type="text"
                  name="Produto"
                  id="Product"
                />
              </div>
            </div>
          </div>
          <div className="search flex lg:flex-row space-x-5 lg:-mb-[10px] md:flex-row my-4">
            <div className="feild bg-white Filter justify-start m-auto flex lg:flex-row space-x-2">
              <BiFilter size={20} />
              <button type="/">Filtro</button>
            </div>
            <div className=" feild bg-white pesquisar justify-start m-auto md:w-full flex lg:flex-row space-x-2">
              <AiOutlineSearch size={20} />
              <input
                type="text"
                className=" Pesquisar"
                placeholder="Pesquisar"
              />
            </div>
          </div>
        </div>
        <table className='table table-striped'>
                    <thead className= 'bg-primary text-white'>
                        <tr>
                            <th>Data</th>
                            <th>Produto</th>
                            <th>Embalagem</th>
                            <th>Price_min</th>
                            <th>Price_com</th>
                            <th>price_max</th>
                            <th>Situation</th>
                        </tr>
                    </thead>
                    <tbody>
                        { price_ceasa_bhs.map( (price_ceasa_bh) => (
                             <tr Key={price_ceasa_bh.id}>
                                <td> {price_ceasa_bh.date} </td>
                                <td> {price_ceasa_bh.product} </td>
                                <td> {price_ceasa_bh.embalagem} </td>
                                <td> {price_ceasa_bh.price_min} </td>
                                <td> {price_ceasa_bh.price_com} </td>
                                <td> {price_ceasa_bh.price_max} </td>
                                <td> {price_ceasa_bh.situation} </td>
                                <td>
                                <Link to={`/edit/${price_ceasa_bh.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=>deletePrice_ceasa_bh(price_ceasa_bh.id)} className='btn btn-danger'>Delete</button>
                                </td>
                     
                            </tr>
                         )) }
                    </tbody>
               

            </table>
      </div>
    
    </div>
  );
}


