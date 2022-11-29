import { createRoot } from "react-dom/client";
import { Layout } from "$templates";
import Main from "$screens/Main";

const render = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <Layout>
      <Main />
    </Layout>
  );
};

export { render };
