import { useState, useRef, useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Article from "../Article";
import aboutImage from "/img/castle.jpg";
import { getProducts } from "../data/product";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const ITEM_WIDTH = 417;

function Index() {
  const products = getProducts();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      setLoading(false);
      containerRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  }, []);

  const handleScrollRight = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  const handleScrollLeft = (scrollAmount) => {
    const newScrollPosition = scrollPosition - scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  const canScrollLeft = () => {
    return scrollPosition > 0;
  };

  const canScrollRight = () => {
    if (!containerRef.current) return false;

    const refCurrent = containerRef.current;
    return (
      scrollPosition + refCurrent.clientWidth < refCurrent.scrollWidth - 10
    );
  };

  return (
    <div className="index">
      <section className="hero">
        <div className="hero-image">
          <h2 className="hero-heading"></h2>
          <p className="hero-text">
            Upptäck vår kollektion av viktorianska och edwardianska
            badrumsarmaturer, noggrant tillverkade enligt högsta standard av lyx
            och elegans.
          </p>
        </div>
      </section>

      <section className="article-section">
        <button
          className="slider-arrow left"
          onClick={() => {
            handleScrollLeft(ITEM_WIDTH);
          }}
          disabled={!canScrollLeft()}
        >
          ◀
        </button>
        <div className="slider-wrapper" ref={containerRef}>
          <div className="article-slider">
            {products.map((product, index) => (
              <Article
                key={product.id}
                fileName={product.fileName}
                description={product.name}
                productId={product.id}
              />
            ))}
          </div>
        </div>

        <button
          className="slider-arrow right"
          onClick={() => {
            handleScrollRight(ITEM_WIDTH);
          }}
          disabled={!canScrollRight()}
        >
          ▶
        </button>
      </section>

      <section className="section about">
        <h2>Om oss</h2>
        <div className="about-content">
          <img
            className="about-img"
            src={aboutImage}
            alt="Picture of a castle"
          />
          <p>
            Klassiska Bad finns till för dig som drömmer om ett badrum med
            karaktär, kvalitet och historia. Vi är specialiserade på att
            tillgängliggöra exklusiv brittisk badrumsinredning i klassisk stil –
            något som tidigare varit svårt att hitta i Sverige.
            <br />
            <br />
            Genom noggrant utvalda samarbeten med bland andra Drummonds, en
            ikonisk brittisk tillverkare med rötter i traditionellt hantverk,
            erbjuder vi badrumskomponenter i världsklass: handgjutna badkar i
            gjutjärn, porslin av finaste kvalitet, blandare i massiv mässing och
            mycket mer. Vår kollektion är noggrant kuraterad för att passa dig
            som vill återskapa känslan från ett 1800-tals townhouse, en engelsk
            herrgård eller kanske ett sekelskifteshem med tidstypiska detaljer.
            Det handlar inte om retro – det handlar om tidlös elegans.
            <br />
            <br />
            Med Klassiska Bad kan du förverkliga en vision där modern funktion
            möter klassisk form, där materialvalen är genomtänkta och där varje
            detalj bidrar till helheten. Vi hjälper dig skapa ett badrum som
            känns lika naturligt i en historisk miljö som i ett samtida hem med
            själ. Välkommen till en värld av klassiskt badrumshantverk – nu
            tillgänglig i Sverige.
          </p>
        </div>
      </section>
    </div>
  );
}
