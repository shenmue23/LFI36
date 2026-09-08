import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Soutenir from './components/Soutenir';
import Events from './components/Events';
import Actualites from './components/Actualites';
import LocalGroups from './components/LocalGroups';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Soutenir />
        <Events />
        <Actualites />
        <LocalGroups />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
