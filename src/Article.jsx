import "../styles/Article.css";
import { getImageURL } from "./utils/image-utils";

export default function Article(props) {
  return (
    <div className="article-item">
      <img src={getImageURL(props.fileName)} alt={props.description} />
      <div className="article-text-wrapper">
        <p className="article-image-text">{props.description}</p>
      </div>
    </div>
  );
}
