import { createRoot } from "react-dom/client";
import { Layout } from "$templates";
import Index from "$screens/index";

const render = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <Layout>
      <Index />
    </Layout>
  );
};

export { render };
