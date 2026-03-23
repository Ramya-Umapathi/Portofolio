import { useState } from 'react';
import { EXPERIENCE } from '../data';
import { useTheme, tokens } from '../context/ThemeContext';

export default function ExperienceSection() {
  const { isDark } = useTheme();
  const tk = tokens(isDark);
  const [active, setActive] = useState(0);
  const exp = EXPERIENCE[active];

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '260px 1fr',
      border: `1px solid ${tk.border}`, borderRadius: 20,
      overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <div style={{ borderRight: `1px solid ${tk.border}`, background: tk.surface }}>
        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '22px 24px',
              borderBottom: `1px solid ${tk.border}`,
              borderLeft: `3px solid ${i === active ? e.color : 'transparent'}`,
              background: i === active ? tk.surface2 : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={el => {
              if (i !== active) (el.currentTarget as HTMLDivElement).style.background = tk.surface2;
            }}
            onMouseLeave={el => {
              if (i !== active) (el.currentTarget as HTMLDivElement).style.background = 'transparent';
            }}
          >
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9, color: e.color,
              letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 5,
            }}>{e.period}</div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 14, fontWeight: 700, color: tk.text, marginBottom: 2,
            }}>{e.role}</div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div
        key={active}
        style={{
          padding: '40px 36px', background: tk.surface2,
          animation: 'expFadeIn 0.35s ease',
        }}
      >
        <style>{`
          @keyframes expFadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9, color: exp.color,
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10,
        }}>{exp.period}</div>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 30, fontWeight: 700, color: tk.text,
          lineHeight: 1.1, marginBottom: 6,
        }}>{exp.role}</div>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, color: tk.muted,
          lineHeight: 1.85, marginBottom: 28,
        }}>{exp.desc}</p>

        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10, color: tk.muted,
          letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14,
        }}>Key Projects</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {exp.projects.map(p => (
            <span key={p} style={{
              background: `${exp.color}18`,
              border: `1px solid ${exp.color}50`,
              color: exp.color,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, padding: '7px 16px', borderRadius: 30,
            }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
