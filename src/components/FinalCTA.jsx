import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-black px-6 py-24 text-center">
      <h2 className="mx-auto max-w-4xl text-4xl font-black sm:text-6xl">
        Now customize it with your real projects.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">
        Add your videos, screenshots, profile photo, GitHub, LinkedIn, and project details.
      </p>

      <a
        href="#"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-black"
      >
        Start Editing <ArrowUpRight />
      </a>
    </section>
  );
}