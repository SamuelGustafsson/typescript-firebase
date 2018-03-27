import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReduxStore } from "./redux-store";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { Counter } from "./counter-component";

ReactDOM.render(
  <Provider store={ReduxStore}>
    <div>
      <App />
      <Counter label="A Counter" />
    </div>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
