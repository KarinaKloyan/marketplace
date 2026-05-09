import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { navigation, products, footer } from "./components/db/db.js";

createRoot(document.getElementById("root")).render(
  <App navigation={navigation} products={products} footer={footer} />,
);
