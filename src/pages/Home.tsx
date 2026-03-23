import { useEffect } from 'react';
import { PROJECTS } from '../data';
import { useTheme, tokens } from '../context/ThemeContext';
import SkillsSlider from '../components/SkillsSlider';
import ExperienceSection from '../components/ExperienceSection';
import "../index.css";

/* ── tiny helpers ── */
const SectionLabel = ({ label, tk }: { label: string; tk: ReturnType<typeof tokens> }) => (
  <div className="portofolio-label-section" >
    <div className="portofolio-label-divider" style={{background: tk.accent}}> </div>
    <span className="portofolio-label" style={{color: tk.accent,
    }}>{label}</span>
  </div>
);

const SectionTitle = ({ part1, part2, tk }: { part1: string; part2: string; tk: ReturnType<typeof tokens> }) => (
  <h2 className="portofolio-heading" style={{
    color: tk.text
  }}>
    {part1} <span style={{ color: tk.accent }}>{part2}</span>
  </h2>
);

/* ── useReveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.portofolio-animation-load');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  const { isDark } = useTheme();
  const tk = tokens(isDark);
  useReveal();

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(28px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };

  return (
    <div style={{ background: tk.bg, color: tk.text, cursor: 'none' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${tk.bg}; }
        ::-webkit-scrollbar-thumb { background: ${tk.border}; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: ${tk.accent}; }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes spin { to{transform:rotate(360deg);} }
        @keyframes spinRev { to{transform:rotate(-360deg);} }
        @keyframes blobPulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.2);opacity:0.9} }
        @keyframes wave {
          0%{d:path("M0,64 C200,96 400,32 600,64 C800,96 1000,32 1200,64 L1200,200 L0,200 Z")}
          50%{d:path("M0,80 C200,32 400,96 600,64 C800,32 1000,96 1200,64 L1200,200 L0,200 Z")}
          100%{d:path("M0,64 C200,96 400,32 600,64 C800,96 1000,32 1200,64 L1200,200 L0,200 Z")}
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        id="hero" className='common-container'
        style={{
          minHeight: '100vh',
          background: tk.heroGrad,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative',
          overflow: 'hidden', padding: '100px 64px 80px',
        }}
      >
        {/* Animated blobs */}
        {[
          { w: 520, h: 520, top: -100, right: -80, bg: 'rgba(192,132,252,0.25)', dur: '8s' },
          { w: 380, h: 380, bottom: -60, left: -60, bg: 'rgba(129,140,248,0.2)', dur: '11s' },
          { w: 260, h: 260, top: '40%', left: '15%', bg: 'rgba(167,139,250,0.15)', dur: '13s' },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute', width: b.w, height: b.h,
            borderRadius: '50%', background: b.bg,
            top: b.top, right: b.right, bottom: b.bottom, left: b.left,
            pointerEvents: 'none',
            animation: `blobPulse ${b.dur} ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }} />
        ))}

        {/* Stars / particles */}
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 3 + 1, height: Math.random() * 3 + 1,
            borderRadius: '50%', background: 'rgba(255,255,255,0.6)',
            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            animation: `blobPulse ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* Avatar */}
        <div style={{ position: 'relative', marginBottom: 28, animation: 'float 5s ease-in-out infinite' }}>
          {/* Outer spinning ring */}
          <div style={{
            position: 'absolute', inset: -14, borderRadius: '50%',
            border: '1.5px dashed rgba(255,255,255,0.35)',
            animation: 'spin 16s linear infinite',
          }} />
          {/* Inner spinning ring */}
          <div style={{
            position: 'absolute', inset: -6, borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.2)',
            animation: 'spinRev 10s linear infinite',
          }} />
          {/* Avatar circle */}
          <div style={{
            width: 130, height: 130, borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.8)',
            background: 'linear-gradient(135deg, #7c3aed, #c084fc)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif",
            fontSize: 48, fontWeight: 700, color: '#fff',
            position: 'relative', zIndex: 1,
            boxShadow: '0 0 48px rgba(167,139,250,0.5)',
          }}>R</div>
          {/* Online dot */}
          <div style={{
            position: 'absolute', bottom: 6, right: 6,
            width: 20, height: 20, borderRadius: '50%',
            background: '#4ade80', border: '2.5px solid #fff',
            zIndex: 2, boxShadow: '0 0 8px #4ade80',
          }} />
        </div>

        <div style={{

          fontSize: 12, color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16,
        }}>Chennai, Tamil Nadu</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 800, color: '#fff',
          lineHeight: 1.05, letterSpacing: -2, marginBottom: 20,
          textShadow: '0 4px 32px rgba(0,0,0,0.3)',
        }}>Senior UI Developer</h1>

        <p style={{

          fontSize: 16, color: 'rgba(255,255,255,0.75)',
          maxWidth: 540, lineHeight: 1.8, marginBottom: 36,
        }}>
          I build scalable, responsive, and pixel-perfect user interfaces using modern frontend frameworks and CMS platforms.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
          <a href="#projects" style={{
            background: '#fff', color: '#7c3aed',
            fontWeight: 600, fontSize: 14,
            padding: '13px 30px', textDecoration: 'none', borderRadius: 50,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}
          >View Projects →</a>
          <a href="#contact" style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            color: '#fff',
            fontWeight: 600, fontSize: 14,
            padding: '13px 30px', textDecoration: 'none', borderRadius: 50,
            border: '1.5px solid rgba(255,255,255,0.4)',
            transition: 'transform 0.2s, background 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.15)'; }}
          >Contact Me</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 48, justifyContent: 'center',
          padding: '24px 48px',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)',
          borderRadius: 20, border: '1px solid rgba(255,255,255,0.2)',
        }}>
          {[['3+', 'Years Exp'], ['10', 'Projects'], ['12+', 'Skills']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 34, fontWeight: 800, color: '#fff', lineHeight: 1,
              }}>{n}</div>
              <div style={{

                fontSize: 11, color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 4,
              }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: '100%', height: 80, display: 'block' }}>
            <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
              fill={tk.bg} />
          </svg>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="about-container common-container">
        <div className="portofolio-animation-load" style={revealStyle}>
          <SectionLabel label="About" tk={tk} />
          <SectionTitle part1="Who" part2="I Am" tk={tk} />
        </div>
        <div className="about-section">
          <div className="portofolio-animation-load" style={{ ...revealStyle, transitionDelay: '0.1s' }}>
            <p className="portofolio-desc" style={{ color: tk.muted }}>
              I'm a professional <span style={{ color: tk.text, fontWeight: 600 }}>Senior UI Developer</span> with real-time experience delivering production-level web and mobile interfaces. My expertise lies in translating UI designs into clean, maintainable code using{' '}
              <span style={{ color: tk.accent, fontWeight: 600 }}>React, Angular</span>, and CMS platforms such as{' '}
              <span style={{ color: tk.accent, fontWeight: 600 }}>WordPress, Shopify</span>, and BigCommerce.
            </p>
            <p className="portofolio-desc margin-top-20" style={{ color: tk.muted }} >
              I strongly focus on usability, performance, and scalable UI architecture.
            </p>
          </div>
          <div className="portofolio-animation-load about-card-section" style={{ ...revealStyle, transitionDelay: '0.2s'}}>
            {[
              ['UI/UX Design', 'Pixel-perfect Figma to code'],
              ['Performance', 'Fast, optimised interfaces'],
              ['Responsive', 'Mobile-first development'],
              ['Architecture', 'Scalable component systems'],
            ].map(([title, desc]) => (
              <div key={title} className="about-card-inner-section" style={{
                background: tk.surface,
                border: `1px solid ${tk.border}`
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = tk.accent;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = tk.border;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div  className="about-card-heading" style={{
                color: tk.text
                }}>{title}</div>
                <div className="about-card-desc" style={{color: tk.muted
                }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{ background: tk.surface }} className='common-container'>
        <div className="portofolio-animation-load" style={revealStyle}>
          <SectionLabel label="Skills" tk={tk} />
          <SectionTitle part1="Tech" part2="Stack" tk={tk} />
        </div>
        <div className="portofolio-animation-load" style={{ ...revealStyle, transitionDelay: '0.15s' }}>
          <SkillsSlider />
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" className='common-container'>
        <div className="portofolio-animation-load" style={revealStyle}>
          <SectionLabel label="Experience" tk={tk} />
          <SectionTitle part1="Work" part2="History" tk={tk} />
        </div>
        <div className="portofolio-animation-load" style={{ ...revealStyle, transitionDelay: '0.15s' }}>
          <ExperienceSection />
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={{ background: tk.surface }} className='common-container'>
        <div className="portofolio-animation-load" style={revealStyle}>
          <SectionLabel label="Projects" tk={tk} />
          <SectionTitle part1="Featured" part2="Work" tk={tk} />
        </div>
        <div className="projects-container">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="portofolio-animation-load projects-card-container"
              style={{
                ...revealStyle,
                transitionDelay: `${0.05 * i}s`,
                background: tk.bg,
                border: `1px solid ${tk.border}`
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-7px)';
                el.style.borderColor = p.color;
                el.style.boxShadow = `0 20px 48px ${p.color}28`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = tk.border;
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{
                position: 'absolute', top: -16, right: -8,
                fontFamily: "'Playfair Display', serif",
                fontSize: 72, fontWeight: 800,
                color: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
                lineHeight: 1, pointerEvents: 'none',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{

                fontSize: 10, color: p.color,
                letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8,
              }}>{p.tag}</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 700, color: tk.text, marginBottom: 10,
              }}>{p.name}</div>
              <p style={{

                fontSize: 13, color: tk.muted, lineHeight: 1.75,
              }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className='common-container'>

        <div className="portofolio-animation-load" style={revealStyle}>
          <SectionLabel label="Contact" tk={tk} />
        </div>
        <h2 className="portofolio-animation-load" style={{
          ...revealStyle, transitionDelay: '0.1s',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 4vw, 54px)',
          fontWeight: 800, color: tk.text,
          letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 16,
        }}>
          Let's Work <span style={{ color: tk.accent }}>Together</span>
        </h2>
        <p className="portofolio-animation-load" style={{
          ...revealStyle, transitionDelay: '0.15s',

          fontSize: 15, color: tk.muted, marginBottom: 40, lineHeight: 1.8,
        }}>
          Open for Senior UI Developer opportunities. Let's build something great together.
        </p>
        <div className="rv" style={{
          ...revealStyle, transitionDelay: '0.2s',
          display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="mailto:ramya.techinfo2617@gmail.com" style={{
            background: tk.heroGrad,
            color: '#fff',
            fontWeight: 600, fontSize: 15,
            padding: '14px 34px', textDecoration: 'none', borderRadius: 50,
            boxShadow: `0 8px 32px ${tk.accent}44`,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 16px 48px ${tk.accent}55`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 32px ${tk.accent}44`; }}
          >Email Me</a>
          <a href="./public/assets/images/Ramya CV-2026.pdf" style={{
            background: 'transparent',
            border: `1.5px solid ${tk.border}`,
            color: tk.text,
            fontWeight: 600, fontSize: 15,
            padding: '14px 34px', textDecoration: 'none', borderRadius: 50,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'transform 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = tk.accent; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = tk.border; }}
          >Download CV</a>
        </div>

      </section>
    </div>
  );
}
