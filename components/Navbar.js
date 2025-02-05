"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 300);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, [pathname]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const AuthButtons = () => (
    <>
      <Link href="/sign-in">
        <Button variant="outline">Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="outline">SignUp</Button>
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 glass-effect shadow-lg backdrop-blur">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link href="/">RazaBlog</Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <Sheet>
              <SheetTrigger>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <ModeToggle className="mx-6" />
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>RazaBlog</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 px-4">
                  <Link href="/" className="hover:text-blue-600 block">Home</Link>
                  <Link href="/blog" className="hover:text-blue-600 block">Blog</Link>
                  <Link href="/about" className="hover:text-blue-600 block">About</Link>
                  <Link href="/contact" className="hover:text-blue-600 block">Contact</Link>
                  <div className="flex flex-col gap-2 mt-4">
                    {!isSignedIn ? (
                      <AuthButtons />
                    ) : (
                      <UserButton signOutCallback={handleSignOut} />
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/blog" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
            <Link href="/about" className="hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
           
            <Link href="/contact" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <div className="flex gap-2 items-center">
              {!isSignedIn ? (
                <AuthButtons />
              ) : (
                <UserButton signOutCallback={handleSignOut} />
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}