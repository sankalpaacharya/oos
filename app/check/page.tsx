import { Suspense } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const productDelay = 1000;
const reviewsDelay = 2000;
const recommendationsDelay = 3000;

function Navbar() {
  return <header>Navbar</header>;
}

async function Footer() {
  return <footer>Footer</footer>;
}

async function ProductDetails() {
  await delay(productDelay);
  return <section>ProductDetails</section>;
}

async function Reviews() {
  await delay(reviewsDelay);
  return <section>Reviews</section>;
}

async function Recommendations() {
  await delay(recommendationsDelay);
  return <section>Recommendations</section>;
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3 text-center">
      <Navbar />

      <Suspense fallback={<div>loading..</div>}>
        <ProductDetails />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Recommendations />
      </Suspense>
      <Footer />
    </main>
  );
}
