import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/Hero";
import Contact from "./components/Contact";

export default function Home(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Work/>
      <Contact/>
      
      <footer className="py-12 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Uzaib Bashir Malik <br></br> All rights reserved.<br></br>
        <span class="text-[#793fff]">developed with 💜 by Uzaib</span>
      </footer>
    </>
  );
}