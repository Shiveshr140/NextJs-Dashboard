"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

function page() {
  const userPath = usePathname()  

  return (
    <div>
        Hello{userPath}
    </div>
  )
}

export default page