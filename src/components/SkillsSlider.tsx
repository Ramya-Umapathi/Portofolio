import { useState } from 'react';
import { SKILLS } from '../data';
import { useTheme, tokens } from '../context/ThemeContext';

export default function SkillsSlider() {
  const { isDark } = useTheme();
  const tk = tokens(isDark);
  const [paused, setPaused] = useState(false);
  const triple = [...SKILLS, ...SKILLS, ...SKILLS];

  const cardStyle = (color: string): React.CSSProperties => ({
    width: 175,
    flexShrink: 0,
    background: tk.surface,
    border: `1px solid ${tk.border}`,
    borderRadius: 16,
    padding: '22px 20px',
    cursor: 'default',
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  });

  return (
    <div>

      {/* Row 1 */}
      <div className="portofolio-slider-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`track-left ${paused ? 'paused' : ''}`}>
          {triple.map((sk, i) => (
            <div
              key={i}
              className="skill-hover"
              style={cardStyle(sk.color)}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = sk.color;
                el.style.boxShadow = `0 20px 48px ${sk.color}30`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = tk.border;
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: 11, color: sk.color,
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8,
              }}>{sk.name}</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28, fontWeight: 700, color: tk.text,
                lineHeight: 1, marginBottom: 12,
              }}>
                {sk.level}<span style={{ fontSize: 13, color: tk.muted, fontWeight: 400 }}>%</span>
              </div>
              <div style={{ height: 4, background: tk.surface2, borderRadius: 3, overflow: 'hidden' }}>
                <div
                  className="bar-fill"
                  style={{
                    width: `${sk.level}%`,
                    background: `linear-gradient(90deg, ${sk.color}66, ${sk.color})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 reverse */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 7%, black 93%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 7%, black 93%, transparent)',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
      </div>
    </div>
  );
}
