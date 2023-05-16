import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import CardDetails from "./CardDetails";

const Data = [
    {
        name: "Semana A",
        abacaxi: 23,
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

export const xpto = ({auth})  => {
    return (
        
        <AuthenticatedLayout auth={auth}>
        <Head title = 'Posts'/>
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
       <CardDetails/>
            <BarChart
                width={500}
                height={300}
                data={Data}
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
            </AuthenticatedLayout>
        
    );
}
export default xpto;