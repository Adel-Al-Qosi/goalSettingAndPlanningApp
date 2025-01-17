// import { StrictMode } from "react"; // StrictMode makes and error with Draggable. It won't work with it
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

createRoot(document.getElementById("root")).render(<Root />);