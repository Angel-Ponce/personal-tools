import { createRoot } from "react-dom/client";
import { Layout } from "$templates";
import Main from "$screens/Main";
import { Provider } from "jotai";

const render = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <Provider>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
};

export { render };
