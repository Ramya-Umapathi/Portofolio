import { useTheme, tokens } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const tk = tokens(isDark);

  return (
    <footer
      style={{
        background: isDark ? '#0a061a' : '#1a0d3e',
        borderTop: `1px solid ${tk.border}`,
        padding: '32px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20, fontWeight: 700, color: '#ede8ff',
      }}>
        Ramya<span style={{ color: tk.accent }}>.</span>
      </div>

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7c6aaa' }}>
        © 2026 Ramya · Senior UI Developer · Chennai, Tamil Nadu
      </p>

      <div style={{ display: 'flex', gap: 20 }}>
        {['GitHub', 'LinkedIn', 'Behance'].map(s => (
          <a
            key={s} href="#"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, color: '#7c6aaa', textDecoration: 'none',
              letterSpacing: '0.08em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = tk.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = '#7c6aaa')}
          >{s}</a>
        ))}
      </div>
    </footer>
  );
}
