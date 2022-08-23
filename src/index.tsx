import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Page from "./Page";

ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <Page />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);