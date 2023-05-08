
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function LandingPage({ children }) {
    return (
        <main className=" ">
          
                <Nav></Nav>
           

            <article className="  ">{children}</article>

            <Footer className="  " ></Footer>
        </main>
    );
}
