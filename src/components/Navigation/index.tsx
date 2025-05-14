'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkType {
    name: string,
    url: string
}

const NavLinks: NavLinkType[] = [
 {name: "home", url: "/"},
      {name: "pokemon", url:"/pokemon"},
      {name: "types", url: "/types"},
      {name: "about", url: "/about"}
]

const Navigation = () => {
    const path = usePathname();
  return (
   <nav className="menu">
    {NavLinks.map((item:NavLinkType, index:number) => <Link className= {`menu__item--${item.name} ${path === item.url ? "active" : ""}`} key={index} href={item.url}>{item.name}</Link>)}
   </nav>
  )
}

export default Navigation
