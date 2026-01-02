import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./Context/ContextMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>
);
