import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <section className="hero">
        <h2 className="hero-heading">Tidlös elegans</h2>
        <p className="hero-text">
          Upptäck vår utsökta kollektion av viktorianska och edwardianska
          badrumsarmaturer, noggrant tillverkade enligt högsta standard av lyx
          och elegans.
        </p>
      </section>
      <section className="section about">
        <h2>Om oss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quod, reiciendis eum facere alias non quae temporibus fugit aut
          praesentium?
        </p>
      </section>
    </div>
  );
}
