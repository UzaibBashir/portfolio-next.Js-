import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Skills";
import Link from "next/link";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Work/>
      <Contact/>
      
      <footer className="py-2 text-center text-neutral-500 text-sm bg-[#21212e]">
        © {new Date().getFullYear()} Uzaib Bashir Malik <br></br> All rights reserved.<br></br>
        <span className="">developed with 💜 by Uzaib</span>
      </footer>
    </>
  );
}