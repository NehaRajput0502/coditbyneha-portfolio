import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    no: "01",
    title: "Visual Thinking",
    text: "Start with motion, not static layout.",
    stat1: "3D",
    stat2: "Motion",
  },
  {
    no: "02",
    title: "Smart Automation",
    text: "Move from idea to digital workflow.",
    stat1: "AI",
    stat2: "Flow",
  },
  {
    no: "03",
    title: "Live Dashboards",
    text: "Turn raw information into clear visuals.",
    stat1: "Data",
    stat2: "Live",
  },
  {
    no: "04",
    title: "Interactive Web",
    text: "Build websites that feel alive.",
    stat1: "Web",
    stat2: "UX",
  },
  {
    no: "05",
    title: "Launch Ready",
    text: "Make everything responsive and smooth.",
    stat1: "Fast",
    stat2: "Ready",
  },
];

const focusPath = [
  { left: "22%", top: "34%" },
  { left: "58%", top: "34%" },
  { left: "58%", top: "68%" },
  { left: "82%", top: "68%" },
  { left: "82%", top: "28%" },
];

const windows = [
  {
    id: "main",
    video: "/videos/grid-1.mp4",
    label: "Motion Lab",
    positions: [
      { left: "26%", top: "38%", width: "38vw", height: "34vh", rotateY: -18, scale: 1 },
      { left: "58%", top: "34%", width: "42vw", height: "36vh", rotateY: 0, scale: 1.08 },
      { left: "36%", top: "70%", width: "34vw", height: "28vh", rotateY: 16, scale: 0.95 },
      { left: "76%", top: "68%", width: "34vw", height: "30vh", rotateY: -10, scale: 1 },
      { left: "78%", top: "30%", width: "40vw", height: "34vh", rotateY: 12, scale: 1.05 },
    ],
  },
  {
    id: "sideA",
    video: "/videos/grid-2.mp4",
    label: "Automation",
    positions: [
      { left: "68%", top: "32%", width: "22vw", height: "28vh", rotateY: 22, scale: 0.9 },
      { left: "24%", top: "32%", width: "28vw", height: "32vh", rotateY: -16, scale: 1 },
      { left: "68%", top: "30%", width: "24vw", height: "26vh", rotateY: 12, scale: 0.9 },
      { left: "32%", top: "70%", width: "28vw", height: "30vh", rotateY: -20, scale: 1 },
      { left: "30%", top: "30%", width: "24vw", height: "26vh", rotateY: -12, scale: 0.9 },
    ],
  },
  {
    id: "sideB",
    video: "/videos/grid-3.mp4",
    label: "Dashboard",
    positions: [
      { left: "76%", top: "70%", width: "26vw", height: "30vh", rotateX: -12, scale: 0.95 },
      { left: "78%", top: "68%", width: "24vw", height: "28vh", rotateX: 10, scale: 0.9 },
      { left: "58%", top: "68%", width: "42vw", height: "36vh", rotateX: 0, scale: 1.08 },
      { left: "52%", top: "30%", width: "26vw", height: "28vh", rotateX: 12, scale: 0.95 },
      { left: "18%", top: "70%", width: "28vw", height: "30vh", rotateX: -10, scale: 1 },
    ],
  },
  {
    id: "sideC",
    video: "/videos/grid-4.mp4",
    label: "Web UX",
    positions: [
      { left: "18%", top: "72%", width: "24vw", height: "28vh", rotateZ: -5, scale: 0.9 },
      { left: "42%", top: "70%", width: "28vw", height: "30vh", rotateZ: 5, scale: 1 },
      { left: "18%", top: "30%", width: "26vw", height: "28vh", rotateZ: -8, scale: 0.95 },
      { left: "82%", top: "68%", width: "40vw", height: "36vh", rotateZ: 0, scale: 1.08 },
      { left: "55%", top: "72%", width: "26vw", height: "28vh", rotateZ: 8, scale: 0.95 },
    ],
  },
];

export default function MovingVideoGrid() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="grid" className="relative overflow-hidden bg-[#05070d] py-24 md:h-screen md:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.22),transparent_32%)]" />

      {/* Desktop cinematic stage */}
      <div className="relative hidden h-screen overflow-hidden md:block [perspective:1500px]">
        {/* Fine grid lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[22%] top-0 h-full w-px bg-pink-500/40" />
          <div className="absolute left-[58%] top-0 h-full w-px bg-blue-500/30" />
          <div className="absolute left-[82%] top-0 h-full w-px bg-pink-500/40" />
          <div className="absolute left-0 top-[34%] h-px w-full bg-blue-500/30" />
          <div className="absolute left-0 top-[68%] h-px w-full bg-pink-500/35" />
        </div>

        {/* Dotted movement path */}
        <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M22 34 L58 34 L58 68 L82 68 L82 28"
            fill="none"
            stroke="rgba(147,197,253,0.55)"
            strokeWidth="0.35"
            strokeDasharray="1.4 1.2"
          />
        </svg>

        {/* Moving glowing point */}
        <motion.div
          className="absolute z-40 h-5 w-5 rounded-full bg-blue-300 shadow-[0_0_40px_rgba(96,165,250,1)]"
          animate={focusPath[active]}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{ x: "-50%", y: "-50%" }}
        >
          <div className="absolute inset-[-10px] rounded-full border border-blue-300/50" />
          <div className="absolute inset-[-22px] rounded-full border border-pink-400/25" />
        </motion.div>

        {/* Text heading */}
        <div className="absolute left-10 top-12 z-50 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-blue-300">
            Cinematic Motion Section
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="mt-5 text-6xl font-black leading-[0.95]">
                {steps[active].title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/62">
                {steps[active].text}
              </p>

              <div className="mt-7 flex gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <p className="text-3xl font-black">{steps[active].stat1}</p>
                  <p className="text-xs text-white/45">Mode</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <p className="text-3xl font-black">{steps[active].stat2}</p>
                  <p className="text-xs text-white/45">Focus</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video windows */}
        <div className="absolute inset-0">
          {windows.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl"
              animate={item.positions[active]}
              transition={{
                duration: 1.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                x: "-50%",
                y: "-50%",
                transformStyle: "preserve-3d",
                zIndex: index === 0 ? 20 : 10,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.45rem]">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
                    {steps[active].no}
                  </p>
                  <h3 className="mt-2 text-3xl font-black">{item.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right vertical step list */}
        <div className="absolute right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
          {steps.map((step, index) => (
            <button
              key={step.no}
              onClick={() => setActive(index)}
              className={`h-12 w-12 rounded-full border text-sm font-black transition ${
                active === index
                  ? "border-blue-300 bg-blue-400 text-black shadow-[0_0_30px_rgba(96,165,250,0.8)]"
                  : "border-white/15 bg-white/10 text-white/55"
              }`}
            >
              {step.no}
            </button>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-52 bg-gradient-to-r from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-52 bg-gradient-to-l from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#05070d] to-transparent" />
      </div>

      {/* Mobile clean version */}
      <div className="relative z-10 px-5 md:hidden">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-300">
          Motion Section
        </p>
        <h2 className="mt-4 text-4xl font-black">Dynamic video journey.</h2>
        <p className="mt-4 leading-7 text-white/60">
          On mobile, the moving windows become clean stacked video cards.
        </p>

        <div className="mt-10 space-y-5">
          {steps.map((step, index) => (
            <div key={step.no} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
              <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                <video
                  src={`/videos/grid-${(index % 4) + 1}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-blue-300">{step.no}</p>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}