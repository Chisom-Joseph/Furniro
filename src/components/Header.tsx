import Image from "next/image";
import Link from "next/link";

import logoImage from "../../public/images/logo.png";
import profileIcon from "../../public/icons/profile.png";
import searchIcon from "../../public/icons/search.png";
import heartIcon from "../../public/icons/heart.png";
import cartIcon from "../../public/icons/cart.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-16 py-5">
      <div className="font-montserrat font-bold text-2xl flex items-center justify-between gap-1">
        <Image src={logoImage} alt="Logo" width={"40"} height={"40"} />
        Furniro
      </div>
      <nav className="text-xs font-poppins font-bold">
        <ul>
          <li className="flex items-center justify-between gap-20">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <Image src={profileIcon} alt="Profile icon" width="17" height="17" />
        <Image src={searchIcon} alt="Search icon" width="17" height="17" />
        <Image src={heartIcon} alt="Heart icon" width="17" height="17" />
        <Image src={cartIcon} alt="Cart icon" width="17" height="17" />
      </div>
    </header>
  );
}
