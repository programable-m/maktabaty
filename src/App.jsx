import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import OrderForm from './components/OrderForm';
import Offers from './components/Offers';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import ServiceBadge from './components/ServiceBadge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <HowItWorks />
        <OrderForm />
        <Offers />
        <Products />
        <Testimonials />
        <ServiceBadge />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;