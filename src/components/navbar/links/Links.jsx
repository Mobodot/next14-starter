"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Links.module.css";
import NavLink from "./navlink/NavLink";
import { handleGithubLogout } from "@/lib/actions";

const links = [
  {
    label: "Homepage",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Blog",
    path: "/blogs",
  },
];

function Links({ session }) {
  const isAdmin = true;
  // const session = true;
  console.log(session ? "yess session available" : "no session available bro");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderedLinks = links.map((link) => {
    return <NavLink key={link.label} item={link} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.navlinks}>
        {renderedLinks}{" "}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ label: "Admin", path: "/admin" }} />
            )}
            <form action={handleGithubLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ label: "Login", path: "/login" }} />
        )}
      </div>

      <div>
        <button
          className={styles.mobileNavBtn}
          onClick={() => {
            console.log(isNavOpen);
            setIsNavOpen(!isNavOpen);
          }}
        >
          <Image src="/menu.png" alt="menu" width={30} height={30} />
        </button>

        {isNavOpen && <div className={styles.mobileNav}>{renderedLinks}</div>}
      </div>
    </div>
  );
}

export default Links;
