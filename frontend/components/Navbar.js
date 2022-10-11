import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Sign In", href: "/auth/signin" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const { data: session, status } = useSession()

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Odyssey</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          {!session && <button onClick={() => signIn()}>Sign in with Github</button>}
          {session && <button onClick={() => signOut()}>Sign out</button>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
