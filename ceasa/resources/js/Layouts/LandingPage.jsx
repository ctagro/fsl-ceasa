
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function LandingPage({ children }) {
    return (
        <main className=" bg-gradient-to-r from-violet-500 to-fuchsia-500">
          
                <Nav className=''></Nav>
           

            <article className="  ">{children}</article>

            <Footer className="  " ></Footer>
        </main>
    );
}
