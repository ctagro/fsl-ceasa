import { Link, Head } from "@inertiajs/react";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import "../../js/Pages/Welcome.css";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Welcome(props) {


    return (
        <>
            <div className="flex items-center mx-auto justify-center max-w-[1240px]">
                <Head title="Welcome" />
                <div className=" flex flex-col   mx-auto  min-h-screen selection:text-white">
                    <div className="w-screen bg-[#FAF3E3]">
                        <div className="flex flex-row justify-between lg:w-[1240px]  items-center mx-auto p-4 text-right">
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <div>
                                        <img
                                            src={Logo}
                                            alt="logo"
                                            className="logo"
                                        />
                                    </div>
                                    <div className="flex flex-row my-auto space-x-4">
                                        <Link
                                        
                                        className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Historia
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Galleria
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Produtos
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Ceasa
                                        </Link>
                                        <Link
                                        
                                         className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Blog
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            className="ml- font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            <BiUserCircle size={25} />
                                        </Link>
                                    </div>
                                    
                                </>
                            )}
                        </div>
                    </div>       
                </div>
            </div>
        </>
    );
}
