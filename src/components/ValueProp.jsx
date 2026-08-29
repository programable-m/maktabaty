const ITEMS = [
  {
    icon: '📸',
    title: 'صيفط اللائحة',
    text: 'صوّر اللائحة المدرسية وصيفطها لينا فوراً فالواتساب.',
  },
  {
    icon: '⚡',
    title: 'تحضير سريع',
    text: 'حنا نوجدو ليك كلشي: كتب، دفاتر، أغلفة وجميع المستلزمات.',
  },
  {
    icon: '🚚',
    title: 'توصيل أو استلام',
    text: 'اختار واش تجي تاخذها واجدة من المكتبة أو نوصلوها حتى لدارك.',
  },
];

function ValueProp() {
  return (
    <section id="value" className="py-16 md:py-24">
      <div className="container-custom">
        <p className="eyebrow justify-center mb-3">بلا زحام، بلا صداع</p>
        <h2 className="section-title">علاش تضيع وقتك فالزحام؟</h2>
        <p className="section-subtitle">نتا غير صيفط اللائحة، وحنا نديرو الباقي.</p>

        <div className="grid sm:grid-cols-3 gap-x-6 gap-y-10 mt-4">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="list-card p-6 pt-8 text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full text-2xl mb-4"
                style={{ background: 'var(--color-gold-pale)' }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="block text-xs font-bold mb-1" style={{ color: 'var(--color-gold-deep)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-navy)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
