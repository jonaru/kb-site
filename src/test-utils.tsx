import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import React from "react";
import { render } from "@testing-library/react";
import Article, { ArticleProps } from "./Article";

export function renderWithRouter(articleProps : ArticleProps) {
  // Define the route component inside the function so it closes over articleProps
  function ArticleRoute() {
    return <Article {...articleProps} />;
  }

  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  });

  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: ArticleRoute,
  });

  const productRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/products/$id",
    component: () => <div>Product Page</div>,
  });

  const routeTree = rootRoute.addChildren([testRoute, productRoute]);

  const router = createRouter({
    routeTree,
    // initialEntries: [{ pathname: "/" }],
  });

  return render(<RouterProvider router={router} />);
}
