"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            className="font-display text-5xl tracking-tight text-gradient"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            VS
          </motion.div>
          <div className="mt-6 h-px w-48 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            Loading digital space
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
