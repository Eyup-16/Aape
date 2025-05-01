"use client"

import React from "react"

export function PatternBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  )
}
