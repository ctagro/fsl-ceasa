import React from "react";
import LandingPage from "@/Layouts/LandingPage";
import { Link } from "@inertiajs/react";

function Home() {
    return (
        <LandingPage >
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <div className="flex  flex-col items-center justify-center lg:max-w-[1240px] h-screen  text-white m-auto">
                <h1 className="lg:text-4xl text-2xl">Fazenda Santa Luizaaaa</h1>
                <p className="w-1/2 text-center my-6">
                    Moth beans should be first soaked overnight before boiled in
                    order to remove some of the antinutritional factors that may
                    interfere with digestion. One serving of moth bean
                </p>
                <Link
                    href={route("register")}
                    className="uppercase rounded-full lg:p-4 p-4 bg-[#8CC7D7]"
                >
                    Cadastre Grátis
                </Link>
            </div>
            </div>
        </LandingPage>
    );
}
export default Home;
