import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

const NAV_LINKS = [
  { href: '#value', label: 'الخدمة' },
  { href: '#how', label: 'كيفاش كتخدم' },
  { href: '#offers', label: 'العروض' },
  { href: '#contact', label: 'تواصل معنا' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--color-paper)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="التنقل الرئيسي">
          <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="مكتبتي - الصفحة الرئيسية">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="مكتبتي - Librairie Pour Vous"
              className="h-11 md:h-14 w-auto"
              loading="eager"
            />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: 'var(--color-ink-soft)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => openWhatsApp({})}
            className="inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full text-white text-sm font-bold shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(180deg,#29d96b,var(--color-whatsapp) 60%,var(--color-whatsapp-dark))' }}
          >
            <WhatsAppIcon className="w-4.5 h-4.5" />
            <span>واتساب</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
