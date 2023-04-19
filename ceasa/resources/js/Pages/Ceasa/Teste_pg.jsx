import Layout from '../Layout'
import { Head } from '@inertiajs/react'
import Navbar from "../../components/Navbar";
import "./style.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";

export function Teste_pg({ user }) {
  return (
    <div>
    <Navbar></Navbar>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
   </div>
  )
}
export default Teste_pg;