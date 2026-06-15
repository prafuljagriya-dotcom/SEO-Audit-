import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Credentials from '@/components/Credentials';
import AIApproach from '@/components/AIApproach';
import Expertise from '@/components/Expertise';
import Portfolio from '@/components/Portfolio';
import AskPraful from '@/components/AskPraful';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Credentials />
        <AIApproach />
        <Expertise />
        <Portfolio />
        <AskPraful />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
