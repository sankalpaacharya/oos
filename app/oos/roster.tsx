import { Suspense } from "react";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

type HeroData = {
  title: string;
  badge: string;
  year: string;
  rating: string;
  genre: string;
  runtime: string;
  synopsis: string;
  score: string;
  poster: string;
  seasons: string;
  episodes: string;
  status: string;
};

type CastMember = {
  name: string;
  role: string;
  avatar: string;
};

type MovieCard = {
  title: string;
  year: string;
  genre: string;
  poster: string;
};

const heroData: HeroData = {
  title: "Prison Break",
  badge: "FOX",
  year: "2005",
  rating: "Scripted",
  genre: "Action & Adventure, Crime, Drama",
  runtime: "45m per episode",
  synopsis:
    "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside out.",
  score: "8.1",
  // TMDB poster for Prison Break (id 2288)
  poster: "https://image.tmdb.org/t/p/w500/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
  seasons: "5",
  episodes: "88",
  status: "Ended",
};

const castData: CastMember[] = [
  {
    name: "Wentworth Miller",
    role: "Michael Scofield",
    avatar: "https://image.tmdb.org/t/p/w300/js09M98qo6rEyyIlTbRMI6XiZJH.jpg",
  },
  {
    name: "Dominic Purcell",
    role: "Lincoln Burrows",
    avatar: "https://image.tmdb.org/t/p/w300/5GtHSYdnH7o2x5UIm09XqqLoJKO.jpg",
  },
  {
    name: "Sarah Wayne Callies",
    role: "Sara Tancredi",
    avatar: "https://image.tmdb.org/t/p/w300/uBtFalxNR1O0eARg0lsyLXkoJNG.jpg",
  },
  {
    name: "Paul Adelstein",
    role: "Paul Kellerman",
    avatar: "https://image.tmdb.org/t/p/w300/9qkGnEWPzGayZg9gaB4xbP8UL4g.jpg",
  },
  {
    name: "Rockmond Dunbar",
    role: "Benjamin 'C-Note' Franklin",
    avatar: "https://image.tmdb.org/t/p/w300/gim7zIrYkbKWsp2Kod7fp74fWyI.jpg",
  },
  {
    name: "Robert Knepper",
    role: "Theodore 'T-Bag' Bagwell",
    avatar: "https://image.tmdb.org/t/p/w300/lRncjvgCIm1muIkK94zJSH2i3d6.jpg",
  },
  {
    name: "Amaury Nolasco",
    role: "Fernando Sucre",
    avatar: "https://image.tmdb.org/t/p/w300/lziIeEQUtVSotC0qzIiYLWnjELn.jpg",
  },
  {
    name: "Inbar Lavi",
    role: "Sheba",
    avatar: "https://image.tmdb.org/t/p/w300/rdcdfVavWaKc0UCCV9ufdQaLIpc.jpg",
  },
  {
    name: "Augustus Prew",
    role: "David 'Whip' Martin",
    avatar: "https://image.tmdb.org/t/p/w300/37cPl9BaiCY24eMMMOxlZuTkGo7.jpg",
  },
  {
    name: "Mark Feuerstein",
    role: "Jacob Ness",
    avatar: "https://image.tmdb.org/t/p/w300/1XsbDSx7hqhaY9Sjjx86iTp43S0.jpg",
  },
];

const recommendations: MovieCard[] = [
  {
    title: "Money Heist",
    year: "2017",
    genre: "Crime, Thriller",
    // Real TMDB poster for Money Heist / La Casa de Papel (TMDB id 71446)
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Breaking Bad",
    year: "2008",
    genre: "Crime, Drama",
    // Real TMDB poster for Breaking Bad (TMDB id 1396) — confirmed working
    poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
  },
  {
    title: "The Blacklist",
    year: "2013",
    genre: "Crime, Thriller",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDk4MGU4NTItNDMyMC00NjQ0LWFlMWUtYzJlMTM1M2M2ZTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "White Collar",
    year: "2009",
    genre: "Crime, Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDI5MDgyMTYzNF5BMl5BanBnXkFtZTcwMjAwNzk1Mw@@._V1_.jpg",
  },
];

async function getHero() {
  await wait(200);
  return heroData;
}

async function getCast() {
  await wait(1200);
  return castData;
}

async function getRecommendations() {
  await wait(2000);
  return recommendations;
}

function HeroSkeleton() {
  return (
    <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="rounded-3xl border border-[#1f1f24] bg-[#111114] p-4">
        <div className="aspect-[2/3] w-full animate-pulse rounded-2xl bg-[#1b1b21]" />
      </div>
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-[#1b1b21]" />
        <div className="h-10 w-2/3 animate-pulse rounded bg-[#1b1b21]" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-[#1b1b21]" />
        <div className="h-20 w-full animate-pulse rounded bg-[#1b1b21]" />
        <div className="flex gap-3">
          <div className="h-10 w-28 animate-pulse rounded-full bg-[#1b1b21]" />
          <div className="h-10 w-28 animate-pulse rounded-full bg-[#1b1b21]" />
        </div>
      </div>
    </section>
  );
}

function CastSkeleton() {
  return (
    <section>
      <div className="h-5 w-24 animate-pulse rounded bg-[#1b1b21]" />
      <div className="mt-4 flex gap-4 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-32">
            <div className="aspect-[3/4] animate-pulse rounded-2xl bg-[#1b1b21]" />
            <div className="mt-3 h-4 w-24 animate-pulse rounded bg-[#1b1b21]" />
            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#1b1b21]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function RecommendationsSkeleton() {
  return (
    <section>
      <div className="h-5 w-40 animate-pulse rounded bg-[#1b1b21]" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#1f1f24] bg-[#111114] p-4"
          >
            <div className="aspect-[2/3] animate-pulse rounded-xl bg-[#1b1b21]" />
            <div className="mt-4 h-4 w-24 animate-pulse rounded bg-[#1b1b21]" />
            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#1b1b21]" />
          </div>
        ))}
      </div>
    </section>
  );
}

async function Hero() {
  const data = await getHero();

  return (
    <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="rounded-3xl border border-[#1f1f24] bg-[#111114] p-4">
        <img
          src={data.poster}
          alt={`${data.title} poster`}
          className="aspect-[2/3] w-full rounded-2xl object-cover"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#8e8e93]">
          {data.badge}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">
          {data.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#c7c7cc]">
          <span>{data.year}</span>
          <span className="h-1 w-1 rounded-full bg-[#2a2a2f]" />
          <span>{data.rating}</span>
          <span className="h-1 w-1 rounded-full bg-[#2a2a2f]" />
          <span>{data.genre}</span>
          <span className="h-1 w-1 rounded-full bg-[#2a2a2f]" />
          <span>{data.runtime}</span>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#c7c7cc]">
          {data.synopsis}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-[#f5f5f7] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b0b0f]">
            Play
          </button>
          <button className="rounded-full border border-[#2a2a2f] bg-[#111114] px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#d1d1d6]">
            Trailer
          </button>
          <button className="rounded-full border border-[#2a2a2f] bg-[#111114] px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#d1d1d6]">
            Add to List
          </button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Score", value: data.score, note: "TMDB score" },
            {
              label: "Seasons",
              value: data.seasons,
              note: `${data.episodes} episodes`,
            },
            { label: "Status", value: data.status, note: "Series run" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#1f1f24] bg-[#111114] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8e8e93]">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#f5f5f7]">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-[#6e6e73]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function Cast() {
  const cast = await getCast();
  const visibleCast = cast.slice(0, 5);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Cast</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-[#8e8e93]">
          {visibleCast.length} Credits
        </span>
      </div>
      <div className="mt-4 flex gap-4 overflow-hidden">
        {visibleCast.map((member) => (
          <div key={member.name} className="min-w-[140px]">
            <div className="overflow-hidden rounded-2xl border border-[#1f1f24] bg-[#111114]">
              <img
                src={member.avatar}
                alt={member.name}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-semibold">{member.name}</p>
            <p className="mt-1 text-xs text-[#8e8e93]">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

async function Recommendations() {
  const items = await getRecommendations();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">You Might Also Like</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-[#8e8e93]">
          Updated Daily
        </span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((movie) => (
          <article
            key={movie.title}
            className="overflow-hidden rounded-2xl border border-[#1f1f24] bg-[#111114]"
          >
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="aspect-[2/3] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-[#f5f5f7]">
                {movie.title}
              </p>
              <p className="mt-1 text-xs text-[#8e8e93]">
                {movie.year} · {movie.genre}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function RosterPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] font-[var(--font-geist-sans)] text-[#f5f5f7]">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-[0.5em] text-[#f5f5f7]">
            Notflix
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.25em] text-[#8e8e93]">
            <span>Series</span>
            <span>Movies</span>
            <span>Collections</span>
          </div>
        </nav>

        <div className="mt-10 space-y-10">
          <Suspense fallback={<HeroSkeleton />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<CastSkeleton />}>
            <Cast />
          </Suspense>

          <Suspense fallback={<RecommendationsSkeleton />}>
            <Recommendations />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
