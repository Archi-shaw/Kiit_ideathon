"use client";

import { useState } from "react";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeToggle from "./ThemeToggle";

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      toast.info("Signing out...");
    } else {
      toast.success("Logged in...");
    }
    setIsLoggedIn(!isLoggedIn);
  };

  const menuItems = ["Profile", "Dashboard", "LogOut"];

  return (
    <div className="w-full mx-auto h-10">
      <Navbar
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        className="bg-light-background dark:bg-dark-background"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center">
          <Image
            height={36}
            width={36}
            alt="kiit logo"
            src="https://kiit.ac.in/wp-content/uploads/2022/10/KIIT-Logo-500x500-1.png"
            className="object-fill opacity-100"
          />
          <p className="text-light-primary font-extrabold dark:text-dark-foreground ml-2">
            KIIT
          </p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            color="foreground"
            href="/Profile"
            className="max-sm:hidden ml-72"
          >
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/" className="max-sm:hidden">
            Dashboard
          </Link>
        </NavbarItem>

        <NavbarContent className="flex justify-between w-fit max-sm:hidden">
          <div className="flex justify-between items-center">
            <NavbarItem>
              {isLoggedIn ? (
                <Button
                  color="primary"
                  onClick={handleLoginLogout}
                  variant="flat"
                  className="bg-light-primary text-white hover:bg-blue-600 hover:text-white dark:bg-dark-primary dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white mr-4 relative"
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={handleLoginLogout}
                  variant="flat"
                  className="bg-light-primary text-white hover:bg-blue-600 hover:text-white dark:bg-dark-accent dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white mr-4 relative"
                >
                  Login
                </Button>
              )}
            </NavbarItem>
            <NavbarItem>
              <ThemeToggle />
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => {
            const isLogout = item === "LogOut";
            const href = isLogout ? "#" : `/${item}`;
            const color =
              index === 1 ? "primary" : isLogout ? "danger" : "foreground";

            if (isLogout) {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={isLoggedIn ? "danger" : "foreground"}
                    className="w-full"
                    href="#"
                    size="lg"
                    onClick={handleLoginLogout}
                  >
                    {isLoggedIn ? "Sign Out" : "Login"}
                  </Link>
                  <NavbarItem>
                    <ThemeToggle />
                  </NavbarItem>
                </NavbarMenuItem>
              );
            }

            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color={color} className="w-full" href={href} size="lg">
                  {item}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
      <ToastContainer />
    </div>
  );
};

export default NavbarComponent;
