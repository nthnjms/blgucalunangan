export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#003087',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏛️</div>
      <h1 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>
        Barangay Calunangan
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
        Nampicuan, Nueva Ecija — Official Website
      </p>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '32px' }}>
        Official website launching soon.
      </p>
    </main>
  )
}
