import { Award, Phone, Mail } from 'lucide-react'

const punongBarangay = {
  name: 'Hon. [Punong Barangay Full Name]',
  position: 'Punong Barangay',
  term: '2023 – 2026',
  phone: '0917-XXX-XXXX',
  email: 'captain@calunangan.gov.ph',
  committee: 'Chief Executive Officer of the Barangay',
  initials: 'PB',
}

const kagawads = [
  { name: 'Hon. Edgar Mejares', position: 'Barangay Kagawad', committee: 'Peace & Order', initials: 'K1', term: '2023–2026' },
  { name: 'Hon. Siegfred Hitgano', position: 'Barangay Kagawad', committee: 'Health & Sanitation', initials: 'K2', term: '2023–2026' },
  { name: 'Hon. Paul Zarco', position: 'Barangay Kagawad', committee: 'Education & Culture', initials: 'K3', term: '2023–2026' },
  { name: 'Hon. Jerson Argomido', position: 'Barangay Kagawad', committee: 'Agriculture', initials: 'K4', term: '2023–2026' },
  { name: 'Hon. Eliseo Isidro Jr.', position: 'Barangay Kagawad', committee: 'Infrastructure', initials: 'K5', term: '2023–2026' },
  { name: 'Hon. Rafel Toñacao', position: 'Barangay Kagawad', committee: 'Women & Family', initials: 'K6', term: '2023–2026' },
  { name: 'Hon. Danilo Wenceslaon', position: 'Barangay Kagawad', committee: 'Environment', initials: 'K7', term: '2023–2026' },
]

const skOfficials = [
  { name: 'Hon. Amir Joseph Rivera', position: 'SK Chairperson', initials: 'SK', term: '2023–2026' },
  { name: '[SK Kagawad Name]', position: 'SK Kagawad', initials: 'S1', term: '2023–2026' },
  { name: '[SK Kagawad Name]', position: 'SK Kagawad', initials: 'S2', term: '2023–2026' },
]

const staffMembers = [
  { name: 'Jocelyn Montajes', position: 'Barangay Secretary', initials: 'BS' },
  { name: 'Evelyn Bolaño', position: 'Barangay Treasurer', initials: 'BT' },
]

const colorMap: Record<string, { bg: string; color: string }> = {
  PB: { bg: '#003087', color: '#fff' },
  K1: { bg: '#0052CC', color: '#fff' },
  K2: { bg: '#0052CC', color: '#fff' },
  K3: { bg: '#0052CC', color: '#fff' },
  K4: { bg: '#0052CC', color: '#fff' },
  K5: { bg: '#0052CC', color: '#fff' },
  K6: { bg: '#0052CC', color: '#fff' },
  K7: { bg: '#0052CC', color: '#fff' },
  SK: { bg: '#065F46', color: '#fff' },
  S1: { bg: '#065F46', color: '#fff' },
  S2: { bg: '#065F46', color: '#fff' },
  BS: { bg: '#374151', color: '#fff' },
  BT: { bg: '#374151', color: '#fff' },
}

function Avatar({ initials, size = 64 }: { initials: string; size?: number }) {
  const colors = colorMap[initials] ?? { bg: '#003087', color: '#fff' }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: colors.bg, color: colors.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.28, fontWeight: 500, flexShrink: 0,
      border: '3px solid #E5E7EB',
    }}>
      {initials}
    </div>
  )
}

function OfficialCard({
  name, position, committee, initials, term, phone, email, large = false,
}: {
  name: string; position: string; committee?: string;
  initials: string; term?: string; phone?: string; email?: string; large?: boolean
}) {
  return (
    <div style={{
      background: '#fff',
      border: '0.5px solid #E5E7EB',
      borderRadius: '12px',
      padding: large ? '28px 24px' : '20px 16px',
      display: 'flex',
      flexDirection: large ? 'row' : 'column',
      alignItems: large ? 'center' : 'flex-start',
      gap: large ? '24px' : '14px',
      gridColumn: large ? '1 / -1' : undefined,
    }}>
      <Avatar initials={initials} size={large ? 90 : 64} />
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: large ? '20px' : '14px',
          fontWeight: 500, marginBottom: '2px',
        }}>
          {name}
        </div>
        <div style={{
          fontSize: large ? '14px' : '12px',
          color: '#0052CC', fontWeight: 500, marginBottom: '4px',
        }}>
          {position}
        </div>
        {committee && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            background: '#E8F0FE', color: '#003087',
            fontSize: '11px', padding: '3px 10px',
            borderRadius: '99px', marginBottom: '8px',
          }}>
            <Award size={11} />
            {committee}
          </div>
        )}
        {term && (
          <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '8px' }}>
            Term: {term}
          </div>
        )}
        {(phone || email) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6B7280' }}>
                <Phone size={12} /> {phone}
              </div>
            )}
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6B7280' }}>
                <Mail size={12} /> {email}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{
        width: '40px', height: '3px',
        background: '#003087', borderRadius: '2px', marginBottom: '12px',
      }} />
      <h2 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 4px' }}>{title}</h2>
      <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>{subtitle}</p>
    </div>
  )
}

export default function OfficialsPage() {
  return (
    <div>

      {/* Page hero */}
      <div style={{
        background: 'linear-gradient(135deg, #001F5C 0%, #003087 100%)',
        padding: '40px 20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Home › Officials
          </div>
          <h1 style={{
            color: '#fff', fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 500, margin: '0 0 8px',
          }}>
            Barangay Officials
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>
            Meet the elected and appointed officials serving Barangay Calunangan — Term 2023–2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Punong Barangay */}
        <SectionHeading
          title="Punong Barangay"
          subtitle="Chief Executive Officer of Barangay Calunangan"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px', marginBottom: '48px',
        }}>
          <OfficialCard {...punongBarangay} large />
        </div>

        {/* Kagawads */}
        <SectionHeading
          title="Sangguniang Barangay Members"
          subtitle="Elected Barangay Kagawads — Term 2023–2026"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px', marginBottom: '48px',
        }}>
          {kagawads.map(k => <OfficialCard key={k.initials} {...k} />)}
        </div>

        {/* SK */}
        <SectionHeading
          title="Sangguniang Kabataan"
          subtitle="Youth Council Officials — Term 2023–2026"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px', marginBottom: '48px',
        }}>
          {skOfficials.map(s => <OfficialCard key={s.initials} {...s} />)}
        </div>

        {/* Staff */}
        <SectionHeading
          title="Barangay Staff"
          subtitle="Appointed administrative staff"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px', marginBottom: '48px',
        }}>
          {staffMembers.map(s => <OfficialCard key={s.initials} {...s} />)}
        </div>

        {/* Transparency note */}
        <div style={{
          background: '#E8F0FE',
          border: '0.5px solid #93C5FD',
          borderRadius: '12px',
          padding: '20px 24px',
          display: 'flex', gap: '14px', alignItems: 'flex-start',
        }}>
          <Award size={20} color="#003087" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#003087', marginBottom: '4px' }}>
              Transparency & Accountability
            </div>
            <div style={{ fontSize: '13px', color: '#1D4ED8', lineHeight: '1.7' }}>
              All barangay officials are elected public servants accountable to the residents of
              Barangay Calunangan. Official records, resolutions, and financial reports are available
              at the Barangay Hall during office hours.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}