import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Play, ZoomIn, X } from 'lucide-react';

const images = [
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", title: "Workshop Session" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", title: "Hackathon Mentoring" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", title: "Guest Lecture" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", title: "Interactive Lab" },
];

const videos = [
  { 
    id: "vid1",
    title: "AI Workshop Highlights", 
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
  { 
    id: "vid2",
    title: "Student Testimonials", 
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    url: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  
  // Lightbox State
  const [index, setIndex] = useState(-1);

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Media Gallery</h2>
          
          <div className="inline-flex items-center p-1 bg-background rounded-lg border border-muted">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'images' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Image Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'videos' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Video Gallery
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'images' ? (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-muted"
                  onClick={() => setIndex(idx)}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      View Larger
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {videos.map((vid) => (
                <div key={vid.id} className="group relative aspect-video rounded-xl overflow-hidden border border-muted">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(vid.url)}
                      className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-all hover:scale-110 shadow-[0_0_30px_rgba(251,208,81,0.4)]"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </button>
                    <span className="text-white font-medium">{vid.title}</span>
                    <button 
                      onClick={() => setActiveVideo(vid.url)}
                      className="mt-3 px-4 py-2 border border-white/30 rounded-md text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      View Video
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
          plugins={[Zoom]}
          carousel={{ padding: "10%" }}
          animation={{ swipe: 250 }}
        />

        {/* Fullscreen Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={() => setActiveVideo(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden border border-muted shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
