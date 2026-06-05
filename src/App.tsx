import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MajorEvent from './components/MajorEvent';
import Services from './components/Services';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* Custom Change: Major Event above Service Provider */}
        <MajorEvent />
        <Services />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
