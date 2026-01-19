import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Image src="/logo.png" alt="logo" width={50} height={50} className="border-2 border-orange-500 rounded-full"/>
                
                <span className="font-medium tracking-wide ">Uzaib Bashir Malik</span>
                <div className="space-x-6 text-sm text-neutral-400">
                    <a href="#skill" className="hover:text-white transition">Skills</a>
                    <a href="#skill" className="hover:text-white transition">Experience</a>
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}