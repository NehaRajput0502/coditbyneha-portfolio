import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero({ onPlayGames }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#05070d]/70 to-[#05070d]" />

      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-white backdrop-blur-xl"
        >
          <Sparkles size={16} />
          CoditByNeha
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-5xl font-black leading-tight text-white sm:text-7xl lg:text-8xl"
        >
          I build digital experiences that move.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70"
        >
          Focused on practical digital solutions that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <a
            href="#grid"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-blue-400"
          >
            Explore Website <ArrowUpRight size={20} />
          </a>

          <button
            type="button"
            onClick={onPlayGames}
            className="text-sm font-bold text-white/55 underline underline-offset-4 transition hover:text-blue-300"
          >
          I'm Feeling Lucky
          </button>
        </motion.div>
      </div>
    </section>
  );
}