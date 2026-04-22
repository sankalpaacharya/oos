const posters = [
  {
    title: "The Blacklist",
    subtitle: "Primary poster",
    src: "https://m.media-amazon.com/images/M/MV5BNDk4MGU4NTItNDMyMC00NjQ0LWFlMWUtYzJlMTM1M2M2ZTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Blacklist",
    subtitle: "Classic key art",
    src: "https://m.media-amazon.com/images/M/MV5BNDI5MDgyMTYzNF5BMl5BanBnXkFtZTcwMjAwNzk1Mw@@._V1_.jpg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#171717]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-20%] h-80 w-80 rounded-full bg-[#f5f5f5] blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] h-72 w-72 rounded-full bg-[#f0f0f0] blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 font-[var(--font-geist-sans)]">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">
            Featured artwork
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The Blacklist
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4b4b4b]">
            Two official posters on a clean white canvas, curated for a minimal
            gallery-style presentation.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {posters.map((poster, index) => (
            <figure
              key={poster.src}
              className="group overflow-hidden rounded-3xl border border-[#e6e6e6] bg-white shadow-[0_20px_50px_rgba(15,15,15,0.08)]"
            >
              <img
                src={poster.src}
                alt={`${poster.title} poster`}
                className="aspect-[2/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">{poster.title}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#6b6b6b]">
                    {poster.subtitle}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b9b9b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  );
}
