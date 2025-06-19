import "../styles/Article.css";
import { Link } from "@tanstack/react-router";
import { getImageURL } from "./utils/image-utils";
import { useSelectedProduct } from "./contexts";

export default function Article(props) {
  const { setSelectedProduct } = useSelectedProduct(); // Access context setter

  const handleClick = () => {
    setSelectedProduct(props.productId); // Set the selected product
  };

  return (
    <div className="article-item">
      <Link to="/product" onClick={handleClick}>
        <img src={getImageURL(props.fileName)} alt={props.description} />
        <div className="article-text-wrapper">
          <p className="article-image-text">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}
