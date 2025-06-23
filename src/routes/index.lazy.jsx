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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis optio
            praesentium aperiam id doloremque consectetur est quibusdam, vitae
            architecto harum? Quae id autem non quidem maxime ea. Aliquam labore
            quae soluta et magnam, animi deleniti deserunt perferendis pariatur
            odio asperiores tempore earum? Ipsa asperiores sint ratione nemo
            deserunt officia facilis incidunt at adipisci, maxime mollitia. Ea
            rerum libero consectetur, laborum rem omnis beatae similique impedit
            fugiat quas recusandae nemo debitis maxime quae enim a id corporis
            quisquam eaque? Eveniet aperiam labore at quis tenetur beatae
            praesentium officiis vitae quaerat perferendis veritatis, iure unde
            non modi minus quo nobis exercitationem cum eius iste. Error non
            sint qui nostrum reiciendis sit voluptas repellendus consequatur
            aspernatur labore. Laborum nisi totam perferendis placeat animi,
            quis doloribus dicta optio, culpa rem deleniti architecto esse
            reiciendis repudiandae, maiores dolore soluta vitae illo ea autem
            sapiente? Aliquid ut dolore accusamus voluptatem, excepturi adipisci
            cumque atque minima dolorem dicta incidunt libero molestiae unde in
            aliquam iure natus ad eum rerum praesentium animi! Accusamus qui
            fugit vel quas voluptatem velit, laudantium suscipit. Vel, odio.
            Dolor, amet rem temporibus qui, explicabo a atque sed provident ab
            debitis eveniet autem laboriosam modi? Incidunt, provident harum
            omnis animi illum possimus eaque dolor!
          </p>
        </div>
      </section>
    </div>
  );
}
