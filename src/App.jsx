import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App({ navigation, products, footer }) {
  return (
    <>
      <Header navigation={navigation} />
      <Products products={products} />
      <Footer footer={footer} />
    </>
  );
}
export default App;
