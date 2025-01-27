import { createRoot } from "react-dom/client";
import App from "@pages/content/ui/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import EmotionCacheProvider from "@pages/content/ui/EmotionCacheProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryProvider } from "@root/src/lib";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "chrome-extension-content-view-root";

document.body.append(root);

const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";

const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

// const queryClient = new QueryClient();

createRoot(rootIntoShadow).render(
  <>
    <EmotionCacheProvider rootId={root.id}>
      <App />
    </EmotionCacheProvider>
  </>,
);
