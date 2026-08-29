import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={() => openWhatsApp({})}
        className="btn-primary w-full shadow-2xl"
      >
        <WhatsAppIcon className="w-5 h-5" />
        صيفط اللائحة فالواتساب
      </button>
    </div>
  );
}

export default StickyWhatsApp;
