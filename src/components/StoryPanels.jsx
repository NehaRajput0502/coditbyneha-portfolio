import { motion } from "framer-motion";

const panels = [
  ["01", "Visual First", "Website starts with video and motion, not boring static text."],
  ["02", "Responsive", "Same premium feel on laptop, tablet, and mobile."],
  ["03", "Personal Brand", "Show your work, skills, projects, and digital identity."],
];

export default function StoryPanels() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {panels.map(([num, title, text]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-h-[320px] rounded-[2rem] border border-white/10 bg-white/5 p-7"
          >
            <p className="text-blue-300">{num}</p>
            <h3 className="mt-20 text-3xl font-black">{title}</h3>
            <p className="mt-5 leading-8 text-white/60">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}