'use client'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "../ui/AcmeLogo";
import LoginButton from "../buttons/login";
import { TwitchIcon, GithubIcon, YoutubeIcon, TwitterIcon } from "lucide-react"

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Skills",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ee3.dev</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-between items-center gap-16" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="foreground">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="#" aria-current="page" color="foreground">
          CONTACT
          </Link>
        </NavbarItem>
        
        
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
       <NavbarItem>
       <Link href="#" color="secondary">
        <GithubIcon size={24} />
      </Link>
    </NavbarItem>
    <NavbarItem>
    <Link href="#" color="danger">
        <YoutubeIcon size={24} /> 
      </Link>
    </NavbarItem>
    <NavbarItem>
    <Link href="#" color="primary">
        <TwitterIcon size={24} />
      </Link>
    </NavbarItem>
      {/* <LoginButton/> */}
    </Navbar>
  );
}
