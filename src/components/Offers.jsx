import { WhatsAppIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

const OFFERS = [
  { emoji: '🎁', title: 'CADEAU OFFERT', text: 'لكل لائحة مدرسية كاملة' },
  { emoji: '👨‍👩‍👧‍👦', title: 'FAMILLES', text: 'تخفيضات خاصة للعائلات اللي عندها أكثر من ولد' },
  { emoji: '💰', title: 'PRIX IMBATTABLES', text: 'مستلزمات مدرسية بجودة مزيانة وبأثمنة مناسبة' },
  { emoji: '🎒', title: 'TOUS LES NIVEAUX', text: 'Maternelle · Primaire · Collège · Lycée' },
];

function Offers() {
  return (
    <section id="offers" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--color-navy)' }}>
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--color-gold)' }} />

      <div className="container-custom relative">
        <p className="eyebrow justify-center mb-3" style={{ color: 'var(--color-gold-light)' }}>
          موسم الدخول المدرسي
        </p>
        <h2 className="section-title text-white">OFFRES RENTRÉE 2026-2027 🎁</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl p-6 text-center border transition-transform hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(227,199,137,0.25)' }}
            >
              <span className="text-3xl block mb-3" aria-hidden="true">{offer.emoji}</span>
              <h3 className="text-sm font-extrabold tracking-wide mb-2" style={{ color: 'var(--color-gold-light)' }}>
                {offer.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">{offer.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button type="button" onClick={() => openWhatsApp({})} className="btn-primary">
            <WhatsAppIcon className="w-5 h-5" />
            صيفط اللائحة ديالك دابا
          </button>
        </div>
      </div>
    </section>
  );
}

export default Offers;
