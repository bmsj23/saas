import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="navbar">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
            <div>
                <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            </div>
            </Link>
            <div>
            <Link href="/about" className="mr-4">About</Link>
            <Link href="/contact">Contact</Link>
            </div>
        </div>
        </nav>
    );
}