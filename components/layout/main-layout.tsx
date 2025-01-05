'use client'

import { Calendar, BookOpen, Activity, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navigation = [
    { name: 'Actions', href: '/', icon: Activity },
    { name: 'Trackers', href: '/trackers', icon: Calendar },
    { name: 'Minds', href: '/minds', icon: BookOpen },
    { name: 'Me', href: '/me', icon: User }
  ]

  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <main className="pb-16">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around px-4 py-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center px-3 py-2 text-sm ${
                  isActive ? 'text-[#0066FF]' : 'text-gray-400'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

