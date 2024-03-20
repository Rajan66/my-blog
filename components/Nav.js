"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const handleDropdownClick = () => {
        console.log("Dropdown clicked");
        setToggleDropdown((prev) => !prev);
    };

    const handleLinkClick = () => {
        console.log("Link clicked");
        setToggleDropdown(false);
    };
    return (
        <nav className="flex-between w-full mb-8 pt-3 px-10 mt-5 ">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.png"
                    alt="MyBlog Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">P-Blog</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex lg:flex">
                <div className="flex gap-3 md:gap-5">
                    <Link className="black_btn" href="/contact">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden lg:hidden relative">
                <div className="flex">
                    <Image
                        src="/assets/images/menu.png"
                        width={37}
                        height={37}
                        alt="menu"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />
                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link
                                href="/contact"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;