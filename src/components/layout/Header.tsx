'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Officials', href: '/officials' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Forms', href: '/forms' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ background: 'var(--gov-blue)', position: 'sticky', top: 0, zIndex: 50 }}>

      {/* Top bar */}
      <div style={{
        background: '#001F5C',
        padding: '5px 20px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.65)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>🇵🇭</span>
        <span>Republic of the Philippines · Province of Nueva Ecija · Municipality of Nampicuan</span>
      </div>

      {/* Main nav */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>

        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'var(--gov-gold)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '10px', fontWeight: 500, color: 'var(--gov-gold-dark)',
            textAlign: 'center', lineHeight: '1.2', padding: '4px',
            border: '2px solid rgba(255,255,255,0.25)', flexShrink: 0,
          }}>BLGU<br/>SEAL</div>
          <div>
            <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, lineHeight: '1.2' }}>
              Barangay Calunangan
            </div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>
              Nampicuan, Nueva Ecija · Official Website
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: 'flex', gap: '2px', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.85)', fontSize: '12px',
              padding: '6px 10px', borderRadius: '6px',
              transition: 'background .15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{link.label}</Link>
          ))}
          <Link href="/portal" style={{
            background: 'var(--gov-gold)', color: 'var(--gov-gold-dark)',
            fontSize: '12px', fontWeight: 500, padding: '7px 14px',
            borderRadius: '6px', marginLeft: '8px', whiteSpace: 'nowrap',
          }}>Resident Portal ↗</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', color: '#fff',
            cursor: 'pointer', padding: '4px', display: 'none',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#001F5C', padding: '12px 20px 20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', color: 'rgba(255,255,255,0.85)',
                fontSize: '14px', padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >{link.label}</Link>
          ))}
          <Link href="/portal"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', marginTop: '12px',
              background: 'var(--gov-gold)', color: 'var(--gov-gold-dark)',
              fontSize: '14px', fontWeight: 500, padding: '10px 16px',
              borderRadius: '6px', textAlign: 'center',
            }}>Resident Portal ↗</Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}