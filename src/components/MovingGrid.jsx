import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    label: "01",
    title: "Understand the idea",
    text: "First we show what problem we are solving with a strong visual background.",
    video: "/videos/idea.mp4",
  },
  {
    label: "02",
    title: "Design the system",
    text: "Then the video shifts and text explains the process, logic, and user flow.",
    video: "/videos/design.mp4",
  },
  {
    label: "03",
    title: "Build the experience",
    text: "Next section shows implementation, animation, responsive layout, and interaction.",
    video: "/videos/build.mp4",
  },
  {
    label: "04",
    title: "Launch and improve",
    text: "Final point explains deployment, testing, and future upgrades.",
    video: "/videos/launch.mp4",
  },
];

export default function MovingGrid() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={ref} id="grid" className="relative h-[500vh] bg-[#05070d]">
              {/* Section Heading */}
        <div className="pointer-events-none absolute left-0 top-8 z-30 w-full px-6 text-left">
  <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-300/80">
    Development Workflow
  </p>

  <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
    Idea to Launch
  </h2>
</div>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {steps.map((step) => (
            <div
              key={step.label}
              className="relative flex h-screen w-screen items-center justify-center overflow-hidden px-6"
            >
              <video
                src={step.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

              <div className="relative z-10 grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
                    {step.label}
                  </p>

                  <h2 className="text-5xl font-black leading-tight sm:text-7xl">
                    {step.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                    {step.text}
                  </p>

                  <div className="mt-8 h-1 w-60 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      className="h-full bg-blue-400"
                      style={{ scaleX: scrollYProgress }}
                    />
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
                    <video
                      src={step.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-sm text-white/50">Current Stage</p>
                      <h3 className="text-3xl font-black">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}