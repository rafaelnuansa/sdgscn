import { Container } from '@/components/container'
import React from 'react'

export default function AdminNavMenu() {
  return (
   <>
   <Container>

   <div className="hide-scrollbar relative z-20 mx-auto block max-w-screen-2xl overflow-x-auto px-4 sm:px-6">
  <ul className="flex items-center gap-x-8">
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-transparent text-foreground/70"
      href="https://parsinta.com/dashboard"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Overview
      </span>
    </a>
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-transparent text-foreground/70"
      href="https://parsinta.com/settings/account"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Pengaturan
      </span>
    </a>
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-transparent text-foreground/70"
      href="https://parsinta.com/articles/list"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Daftar Artikel
      </span>
    </a>
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-transparent text-foreground/70"
      href="https://parsinta.com/resources/save-for-later"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Resources
      </span>
    </a>
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-foreground text-foreground"
      href="https://parsinta.com/subscription"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Langganan
      </span>
    </a>
    <a
      className="group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm border-transparent text-foreground/70"
      href="https://parsinta.com/orders"
    >
      <span className="-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent">
        Invoice
      </span>
    </a>
  </ul>
</div>
   </Container>

   </>
  )
}
