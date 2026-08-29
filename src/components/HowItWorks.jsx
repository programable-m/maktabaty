const STEPS = [
  { n: '01', icon: '📸', title: 'صوّر اللائحة', text: 'صورة وحدة من هاتفك كافية باش نبداو.' },
  { n: '02', icon: '💬', title: 'صيفطها فالواتساب', text: 'غير صيفط الصورة، وختار طريقة الاستلام.' },
  { n: '03', icon: '📚', title: 'حنا نوجدوها ليك', text: 'كتب، دفاتر وأغلفة، معدين ومرتبين.' },
];

function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24 section-alt">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Proof photo */}
        <div className="order-2 lg:order-1">
          <div className="list-card p-3 max-w-md mx-auto lg:mx-0 rotate-[-1.5deg]">
            <img
              src={`${import.meta.env.BASE_URL}images/i1.png`}
              alt="لوائح مدرسية معدة ومرتبة فأكياس، جاهزة للتسليم"
              className="w-full h-auto rounded-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-3">خطوة بخطوة</p>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold mb-8 leading-tight" style={{ color: 'var(--color-navy)' }}>
            من اللائحة حتى لدارك
            <br />
            فـ 3 خطوات
          </h2>

          <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:right-[27px] before:w-px before:bg-[var(--color-border)]">
            {STEPS.map((step) => (
              <li key={step.n} className="relative flex items-start gap-5">
                <span
                  className="relative z-10 shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
                  style={{ background: 'linear-gradient(160deg, var(--color-gold-light), var(--color-gold) 70%)' }}
                >
                  {step.icon}
                </span>
                <div className="pt-2">
                  <span className="text-xs font-bold" style={{ color: 'var(--color-gold-deep)' }}>
                    {step.n}
                  </span>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-navy)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-base font-bold" style={{ color: 'var(--color-navy)' }}>
              نتا صيفط اللائحة، وحنا نديرو الباقي!
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-ink-soft)' }}>
              Vous envoyez la liste, nous faisons le reste !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
