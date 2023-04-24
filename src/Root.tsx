import { queryClient } from "./queryClient";
import { StrictMode, ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  );
}

export default render;
