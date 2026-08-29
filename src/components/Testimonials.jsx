import { StarIcon } from './icons';

const TESTIMONIALS = [
  {
    name: 'أم ياسمين',
    text: 'أكثر حاجة ريحتني هي أنني ما بقيتش محتاجة نقلب على كل حاجة بوحدها. صيفطت اللائحة وخديتها واجدة.',
  },
  {
    name: 'أب محمد',
    text: 'الخدمة وفرت ليا بزاف ديال الوقت خصوصاً مع الدخول المدرسي.',
  },
  {
    name: 'أم سارة',
    text: 'التواصل فالواتساب كان ساهل واللائحة تجهزات ليا بطريقة منظمة.',
  },
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container-custom">
        <p className="eyebrow justify-center mb-3">شهادات</p>
        <h2 className="section-title">آراء الآباء والأمهات ❤️</h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="list-card p-6">
              <div className="flex gap-0.5 mb-3" style={{ color: 'var(--color-gold)' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-ink-soft)' }}>
                "{t.text}"
              </p>
              <p className="text-sm font-bold" style={{ color: 'var(--color-navy)' }}>
                {t.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8" style={{ color: 'var(--color-ink-soft)' }}>
          آراء من زبناء المكتبة، مكتوبة بصياغة طبيعية.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
