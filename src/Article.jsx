import "../styles/Article.css";
import { Link } from "@tanstack/react-router";
import { getImageURL } from "./utils/image-utils";

export default function Article(props) {
  return (
    <div className="article-item">
      <Link to="/products/$id" params={{ id: props.productId }}>
        <img src={getImageURL(props.fileName)} alt={props.description} />
        <div className="article-text-wrapper">
          <p className="article-image-text">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}
