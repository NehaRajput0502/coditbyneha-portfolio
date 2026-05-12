export default function BuildGuide() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Tech Stack
        </p>
        <h2 className="mt-4 text-4xl font-black">Built with modern frontend tools.</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["React + Vite", "Tailwind CSS", "Framer Motion", "HTML5 Video"].map((item) => (
            <div key={item} className="rounded-2xl bg-black/30 p-5 font-bold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}