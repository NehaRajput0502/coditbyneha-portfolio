import { useState } from "react";
import {
  ArrowUpRight,
  X,
  Bot,
  Code2,
  Video,
  Database,
  Workflow,
  Globe2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Globe2,
    title: "Digitalization",
    text: "Turn manual work into digital systems.",
    status: "Foundation",
    details:
      "Digitalization means converting manual work, paper records, WhatsApp updates and Excel tracking into clean digital workflows.",
    points: [
      "Digital forms for data collection",
      "Dashboards for live visibility",
      "CRM and ticket tracking",
      "Process standardization",
    ],
    tools: ["Google Sheets", "Forms", "Apps Script", "Dashboards"],
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Automate repeated business tasks.",
    status: "Workflow",
    details:
      "Automation connects tools and removes repeated manual effort from daily business operations.",
    points: [
      "Auto alerts and reminders",
      "Lead and enquiry routing",
      "Report generation",
      "Approval workflows",
    ],
    tools: ["n8n", "Zapier", "APIs", "Webhooks"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    text: "Smart assistants for real workflows.",
    status: "AI Layer",
    details:
      "AI agents can understand tasks, answer questions, search documents and support departments like HR, sales, service and operations.",
    points: [
      "RAG-based chatbots",
      "Department assistants",
      "Document search",
      "AI workflow decision support",
    ],
    tools: ["OpenAI", "Gemini", "LangChain", "Vector DB"],
  },
  {
    icon: Code2,
    title: "Web Experience",
    text: "Modern websites and interfaces.",
    status: "Frontend",
    details:
      "Web experience focuses on building clean, premium and interactive websites that explain services clearly.",
    points: [
      "Landing pages",
      "Portfolio websites",
      "Interactive UI sections",
      "Responsive web design",
    ],
    tools: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    text: "APIs, dashboards and internal tools.",
    status: "Backend",
    featured: true,
    details:
      "Backend systems handle data, APIs, dashboards, admin panels and the logic behind digital products.",
    points: [
      "API development",
      "Database structure",
      "Internal tools",
      "Admin dashboards",
    ],
    tools: ["Python", "FastAPI", "SQL", "Firebase"],
  },
  {
    icon: Video,
    title: "Video Editing",
    text: "Reels, product videos and stories.",
    status: "Creative",
    details:
      "Video editing helps convert product, brand and service ideas into short visual stories for social platforms.",
    points: [
      "Product reels",
      "Motion text overlays",
      "YouTube product videos",
      "Brand storytelling",
    ],
    tools: ["Canva", "Filmora", "CapCut", "Premiere Pro"],
  },
];

const stats = [
  { value: "06", label: "Focus Areas" },
  { value: "AI", label: "Enabled" },
  { value: "∞", label: "Scalable" },
];

export default function FinalCTA() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] px-8 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_78%_14%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#05070d_0%,#03050a_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-28 lg:grid-cols-[0.78fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h1 className="max-w-xl text-[46px] font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-[64px]">
            Build systems
            <span className="block bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              that work smarter.
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-7 text-white/58">
            A platform for automation, AI agents, websites, backend tools and
            creative digital experiences.
          </p>

          <div className="mt-7 grid max-w-md grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-black transition hover:scale-105"
          >
            Start Exploring <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="grid max-w-[760px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                type="button"
                key={item.title}
                onClick={() => setSelectedService(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative min-h-[165px] overflow-hidden rounded-[1.5rem] border p-4 text-left backdrop-blur-xl transition ${
                  item.featured
                    ? "border-blue-300/35 bg-blue-400/[0.08]"
                    : "border-white/10 bg-white/[0.045] hover:border-blue-300/40 hover:bg-white/[0.075]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition ${
                      item.featured
                        ? "bg-blue-400 text-black"
                        : "bg-blue-400/10 text-blue-300 group-hover:bg-blue-400 group-hover:text-black"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-7 text-[19px] font-black leading-tight tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-white/52">
                  {item.text}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-200/70 opacity-0 transition group-hover:opacity-100">
                  View details <ArrowUpRight size={13} />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b12] p-7 text-left text-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>

              <div className="mb-6 flex items-center gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400 text-black">
    {(() => {
      const Icon = selectedService.icon;
      return <Icon size={24} />;
    })()}
  </div>

  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
    {selectedService.status}
  </span>
</div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white">
                {selectedService.title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                {selectedService.details}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {selectedService.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white/70"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {selectedService.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}