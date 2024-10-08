import { RouterProvider, createRouter } from "@tanstack/react-router";
import reactDom from "react-dom/client";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = reactDom.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
