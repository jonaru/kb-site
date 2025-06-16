import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Header";
import Footer from "../Footer";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
