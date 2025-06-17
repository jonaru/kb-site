import { getImageURL } from "./utils/image-utils";

export default function Article(props) {
  return (
    <div className="article-item">
      <img src={getImageURL(props.fileName)} alt={props.description} />
    </div>
  );
}

// export default function Article(props) {
//   const { loading, error, image } = useImage(props.fileName);

//   if (error) return <p>{props.description}</p>;

//   return (
//     <div className="article-item">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <img src={image} alt={props.description} />
//       )}
//     </div>
//   );
// }
