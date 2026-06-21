import React from 'react';
import Portfolio from '../components/Portfolio';
import { motion } from 'motion/react';
import { HardHat } from 'lucide-react';

const ProyectosPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 sm:pb-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900 to-slate-900 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <HardHat className="w-4 h-4" />
            Galería y Casos de Éxito
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-display mb-4 tracking-tight"
          >
            Nuestros <span className="text-gradient">Proyectos</span> Realizados
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Descubre nuestra trayectoria a través de resultados reales. Cada proyecto refleja nuestro compromiso inquebrantable con la durabilidad, precisión y seguridad.
          </motion.p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-12 bg-white">
        <Portfolio />
      </section>
    </div>
  );
};

export default ProyectosPage;
