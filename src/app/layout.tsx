import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barangay Calunangan — Official Website',
  description: 'Official website of Barangay Calunangan, Nampicuan, Nueva Ecija. Access barangay services, announcements, and resident information.',
  keywords: 'Barangay Calunangan, Nampicuan, Nueva Ecija, barangay services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}