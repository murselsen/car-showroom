import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// Css
import "./index.css";

// App and Redux store
import App from "./App.jsx";

// Redux store
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
