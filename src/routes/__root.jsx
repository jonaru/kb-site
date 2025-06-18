import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Header";
import Footer from "../Footer";
import { SelectedProductContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    return (
      <>
        <SelectedProductContext.Provider
          value={{ selectedProduct, setSelectedProduct }}
        >
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </SelectedProductContext.Provider>
      </>
    );
  },
});
