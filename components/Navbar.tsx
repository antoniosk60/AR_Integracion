import { AnimatePresence, motion } from 'framer-motion';

{/* Mobile Menu */}
<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Panel lateral */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
      >
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <span className="text-xl font-black font-display tracking-tighter text-slate-900">
            MENU
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl bg-slate-100 text-slate-900"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links con animación */}
        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={link.href}
                className={`block px-6 py-4 text-2xl font-black rounded-2xl transition-all ${
                  location.pathname === link.href 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100">
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-amber-500 text-white px-5 py-5 rounded-2xl text-xl font-black hover:bg-amber-600 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20"
          >
            Cotizar Ahora
          </Link>
          <p className="mt-6 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Grupo AR
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>