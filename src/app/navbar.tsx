import Link from "next/link";

export default function Navbar () {
    return (
        <nav className="w-full flex justify-between py-2 px-4 absolute top-0 z-50 bg-transparent font-semibold">
            <div className="absolute left-0 top-0 z-10 w-full h-full from-[#121212]/50 to-transparent bg-gradient-to-b"></div>
            <div>
                
            </div>
            <ul className="flex flex-row gap-6 text-white text-lg z-10">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li>Contact</li>
                <li></li>
                </ul>
        </nav>
    )
}