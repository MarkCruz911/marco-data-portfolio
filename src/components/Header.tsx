import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#about" aria-label="Marco Cruz home">
        MC<span>.</span>
      </a>
      <nav aria-label="Main navigation" className={open ? 'nav open' : 'nav'}>
        {[
          ['about', 'About'],
          ['projects', 'Projects'],
          ['experience', 'Experience'],
          ['resume', 'Resume'],
          ['contact', 'Contact'],
        ].map(([id, label]) => (
          <a key={id} href={'#' + id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
