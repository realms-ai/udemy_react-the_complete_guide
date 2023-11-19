'use client'

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavbarTypes  {
  linkIndex: number;
  linkPath: string;
  linkValue: string;
  setIndex: number;
  setLinkIndex: Dispatch<SetStateAction<number>>;
}


export default function NavbarLink({
  linkIndex,
  linkPath,
  linkValue,
  setIndex,
  setLinkIndex
}: NavbarTypes) {
  console.log("Link Index Value: ", linkIndex)
  return (
    <li key={linkIndex} className={linkIndex === setIndex ? 'active' : ''} onClick={() => setLinkIndex(linkIndex)}>
          <Link href={linkPath}>
            {linkValue}
          </Link>
    </li>
  )
}