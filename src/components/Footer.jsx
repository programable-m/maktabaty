function Footer() {
  return (
    <footer className="py-10" style={{ background: 'var(--color-navy-deep)' }} role="contentinfo">
      <div className="container-custom flex flex-col items-center text-center gap-3">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="مكتبتي - Librairie Pour Vous"
          className="h-14 w-auto"
          loading="lazy"
        />
        <p className="text-sm font-semibold text-white/90">مكتبتي – Librairie Pour Vous</p>
        <p className="text-xs text-white/60 max-w-sm">Votre partenaire pour les fournitures scolaires et de bureau</p>
        <p className="text-xs text-white/50">Branes · Tanger</p>
        <p className="text-xs text-white/40 mt-2">© 2026 Librairie Pour Vous</p>
      </div>
    </footer>
  );
}

export default Footer;
