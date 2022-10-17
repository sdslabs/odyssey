import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

const MENU_LIST = [
  { text: "Events", href: "/events" },
  { text: "Leaderboard", href: "/leaderboard" },
  { text: "About", href: "/about" },
  { text: "Participation", href: "/participation" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const { data: session, status } = useSession();

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <img src="/images/logo.svg" id="navbar-logo"></img>
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
          {!session && (
            <button className="login_signupButton" onClick={() => signIn('github')}>LOGIN / SIGNUP</button>
          )}
          {session && 
            <div className="dropdownmenu">
              <button className="dropdownbutton">username</button>
              <div className="dropdown">
                <a href='/profile'> <button className="profile_button">PROFILE</button> </a>
                <button className="logout_button" onClick={() => signOut()}>LOGOUT</button>
              </div>
            </div>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
