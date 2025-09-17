'use client'

import { Navbar } from '@/components/navigation'

export default function AppNavbar() {
  const navLinks = [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <Navbar
      onLogoClick={() => console.log('Logo clicked')}
      onSearch={(query) => console.log('Search:', query)}
      navLinks={navLinks}
    />
  )
}