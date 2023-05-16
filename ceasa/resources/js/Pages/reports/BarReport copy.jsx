import React from "react";
import Layout from '@/Layouts/DashboardLayout'



import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Data = ({ priceCeasa }) => {

    return (
      
        <>      
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
  
        <BarChart
                width={1000}
                height={500}
                data={priceCeasa}
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

Data.layout = page => <Layout children={page} title="Welcome" />

export default Data;