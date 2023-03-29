import * as React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import { App } from "./screens";
import { store } from "./feature/redux";
import { Provider } from "react-redux";
import { Localization } from "./feature/i18n";

const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(
  <Provider store={store}>
    <Localization>
      <App />
    </Localization>
  </Provider>
);
