import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import ProjectList from '@/components/ProjectList';
import Branding from '@/components/Branding';
import Consulting from '@/components/Consulting';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <About />

        <Gallery />

        <ProjectList />

        <div className="h-[80vh]" />

        <Branding />

        <div className="h-[80vh]" />

        <Consulting />
        <div className="h-[80vh]" />

        <Clients />

        <div className="h-[80vh]" />

        <Contact /> 
      </main>
      <Footer />
    </>
  );
}
