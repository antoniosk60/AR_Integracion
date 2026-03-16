
import React from 'react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="text-3xl font-black font-display tracking-tighter text-white block mb-6">
              GRUPO<span className="text-amber-500">-AR</span>
            </a>
            <p className="mt-2 text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Expertos en soluciones integrales para electricidad, telecomunicaciones, remodelaciones e impermeabilización. Calidad y profesionalismo en cada proyecto.
            </p>
            
            <div className="rounded-3xl overflow-hidden h-48 border border-white/10 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661592406716!2d-99.1674063!3d19.4270245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02f20!2sPaseo%20de%20la%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1710530000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-3">
               <p className="flex items-center gap-3 text-white font-medium">
                 <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">📧</span> 
                 randaleonel@gmail.com
               </p>
               <p className="flex items-center gap-3 text-white font-medium">
                 <span className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">📱</span> 
                 +52 729 685 3914
               </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Electricidad</a></li>
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Telecomunicaciones</a></li>
              <li><a href="#testimonios" onClick={(e) => handleSmoothScroll(e, 'testimonios')} className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Testimonios</a></li>
              <li><a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contacto')} className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Redes Sociales</h4>
            <div className="flex flex-col space-y-4">
              <a href="https://wa.me/527296853914" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-green-500/10 border border-white/10 p-4 rounded-2xl transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span className="text-white font-bold">WhatsApp Directo</span>
              </a>
              <a href="#" className="bg-white/5 hover:bg-blue-500/10 border border-white/10 p-4 rounded-2xl transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <span className="text-white font-bold">Facebook</span>
              </a>
              <a href="mailto:randaleonel@gmail.com" className="bg-white/5 hover:bg-amber-500/10 border border-white/10 p-4 rounded-2xl transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-white font-bold">Email Corporativo</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>&copy; 2025 Grupo AR. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;