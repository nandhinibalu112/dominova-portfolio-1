import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

export default function MajorEvent() {
  return (
    <section id="event" className="py-24 relative overflow-hidden bg-background">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              <Award className="w-4 h-4" />
              Featured Event
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tech Symposium at <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">
                Tagore College
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We recently concluded a highly successful 3-day intensive workshop at Tagore College of Engineering and Technology. 
              Over 500+ students participated in hands-on sessions covering Artificial Intelligence, modern Python frameworks, and Advanced Software Testing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-card border border-muted flex items-center justify-center shadow-lg">
                  <Calendar className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">March 15-17, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-card border border-muted flex items-center justify-center shadow-lg">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Tagore Campus</p>
                </div>
              </div>
            </div>

            <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-card border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(251,208,81,0.15)] hover:shadow-[0_0_25px_rgba(251,208,81,0.4)]">
              View Event Report
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-muted shadow-2xl relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
                alt="Tagore College Event" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Premium Glassmorphism Stats Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-sm text-gray-300 font-medium">Students Trained</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
