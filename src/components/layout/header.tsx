"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search, Cart, Account */}
        <div className="flex items-center gap-4">
          <div className={cn("hidden md:flex relative", searchOpen ? "w-64" : "w-0")}>
            {searchOpen && (
              <div className="absolute inset-y-0 right-0 flex items-center w-full transition-all duration-200 ease-in-out">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-9 w-full pr-8 border-2 border-zinc-300 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/20"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </div>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <Logo />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-4 pb-6">
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-full border-2 border-zinc-300 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/account" onClick={() => setMobileMenuOpen(false)}>
                  <User className="mr-2 h-4 w-4" />
                  My Account
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart (0)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
