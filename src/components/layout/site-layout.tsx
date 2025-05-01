"use client"

import React from "react"
import { Header } from "@/components/layout/header"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* Footer can be added here later */}
    </div>
  )
}
