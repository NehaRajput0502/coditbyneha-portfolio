import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const points = [
  {
    no: "01",
    title: "Idea",
    text: "Every digital experience starts with one clear idea.",
    video: "/videos/grid-1.mp4",
    x: "14%",
    y: "34%",
  },
  {
    no: "02",
    title: "Design",
    text: "The idea becomes a visual structure with motion and flow.",
    video: "/videos/grid-2.mp4",
    x: "52%",
    y: "18%",
  },
  {
    no: "03",
    title: "Build",
    text: "The design turns into frontend, animation, and interaction.",
    video: "/videos/grid-3.mp4",
    x: "78%",
    y: "55%",
  },
  {
    no: "04",
    title: "Experience",
    text: "The user explores the website like a cinematic journey.",
    video: "/videos/grid-4.mp4",
    x: "38%",
    y: "72%",
  },
  {
    no: "05",
    title: "Launch",
    text: "The final result becomes responsive, fast, and live.",
    video: "/videos/grid-1.mp4",
    x: "70%",
    y: "30%",
  },
];

export default function Moving() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressPoints = [0, 0.25, 0.5, 0.75, 1];

  const left = useTransform(
    scrollYProgress,
    progressPoints,
    points.map((p) => p.x)
  );

  const top = useTransform(
    scrollYProgress,
    progressPoints,
    points.map((p) => p.y)
  );

  const rotateZ = useTransform(scrollYProgress, [0, 1], [-10, 12]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-22, 18, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.14, 0.95]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(points.length - 1, Math.floor(latest * points.length));
    setActive(index);
  });

  return (
    <section
      ref={sectionRef}
      id="grid"
      className="relative h-[520vh] bg-[#05070d]"
    >
      <div className="sticky top-0 h-screen overflow-hidden perspective-[1200px]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.30),transparent_28%),radial-gradient(circle_at_75%_65%,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.18),transparent_32%)]" />

        {/* Big dynamic heading */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="absolute left-1/2 top-10 z-40 w-[92%] max-w-5xl -translate-x-1/2 text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.45em] text-blue-300">
            Dynamic 3D Motion
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            {points[active].title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/65">
            {points[active].text}
          </p>
        </motion.div>

        {/* Curved route line */}
        <svg
          className="absolute inset-0 z-0 h-full w-full opacity-60"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 14 34 C 28 16, 42 12, 52 18 S 78 28, 78 55 S 56 78, 38 72 S 50 38, 70 30"
            fill="none"
            stroke="rgba(96,165,250,0.45)"
            strokeWidth="0.45"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Small fixed video points */}
        {points.map((point, index) => (
          <motion.div
            key={point.no}
            className="absolute z-10 hidden w-[220px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl md:block"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              opacity: active === index ? 0.25 : 0.72,
              scale: active === index ? 0.82 : 1,
              rotateY: index % 2 === 0 ? -22 : 22,
              rotateX: index % 2 === 0 ? 8 : -8,
              z: active === index ? -120 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[135px] overflow-hidden rounded-[1.2rem]">
              <video
                src={point.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="p-3">
              <p className="text-xs font-bold text-blue-300">{point.no}</p>
              <h3 className="text-lg font-black">{point.title}</h3>
            </div>
          </motion.div>
        ))}

        {/* Main moving 3D video card */}
        <motion.div
          className="absolute z-30 w-[310px] overflow-hidden rounded-[2.4rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_100px_rgba(59,130,246,0.35)] backdrop-blur-2xl sm:w-[470px]"
          style={{
            left,
            top,
            x: "-50%",
            y: "-50%",
            rotateZ,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative h-[230px] overflow-hidden rounded-[1.8rem] sm:h-[320px]">
            <video
              key={points[active].video}
              src={points[active].video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-bold backdrop-blur-xl">
              {points[active].no}
            </div>

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300">
                Active Point
              </p>
              <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                {points[active].title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Bottom floating description */}
        <motion.div
          key={`text-${active}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute bottom-8 left-1/2 z-40 w-[92%] max-w-4xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-black/55 p-5 text-center backdrop-blur-2xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
            Step {points[active].no}
          </p>
          <h3 className="mt-2 text-2xl font-black sm:text-3xl">
            {points[active].title}
          </h3>
          <p className="mx-auto mt-2 max-w-xl leading-7 text-white/60">
            {points[active].text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}