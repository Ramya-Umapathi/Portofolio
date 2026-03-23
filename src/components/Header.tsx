import { useState, useEffect } from 'react';
import { useTheme, tokens } from '../context/ThemeContext';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const tk = tokens(isDark);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className='header-common-container'
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        background: scrolled
          ? isDark ? 'rgba(15,10,30,0.92)' : 'rgba(248,246,255,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${tk.border}` : '1px solid transparent',
        transition: 'all 0.35s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 22, fontWeight: 700,
        color: tk.text, letterSpacing: -0.5,
        cursor: 'default',
      }}>
        Ramya<span style={{ color: tk.accent }}>.</span>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {NAV_LINKS.map(n => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            style={{
              color: tk.muted, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, letterSpacing: '0.08em',
              transition: 'color 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = tk.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = tk.muted)}
          >
            {n}
          </a>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: tk.surface2,
            border: `1px solid ${tk.border}`,
            color: tk.text,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, padding: '7px 16px',
            borderRadius: 30, cursor: 'pointer',
            transition: 'all 0.25s',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = tk.accent;
            (e.currentTarget as HTMLButtonElement).style.color = tk.accent;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = tk.border;
            (e.currentTarget as HTMLButtonElement).style.color = tk.text;
          }}
        >
          <span style={{ fontSize: 14 }}>{isDark ? '☀️' : '🌙'}</span>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}
