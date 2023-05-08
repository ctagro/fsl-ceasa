import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Semana A",
        abacaxi: 2,
        Pimentao: 4,
        amt: 2400,
    },
    {
        name: "Semana B",
        abacaxi: 5,
        Pimentao: 2,
        amt: 2210,
    },
    {
        name: "Semana C",
        abacaxi: 6,
        Pimentao: 5,
        amt: 2290,
    },
    {
        name: "Semana D",
        abacaxi: 3,
        Pimentao: 7,
        amt: 2000,
    },
    {
        name: "Semana E",
        abacaxi: 7,
        Pimentao: 9,
        amt: 2181,
    },
    {
        name: "Semana F",
        abacaxi: 9,
        Pimentao: 6,
        amt: 2500,
    },
    {
        name: "Semana G",
        abacaxi: 6,
        Pimentao: 3,
        amt: 2100,
    },
];

export default function WeeklyReport() {
    return (
        <>
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
        <div className="m-6 p-4 w-full"> 
            <h1 className="font-bold text-xl mb-2">Preço Pimentao Hoje: <p className="text-[40px] m-2 p-2"> 5.6R$</p > </h1>
            <h1 className="font-bold text-xl mb-2">Preço Abacaxi Hoje: <p className="text-[40px] m-2 p-2"> 12.2R$ </p> </h1>
            </div>
          <div className="m-6 p-4"> 
            <h1 className="font-bold text-xl mb-2">Preço da pimenta na Ceasa Minas por período de 4 semanas</h1>
             <p >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                dolores perspiciatis nulla consectetur quisquam cumque possimus,
                delectus cum mollitia veritatis voluptatibus soluta natus odit
                expedita minus reiciendis. Excepturi, voluptatibus quis.
            </p>
            </div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Pimentao" fill="#ffbf00" />
                <Bar dataKey="abacaxi" fill="#a52a2a" />
            </BarChart>
            </div>
        </>
    );
}
