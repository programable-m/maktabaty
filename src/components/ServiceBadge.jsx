import { StarIcon } from './icons';

const BADGES = ['SERVICE RAPIDE', 'ACCUEIL CHALEUREUX', 'PRODUITS DE QUALITÉ'];

function ServiceBadge() {
  return (
    <section className="py-10">
      <div className="container-custom">
        <div
          className="flex flex-col items-center gap-4 text-center rounded-2xl py-8 px-6"
          style={{ background: 'var(--color-gold-pale)' }}
        >
          <div className="flex gap-1" style={{ color: 'var(--color-gold-deep)' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {BADGES.map((b, i) => (
              <span key={b} className="flex items-center gap-3">
                <span className="text-sm font-extrabold tracking-wide" style={{ color: 'var(--color-gold-deep)' }}>
                  {b}
                </span>
                {i < BADGES.length - 1 && <span style={{ color: 'var(--color-gold)' }}>•</span>}
              </span>
            ))}
          </div>
          <p className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
            خدمة سريعة • استقبال زوين • منتجات بجودة مزيانة
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceBadge;
