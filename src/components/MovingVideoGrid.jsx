import { motion } from "framer-motion";

const movePath = {
  x: ["0vw", "-18vw", "-18vw", "-45vw", "-45vw", "-72vw", "-72vw", "0vw"],
  y: ["0vh", "0vh", "-32vh", "-32vh", "-62vh", "-62vh", "-90vh", "0vh"],
};

export default function MovingVideoGrid() {
  return (
    <section id="grid" className="relative h-screen overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,.25),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,.18),transparent_35%)]" />

      <div className="absolute left-1/2 top-10 z-30 w-[92%] max-w-4xl -translate-x-1/2 text-center">
        <p className="text-xs font-black uppercase tracking-[0.45em] text-blue-300">
          Dynamic Moving Canvas
        </p>
        <h2 className="mt-3 text-4xl font-black sm:text-6xl">
          Explore through motion.
        </h2>
      </div>

      <motion.div
        className="absolute left-0 top-0 h-[220vh] w-[220vw]"
        animate={movePath}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,72,153,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,72,153,.35)_1px,transparent_1px)] bg-[size:33.33vw_33.33vh]" />

        <motion.div
          className="absolute h-5 w-5 rounded-full bg-gradient-to-br from-pink-400 to-blue-500 shadow-[0_0_35px_rgba(96,165,250,.9)]"
          animate={{
            left: ["12vw", "42vw", "42vw", "72vw", "72vw", "102vw", "102vw", "12vw"],
            top: ["38vh", "38vh", "72vh", "72vh", "108vh", "108vh", "145vh", "38vh"],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <svg className="absolute left-0 top-0 h-full w-full opacity-60">
          <path
            d="M 160 260 L 520 260 Q 570 260 570 210 L 570 140 Q 570 90 620 90 L 850 90"
            stroke="rgba(255,255,255,.55)"
            strokeWidth="2"
            strokeDasharray="7 8"
            fill="none"
          />
          <path
            d="M 520 560 L 820 560 Q 870 560 870 510 L 870 450 Q 870 400 920 400 L 1220 400"
            stroke="rgba(255,255,255,.45)"
            strokeWidth="2"
            strokeDasharray="7 8"
            fill="none"
          />
        </svg>

        {/* Row 1 */}
        <VideoBlock video="/videos/des.mp4" className="left-[0vw] top-[20vh] w-[45vw] h-[34vh]" />
        <TextBlock title="Design with motion" text="Each section moves like a visual journey." className="left-[45vw] top-[20vh] w-[35vw] h-[34vh]" />
        <VideoBlock video="/videos/launch.mp4" className="left-[80vw] top-[20vh] w-[45vw] h-[34vh]" />

        {/* Row 2 */}
        <TextBlock title="Dynamic flow" text="Left to right, down, right, up — like a 3D website path." className="left-[0vw] top-[54vh] w-[38vw] h-[34vh]" />
        <VideoBlock video="/videos/idea.mp4" className="left-[38vw] top-[54vh] w-[42vw] h-[34vh]" />
        <TextBlock title="Every point visible" text="Video, heading and data appear inside each motion block." className="left-[80vw] top-[54vh] w-[40vw] h-[34vh]" />

        {/* Row 3 */}
        <VideoBlock video="/videos/hero.mp4" className="left-[0vw] top-[88vh] w-[42vw] h-[34vh]" />
        <TextBlock title="Cinematic website" text="Not static cards — full moving canvas experience." className="left-[42vw] top-[88vh] w-[38vw] h-[34vh]" />
        <VideoBlock video="/videos/build.mp4" className="left-[80vw] top-[88vh] w-[46vw] h-[34vh]" />

        {/* Row 4 */}
        <TextBlock title="Responsive idea" text="On mobile it remains visual, clean and scrollable." className="left-[12vw] top-[122vh] w-[38vw] h-[34vh]" />
        <VideoBlock video="/videos/idea.mp4" className="left-[50vw] top-[122vh] w-[45vw] h-[34vh]" />
        <VideoBlock video="/videos/hero.mp4" className="left-[95vw] top-[122vh] w-[45vw] h-[34vh]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#05070d_82%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#05070d] to-transparent" />
    </section>
  );
}

function VideoBlock({ video, className }) {
  return (
    <div className={`absolute overflow-hidden border border-pink-500/35 bg-black ${className}`}>
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

function TextBlock({ title, text, className }) {
  return (
    <div className={`absolute flex items-center justify-center border border-pink-500/35 bg-[#090914] p-8 ${className}`}>
      <div>
        <h3 className="text-4xl font-light text-white">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-8 text-white/55">
          {text}
        </p>
      </div>
    </div>
  );
}