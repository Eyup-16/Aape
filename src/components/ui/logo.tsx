"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center justify-center size-8 rounded-md bg-primary text-primary-foreground font-bold">
        A
      </div>
      <span className="text-xl font-bold tracking-tight">Aape</span>
    </Link>
  )
}
