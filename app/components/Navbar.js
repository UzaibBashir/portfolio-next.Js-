import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
                <Image src="/logo.png" alt="logo" width={50} height={50} className="border-2 border-[#793fff] rounded-full"/>
                
                <span className="font-medium text-2xl tracking-wider">Uzaib Bashir Malik</span>
                <div className="space-x-6 text-sm text-neutral-400 ml-auto">
                    <a href="#skill" className="hover:text-white transition">Skills</a>
                    <a href="#skill" className="hover:text-white transition">Experience</a>
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}