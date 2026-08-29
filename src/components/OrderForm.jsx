import { useEffect, useRef, useState } from 'react';
import { CameraIcon, StoreIcon, TruckIcon, XIcon, WhatsAppIcon, CheckIcon } from './icons';
import { openWhatsApp } from '../lib/whatsapp';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function OrderForm() {
  const [pickupMethod, setPickupMethod] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(false);
  const inputRef = useRef(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [previewUrl]);

  function handleFile(selected) {
    if (!selected) return;
    if (!ACCEPTED_TYPES.includes(selected.type)) {
      setError('صيغة الصورة غير مدعومة. استعمل JPG، PNG أو WEBP.');
      return;
    }
    setError('');
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  }

  function removeFile() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  function handleDrop(e) {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    handleFile(dropped);
  }

  function isPhoneValid(value) {
    if (!value.trim()) return true; // optional
    const digits = value.replace(/\s|-/g, '');
    return /^(0|\+212)[5-7]\d{8}$/.test(digits);
  }

  function handleSubmit() {
    if (!pickupMethod) {
      setError('اختار طريقة الاستلام قبل ما تصيفط الطلب 🙏');
      return;
    }
    if (!isPhoneValid(phone)) {
      setError('تأكد من رقم الهاتف (مثلاً 0779063241).');
      return;
    }
    setError('');
    openWhatsApp({ pickupMethod, name, phone });
    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 6000);
  }

  return (
    <section id="order" className="py-16 md:py-24">
      <div className="container-custom">
        <p className="eyebrow justify-center mb-3">جاهزين نبداو</p>
        <h2 className="section-title">صيفط لينا اللائحة.. وحنا نديرو الباقي 📚</h2>
        <p className="section-subtitle">
          ما تحتاجش تعمر فورم طويل. غير اختار طريقة الاستلام، وإذا بغيتي زيد الاسم ورقم الهاتف، ومن بعد صيفط اللائحة فالواتساب.
        </p>

        <div className="max-w-2xl mx-auto list-card p-5 sm:p-8">
          {/* Step 1: upload */}
          <div className="mb-8">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--color-navy)' }}>
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs text-white shrink-0"
                style={{ background: 'var(--color-gold)' }}
              >
                1
              </span>
              صوّر أو ارفع اللائحة المدرسية
            </h3>

            {!previewUrl ? (
              <label
                htmlFor="list-upload"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed cursor-pointer py-10 px-4 text-center transition-colors hover:bg-[var(--color-cream-deep)]/60"
                style={{ borderColor: 'var(--color-gold-light)' }}
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full" style={{ background: 'var(--color-gold-pale)' }}>
                  <CameraIcon className="w-6 h-6" style={{ color: 'var(--color-gold-deep)' }} />
                </span>
                <span className="text-sm font-bold" style={{ color: 'var(--color-navy)' }}>
                  📸 صوّر أو ارفع اللائحة المدرسية
                </span>
                <span className="text-xs" style={{ color: 'var(--color-ink-soft)' }}>
                  JPG، PNG أو WEBP
                </span>
                <input
                  ref={inputRef}
                  id="list-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  capture="environment"
                  className="sr-only"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
              </label>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl border p-3" style={{ borderColor: 'var(--color-border)' }}>
                <img src={previewUrl} alt="معاينة اللائحة المدرسية المرفوعة" className="w-20 h-20 object-cover rounded-xl shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--color-navy)' }}>
                    {file?.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-whatsapp-dark)' }}>
                    جاهزة ✅
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  aria-label="حذف الصورة"
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-cream-deep)]"
                >
                  <XIcon className="w-4 h-4" style={{ color: 'var(--color-ink-soft)' }} />
                </button>
              </div>
            )}
          </div>

          {/* Step 2: pickup method */}
          <div className="mb-8">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--color-navy)' }}>
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs text-white shrink-0"
                style={{ background: 'var(--color-gold)' }}
              >
                2
              </span>
              اختار طريقة الاستلام
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <PickupCard
                icon={<StoreIcon className="w-7 h-7" />}
                title="الاستلام من المكتبة"
                text="نوجدها ليك وتجي تاخذها واجدة"
                emoji="🏪"
                selected={pickupMethod === 'pickup'}
                onClick={() => setPickupMethod('pickup')}
              />
              <PickupCard
                icon={<TruckIcon className="w-7 h-7" />}
                title="التوصيل للمنزل"
                text="نوجدها ليك ونوصلوها حتى لباب دارك"
                emoji="🚚"
                selected={pickupMethod === 'delivery'}
                onClick={() => setPickupMethod('delivery')}
              />
            </div>
          </div>

          {/* Step 3: optional info */}
          <div className="mb-8">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--color-navy)' }}>
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs text-white shrink-0"
                style={{ background: 'var(--color-gold)' }}
              >
                3
              </span>
              الاسم ورقم الهاتف <span className="font-normal" style={{ color: 'var(--color-ink-soft)' }}>(اختياري)</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">الاسم</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثلاً: محمد"
                  className="input-field"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">رقم الهاتف</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0779063241"
                  className="input-field"
                  autoComplete="tel"
                  dir="ltr"
                />
              </div>
            </div>
          </div>

          {error && (
            <p role="alert" className="mb-4 text-sm font-semibold text-center" style={{ color: 'var(--color-brick)' }}>
              {error}
            </p>
          )}

          <button type="button" onClick={handleSubmit} className="btn-primary w-full text-lg">
            <WhatsAppIcon className="w-5 h-5" />
            تأكيد وإرسال عبر الواتساب
          </button>

          {toast && (
            <div
              role="status"
              className="mt-4 flex items-center gap-2 justify-center rounded-xl py-3 px-4 text-sm font-semibold animate-fade-up"
              style={{ background: 'var(--color-gold-pale)', color: 'var(--color-gold-deep)' }}
            >
              <CheckIcon className="w-4 h-4 shrink-0" />
              باقي غير صيفط صورة اللائحة فالواتساب 📸❤️
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PickupCard({ icon, title, text, emoji, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="text-right rounded-2xl border-2 p-5 transition-all duration-200"
      style={{
        borderColor: selected ? 'var(--color-gold)' : 'var(--color-border)',
        background: selected ? 'var(--color-gold-pale)' : 'var(--color-paper)',
      }}
    >
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: selected ? 'var(--color-gold-light)' : 'var(--color-cream-deep)', color: 'var(--color-navy)' }}>
        {icon}
      </span>
      <h4 className="text-base font-bold mb-1 flex items-center gap-1.5" style={{ color: 'var(--color-navy)' }}>
        {title} <span aria-hidden="true">{emoji}</span>
      </h4>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
        {text}
      </p>
    </button>
  );
}

export default OrderForm;
