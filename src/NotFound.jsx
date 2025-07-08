import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        You can go back to the <a href="/">home page</a>.
      </p>
    </div>
  );
}
