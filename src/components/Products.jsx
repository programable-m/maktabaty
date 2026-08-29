const PRODUCTS = [
  { emoji: '📚', label: 'Fournitures scolaires' },
  { emoji: '📝', label: 'Papeterie' },
  { emoji: '🎒', label: 'Sacs & Trousses' },
  { emoji: '🖨️', label: 'Impression & Photocopie' },
];

function Products() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-2 text-center rounded-2xl py-6 px-3 border"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-paper)' }}
            >
              <span className="text-3xl" aria-hidden="true">{p.emoji}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
