'use client'

import { useState } from "react";
import NavbarLink from "./__navbar_link";

const navLinks = [
  ['/', 'Home'],
  ['01_getting_started', '01 Getting Started']
]

export default function Navbar() {
  const [linkIndex, setLinkIndex] = useState(0)
  console.log("Re-rendering common HEADER");
  return (
    <nav className="bodyHeader">
      <ul>
        {
          navLinks.map((v, index) => (
            <NavbarLink key={index} linkIndex={index} linkPath={v[0]} linkValue={v[1]} setIndex={linkIndex} setLinkIndex={setLinkIndex} />
          ))
        }
      </ul>
    </nav>
  );
}
