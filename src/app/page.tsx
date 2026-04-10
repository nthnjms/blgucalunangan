'use client'
import Link from 'next/link'
import {
  FileText, Home, Briefcase, Heart,
  Megaphone, AlertTriangle, Calendar,
  ArrowRight, Clock, MapPin
} from 'lucide-react'

const services = [
  { icon: FileText, name: 'Barangay Clearance', desc: 'For employment, business & personal use', href: '/services#clearance' },
  { icon: Home, name: 'Certificate of Residency', desc: 'Proof of residence in Calunangan', href: '/services#residency' },
  { icon: Heart, name: 'Certificate of Indigency', desc: 'For government assistance programs', href: '/services#indigency' },
  { icon: Briefcase, name: 'Business Permit', desc: 'New and renewal business permits', href: '/services#business' },
  { icon: Megaphone, name: 'Blotter / Report', desc: 'File a complaint or incident report', href: '/services#blotter' },
  { icon: Heart, name: 'Social Services', desc: '4Ps, senior citizen & PWD programs', href: '/services#social' },
]

const news = [
  {
    tag: 'Announcement', tagColor: '#1D4ED8', tagBg: '#DBEAFE',
    month: 'APR', day: '10',
    title: 'Pagbabago ng Schedule ng Barangay ID Replacement',
    preview: 'Ipinaabot sa lahat ng residente na ang pagpapalit ng Barangay ID ay magsisimula na sa Abril 14.',
  },
  {
    tag: 'Event', tagColor: '#065F46', tagBg: '#D1FAE5',
    month: 'APR', day: '15',
    title: 'Libreng Medical Mission — Barangay Health Center',
    preview: 'Isang libreng medical at dental mission ang idaraos sa ating community center. Lahat ay welcome.',
  },
  {
    tag: 'Advisory', tagColor: '#92400E', tagBg: '#FEF3C7',
    month: 'APR', day: '3',
    title: 'Water Interruption Advisory — Barangay Calunangan',
    preview: 'Ibibigay ng MWSS ang abiso hinggil sa planong water service interruption sa ika-12 ng Abril.',
  },
]

export default function HomePage() {
  return (
    <div>

      {/* Alert banner */}
      <div style={{
        background: '#FFF3CD',
        borderBottom: '2px solid #F5A623',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
        color: '#7A4F00',
      }}>
        <AlertTriangle size={16} color="#F5A623" style={{ flexShrink: 0 }} />
        <span>
          <strong style={{ fontWeight: 500 }}>Advisory: </strong>
          Schedule ng Pagbabago ng Barangay ID — Abril 14–18, 2026. Pumunta sa Barangay Hall 8AM–5PM.
        </span>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #001F5C 0%, #003087 60%, #004CB3 100%)',
        padding: '48px 20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(255,255,255,0.12)',
            border: '0.5px solid rgba(255,255,255,0.2)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', color: 'rgba(255,255,255,0.9)',
            marginBottom: '16px',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#4ADE80', borderRadius: '50%', display: 'inline-block' }} />
            Digital Services Now Available
          </div>

          <h1 style={{
            color: '#fff', fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 500, margin: '0 0 12px', lineHeight: '1.3',
          }}>
            Magandang araw, taga-Calunangan!
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.75)', fontSize: '15px',
            lineHeight: '1.7', margin: '0 0 28px', maxWidth: '520px',
          }}>
            Your one-stop portal for barangay services, announcements, and
            resident information. Serving our community with transparency and efficiency.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/services" style={{
              background: '#F5A623', color: '#7A4F00',
              fontSize: '14px', fontWeight: 500,
              padding: '12px 24px', borderRadius: '8px',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              Request a Document <ArrowRight size={16} />
            </Link>
            <Link href="/news" style={{
              background: 'transparent', color: '#fff',
              fontSize: '14px', padding: '12px 24px',
              borderRadius: '8px',
              border: '1.5px solid rgba(255,255,255,0.35)',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              View Announcements
            </Link>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '24px', marginTop: '40px',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'Registered Residents', value: '2,400+' },
              { label: 'Active Officials', value: '10' },
              { label: 'Services Available', value: '8' },
              { label: 'Years Serving', value: '50+' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ color: '#fff', fontSize: '22px', fontWeight: 500 }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div style={{ background: '#F3F4F6', padding: '48px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '28px' }}>
            <div style={{
              width: '40px', height: '3px',
              background: '#003087', borderRadius: '2px', marginBottom: '12px',
            }} />
            <h2 style={{ fontSize: '22px', fontWeight: 500, margin: '0 0 6px' }}>
              Mga Serbisyo
            </h2>
            <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
              Quick access to barangay services
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
          }}>
            {services.map(service => (
              <Link key={service.name} href={service.href} style={{
                background: '#fff',
                border: '0.5px solid #E5E7EB',
                borderRadius: '12px',
                padding: '20px 16px',
                display: 'block',
                transition: 'border-color .15s, transform .1s',
                textAlign: 'center',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#003087'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: '#E8F0FE', margin: '0 auto 12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <service.icon size={22} color="#003087" />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
                  {service.name}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', lineHeight: '1.5' }}>
                  {service.desc}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#003087', fontSize: '13px', fontWeight: 500,
              border: '0.5px solid #003087',
              padding: '10px 20px', borderRadius: '8px',
            }}>
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* News section */}
      <div style={{ background: '#fff', padding: '48px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '12px',
          }}>
            <div>
              <div style={{
                width: '40px', height: '3px',
                background: '#003087', borderRadius: '2px', marginBottom: '12px',
              }} />
              <h2 style={{ fontSize: '22px', fontWeight: 500, margin: '0 0 6px' }}>
                Balita at Abiso
              </h2>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
                Latest announcements from the barangay
              </p>
            </div>
            <Link href="/news" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#003087', fontSize: '13px',
            }}>
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {news.map(item => (
              <Link key={item.title} href="/news" style={{
                display: 'flex', gap: '16px',
                background: '#F9FAFB',
                border: '0.5px solid #E5E7EB',
                borderRadius: '12px', padding: '16px',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#003087'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
              >
                {/* Date column */}
                <div style={{
                  flexShrink: 0, textAlign: 'center',
                  background: '#E8F0FE', borderRadius: '8px',
                  padding: '8px 12px', minWidth: '48px',
                }}>
                  <div style={{ fontSize: '10px', color: '#0052CC', fontWeight: 500 }}>
                    {item.month}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 500, color: '#003087', lineHeight: '1.2' }}>
                    {item.day}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    display: 'inline-block', fontSize: '11px', fontWeight: 500,
                    padding: '2px 10px', borderRadius: '99px', marginBottom: '6px',
                    background: item.tagBg, color: item.tagColor,
                  }}>
                    {item.tag}
                  </span>
                  <div style={{
                    fontSize: '14px', fontWeight: 500,
                    marginBottom: '4px', lineHeight: '1.4',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.6' }}>
                    {item.preview}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick info bar */}
      <div style={{
        background: '#003087', padding: '32px 20px',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: Clock,
              title: 'Office Hours',
              lines: ['Monday – Friday', '8:00 AM – 5:00 PM', 'Closed on holidays'],
            },
            {
              icon: MapPin,
              title: 'Location',
              lines: ['Barangay Hall, Calunangan', 'Nampicuan, Nueva Ecija', 'Philippines'],
            },
            {
              icon: Calendar,
              title: 'Next Assembly',
              lines: ['Barangay Assembly', 'Last Saturday of March', 'Barangay Hall, 9:00 AM'],
            },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: '14px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <item.icon size={20} color="rgba(255,255,255,0.8)" />
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
                  {item.title}
                </div>
                {item.lines.map(line => (
                  <div key={line} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: '1.7' }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}