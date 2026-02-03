import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import ProjectList from '@/components/ProjectList';
import VideoShowcase from '@/components/VideoShowcase';
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

        <VideoShowcase />

        {/* <Branding /> */}

        {/* <Consulting />

        <Clients /> */}

        <Contact /> 
      </main>
      <Footer />
    </>
  );
}
