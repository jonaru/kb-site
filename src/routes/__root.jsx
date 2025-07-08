import { createRootRoute, Outlet } from "@tanstack/react-router";
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
      </>
    );
  },
});
