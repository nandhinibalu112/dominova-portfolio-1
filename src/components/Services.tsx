import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Code, Lightbulb, MonitorCheck } from 'lucide-react';

const services = [
  {
    title: 'Workshops & Training',
    description: 'Intensive, hands-on sessions covering Python, AI, Web Development, and Software Testing.',
    icon: BookOpen,
  },
  {
    title: 'Guest Lectures',
    description: 'Expert insights into industry trends, modern tech stacks, and career guidance for students.',
    icon: Users,
  },
  {
    title: 'Hackathon Guidance',
    description: 'Mentorship for participating in and organizing hackathons, from idea generation to deployment.',
    icon: Trophy,
  },
  {
    title: 'Custom Curriculum',
    description: 'Tailored technical content designed to match the specific needs of your institution.',
    icon: Code,
  },
  {
    title: 'Innovation Labs',
    description: 'Setting up and guiding student labs focused on AI, IoT, and Next-Gen technologies.',
    icon: Lightbulb,
  },
  {
    title: 'Placement Preparation',
    description: 'Coding interview prep, mock interviews, and resume building workshops.',
    icon: MonitorCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-card overflow-hidden">
      
      {/* Decorative gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Service Provider
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive IT training and mentorship programs designed specifically for engineering colleges and ambitious students.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-muted/50 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(251,208,81,0.1)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
