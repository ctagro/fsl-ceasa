
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import React, {useEffect, useState} from 'react'
import axios from 'axios'

const endpoint = 'http://127.0.0.1:8000/barChart'

const ShowProducts = () => {
    const [ products, setProducts ] = useState( [] )
    useEffect ( ()=> {
        getAllProducts()
    }, [])
 
const getAllProducts = async () => {

    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
}

 
    return (
      
        <>
       <h1>data</h1>
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
  
            <BarChart
                width={1000}
                height={500}
                data={products}
                margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price_min" fill="#ffbf00" />
                <Bar dataKey="price_max" fill="#a52a2a" />
            </BarChart>
            </div>
        </>
    );
}

export default ShowProducts;