import { PinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

const MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Librairie Pour Vous, Branes, Tanger');

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow justify-center mb-3">تواصل معنا</p>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold mb-2" style={{ color: 'var(--color-navy)' }}>
            LIBRAIRIE POUR VOUS
          </h2>
          <p className="text-sm font-semibold mb-10" style={{ color: 'var(--color-gold-deep)' }}>
            مكتبتي — Branes, Tanger
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <ContactItem icon={<PinIcon className="w-5 h-5" />} label="Branes, Tanger" />
            <ContactItem icon={<PhoneIcon className="w-5 h-5" />} label="0779063241" dir="ltr" />
            <ContactItem icon={<MailIcon className="w-5 h-5" />} label="taswe9agency@yahoo.com" dir="ltr" small />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" onClick={() => openWhatsApp({})} className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon className="w-5 h-5" />
              تواصل معنا عبر الواتساب
            </button>
            <a href={MAPS_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              <PinIcon className="w-5 h-5" />
              لقاوني على Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, dir, small }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl py-5 px-3 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-paper)' }}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ background: 'var(--color-gold-pale)', color: 'var(--color-gold-deep)' }}>
        {icon}
      </span>
      <span className={`${small ? 'text-xs' : 'text-sm'} font-semibold break-all`} style={{ color: 'var(--color-navy)' }} dir={dir}>
        {label}
      </span>
    </div>
  );
}

export default Contact;
