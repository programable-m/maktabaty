import { useRef, useState } from 'react';
import { WhatsAppIcon, CheckIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

function Hero() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* ambient paper texture blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-40 blur-3xl" style={{ background: 'var(--color-gold-pale)' }} />
      <div className="pointer-events-none absolute top-40 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: 'var(--color-gold-light)' }} />

      <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Content side */}
        <div className="order-2 md:order-1 text-center md:text-right">
          <span className="eyebrow justify-center md:justify-start mb-5">RENTRÉE SCOLAIRE 2026 – 2027</span>

          <h1 className="text-3xl sm:text-4xl md:text-[2.9rem] font-extrabold leading-[1.25] mb-5" style={{ color: 'var(--color-navy)' }}>
            وجّد أدوات ولادك المدرسية في دقائق..
            <br />
            بلا زحام وبلا انتظار! 📚
          </h1>

          <p className="text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0" style={{ color: 'var(--color-ink-soft)' }}>
            صوّر لائحة المدرسة، صيفطها لينا فالواتساب، وحنا نوجدو ليك كلشي: الكتب، الدفاتر، الأغلفة والمستلزمات.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button type="button" onClick={() => openWhatsApp({})} className="btn-primary w-full sm:w-auto text-lg">
              <WhatsAppIcon className="w-5 h-5" />
              أرسل اللائحة عبر الواتساب
            </button>
            <a href="#how" className="text-sm font-bold underline underline-offset-4" style={{ color: 'var(--color-ink-soft)' }}>
              كيفاش كتخدم الخدمة؟ ↓
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            {['بلا فورم طويل', 'استلام أو توصيل', 'رد سريع فالواتساب'].map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--color-ink-soft)' }}>
                <CheckIcon className="w-4 h-4 shrink-0" style={{ color: 'var(--color-whatsapp-dark)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone-framed video side */}
        <div className="order-1 md:order-2 flex justify-center md:justify-start">
          <div className="relative">
            <div
              className="relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[2.6rem] p-2.5 animate-float-soft"
              style={{ background: 'var(--color-navy-deep)', boxShadow: '0 30px 60px -20px rgba(12,23,48,0.45), 0 0 0 1px rgba(182,134,47,0.25)' }}
            >
              <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-black">
                {videoError ? (
                  <img
                    src={`${import.meta.env.BASE_URL}images/i.png`}
                    alt="مستلزمات مدرسية جاهزة فمكتبتي"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={`${import.meta.env.BASE_URL}images/interface.mp4`}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={`${import.meta.env.BASE_URL}images/i.png`}
                    aria-label="لمحة على تحضير الطلبات"
                    onError={() => setVideoError(true)}
                  />
                )}
                {/* notch */}
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="w-24 h-5 bg-black rounded-b-2xl" />
                </div>
              </div>
            </div>

            {/* Floating "list slip" badge — the signature element */}
            <div className="list-card absolute -bottom-6 -right-8 md:-right-14 px-4 py-3 w-44 rotate-[-4deg]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-whatsapp)' }} />
                <span className="text-xs font-bold" style={{ color: 'var(--color-navy)' }}>
                  اللائحة وصلات ✅
                </span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
                كتب، دفاتر، أغلفة… كلشي طاير للتحضير
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
