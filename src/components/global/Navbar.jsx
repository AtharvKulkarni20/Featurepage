import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          {/* img */}
          <img src="/logo.png" className="w-48" />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Sustainability Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Solution Providers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Professionals
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-5">
          <Button className="hidden md:inline-flex bg-gray-400 rounded-xl">
            Login
          </Button>
          <Button className="hidden md:inline-flex bg-green-700 rounded-xl">
            Sign Up
          </Button>
        </div>
        {/* responsive web */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col items-start gap-6 p-6">
              <Link href="#" className="flex items-center" prefetch={false}>
                {/* img */}
                <img src="/logo.png" className="w-48" />
              </Link>
              <nav className="grid gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
              <Button className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
