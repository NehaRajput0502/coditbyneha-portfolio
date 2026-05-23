import { motion } from "framer-motion";
import { Code2, Bot, Clapperboard, ArrowUpRight } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Python",
    label: "Coding",
    line: "Build automation, backend tools, dashboards and AI projects.",
    use: "Useful for AI, apps, websites and data.",
    tools: ["Automation", "Backend", "Data"],
  },
  {
    icon: Bot,
    title: "AI Tools",
    label: "AI",
    line: "Use AI for prompts, research, content and assisted coding.",
    use: "Useful for productivity and future-ready workflows.",
    tools: ["ChatGPT", "Gemini", "Claude"],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    label: "Creative",
    line: "Create reels, shorts, YouTube videos and storytelling content.",
    use: "Useful for freelancing, branding and social media.",
    tools: ["CapCut", "DaVinci", "Premiere"],
  },
];

export default function StoryPanels() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_35%),linear-gradient(180deg,#000_0%,#05070d_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
              Best Skill Combination
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl">
              Coding + AI + Creative
            </h2>
          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[300px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 text-left backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/[0.075]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 transition group-hover:bg-blue-400 group-hover:text-black">
                    <Icon size={22} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-black tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-white/60">
                  {item.line}
                </p>

                <p className="mt-3 text-sm leading-6 text-blue-200/70">
                  {item.use}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-5 right-5 text-blue-200/50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-200">
                  <ArrowUpRight size={18} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}