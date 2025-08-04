import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./NotFound";

const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound });

const App : React.FC = () => {
  return <RouterProvider router={router} />;
};

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
