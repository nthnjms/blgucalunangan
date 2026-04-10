'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      {/* Emergency bar */}
      <div style={{
        background: 'var(--gov-red)', padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Phone size={16} color="#fff" />
          <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>
            Emergency Hotlines
          </span>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginLeft: 'auto' }}>
          {[
            { label: 'Barangay Hall', number: '0917-XXX-XXXX' },
            { label: 'BFP / Fire', number: '0917-XXX-XXXX' },
            { label: 'PNP Station', number: '0917-XXX-XXXX' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.15)',
              border: '0.5px solid rgba(255,255,255,0.3)',
              borderRadius: '6px', padding: '5px 12px',
            }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
              <div style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>{item.number}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div style={{ background: 'var(--gov-blue)', padding: '32px 20px 20px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px', marginBottom: '24px',
        }}>

          {/* Brand col */}
          <div>
            <div style={{ color: '#fff', fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>
              Barangay Calunangan
            </div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: '1.7' }}>
              Nampicuan, Nueva Ecija<br />
              Republic of the Philippines
            </div>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={14} color="rgba(255,255,255,0.5)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: '1.6' }}>
                Barangay Hall, Calunangan,<br />Nampicuan, Nueva Ecija
              </span>
            </div>
          </div>

          {/* Quick links */}
            <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 500, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>
              Quick Links
            </div>
            {[
              { label: 'About Calunangan', href: '/about' },
              { label: 'Barangay Officials', href: '/officials' },
              { label: 'Services', href: '/services' },
              { label: 'News & Announcements', href: '/news' },
              { label: 'Downloadable Forms', href: '/forms' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.7)',
                fontSize: '12px', padding: '3px 0', lineHeight: '1.6',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >{link.label}</Link>
            ))}
          </div>

          {/* Contact col */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 500, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>
              Contact Us
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={13} color="rgba(255,255,255,0.5)" />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>0917-XXX-XXXX</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={13} color="rgba(255,255,255,0.5)" />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>calunangan@nampicuan.gov.ph</span>
              </div>
            </div>
            <div style={{ marginTop: '12px', color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: '1.7' }}>
              Office Hours:<br />
              Monday – Friday<br />
              8:00 AM – 5:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '0.5px solid rgba(255,255,255,0.15)',
          paddingTop: '16px',
          display: 'flex', flexWrap: 'wrap', gap: '12px',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
            © {new Date().getFullYear()} Barangay Calunangan. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Privacy Policy', 'Accessibility', 'Sitemap'].map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}
              >{item}</Link>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '12px', color: 'rgba(255,255,255,0.25)', fontSize: '10px' }}>
          In compliance with the Philippine Data Privacy Act of 2012 (RA 10173)
        </div>
      </div>
    </footer>
  )
}