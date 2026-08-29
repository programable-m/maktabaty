// Single source of truth for the library's WhatsApp number and message building.
export const WHATSAPP_NUMBER = '212779063241';

/**
 * Builds the pre-filled WhatsApp message and returns a wa.me link.
 * All fields are optional except we always include the greeting + closing line
 * so the shopkeeper knows a photo of the list is coming next.
 */
export function buildWhatsAppLink({ pickupMethod, name, phone } = {}) {
  const lines = ['السلام عليكم 👋', 'بغيت نوجد اللائحة المدرسية ديال ولادي.'];

  if (pickupMethod) {
    const label = pickupMethod === 'delivery' ? 'التوصيل للمنزل 🚚' : 'الاستلام من المكتبة 🏪';
    lines.push(`طريقة الاستلام: ${label}`);
  }
  if (name && name.trim()) {
    lines.push(`الاسم: ${name.trim()}`);
  }
  if (phone && phone.trim()) {
    lines.push(`رقم الهاتف: ${phone.trim()}`);
  }

  lines.push('', 'غادي نصيفط صورة اللائحة هنا 📸');

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function openWhatsApp(options) {
  window.open(buildWhatsAppLink(options), '_blank', 'noopener,noreferrer');
}
