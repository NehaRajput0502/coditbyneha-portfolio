import { motion } from "framer-motion";

const cards = [
  {
    title: "Automation",
    text: "Systems that reduce manual work.",
    video: "/videos/grid-1.mp4",
    path: [
      { x: "-120vw", y: "8vh", rotateY: -35, scale: 0.75, zIndex: 1 },
      { x: "-35vw", y: "18vh", rotateY: -18, scale: 0.9, zIndex: 2 },
      { x: "0vw", y: "0vh", rotateY: 0, scale: 1.18, zIndex: 5 },
      { x: "38vw", y: "-16vh", rotateY: 18, scale: 0.9, zIndex: 2 },
      { x: "120vw", y: "10vh", rotateY: 35, scale: 0.75, zIndex: 1 },
    ],
  },
  {
    title: "AI Agents",
    text: "Intelligent assistants for digital workflows.",
    video: "/videos/grid-2.mp4",
    path: [
      { x: "120vw", y: "-14vh", rotateY: 35, scale: 0.75, zIndex: 1 },
      { x: "38vw", y: "14vh", rotateY: 18, scale: 0.9, zIndex: 2 },
      { x: "0vw", y: "0vh", rotateY: 0, scale: 1.18, zIndex: 5 },
      { x: "-38vw", y: "-18vh", rotateY: -18, scale: 0.9, zIndex: 2 },
      { x: "-120vw", y: "8vh", rotateY: -35, scale: 0.75, zIndex: 1 },
    ],
  },
  {
    title: "Dashboards",
    text: "Visual data that explains business clearly.",
    video: "/videos/grid-3.mp4",
    path: [
      { x: "-80vw", y: "55vh", rotateX: 25, scale: 0.75, zIndex: 1 },
      { x: "-28vw", y: "25vh", rotateX: 12, scale: 0.9, zIndex: 2 },
      { x: "0vw", y: "0vh", rotateX: 0, scale: 1.18, zIndex: 5 },
      { x: "30vw", y: "-25vh", rotateX: -12, scale: 0.9, zIndex: 2 },
      { x: "90vw", y: "-55vh", rotateX: -25, scale: 0.75, zIndex: 1 },
    ],
  },
  {
    title: "Web Experience",
    text: "Interactive motion UI for modern websites.",
    video: "/videos/grid-4.mp4",
    path: [
      { x: "85vw", y: "52vh", rotateZ: 10, scale: 0.75, zIndex: 1 },
      { x: "30vw", y: "22vh", rotateZ: 5, scale: 0.9, zIndex: 2 },
      { x: "0vw", y: "0vh", rotateZ: 0, scale: 1.18, zIndex: 5 },
      { x: "-30vw", y: "-22vh", rotateZ: -5, scale: 0.9, zIndex: 2 },
      { x: "-85vw", y: "-52vh", rotateZ: -10, scale: 0.75, zIndex: 1 },
    ],
  },
];

export default function DirMoving() {
  return (
    <section
      id="grid"
      className="relative h-screen overflow-hidden bg-[#05070d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.18),transparent_35%)]" />

      <div className="absolute left-1/2 top-12 z-30 w-[92%] max-w-4xl -translate-x-1/2 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-300">
          Dynamic Motion Window
        </p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
          Videos move through space.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Floating video cards travel left, right, up, down and outside the
          screen like a 3D moving interface.
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="absolute w-[280px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-blue-500/20 backdrop-blur-xl sm:w-[430px]"
            initial={card.path[0]}
            animate={card.path}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 2.2,
            }}
          >
            <div className="relative h-[190px] overflow-hidden rounded-[1.5rem] sm:h-[280px]">
              <video
                src={card.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-3xl font-black">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#05070d] to-transparent" />
    </section>
  );
}