import { createRoot } from "react-dom/client";
import Index from "./screens";

const render = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(<Index />);
};

export { render };
