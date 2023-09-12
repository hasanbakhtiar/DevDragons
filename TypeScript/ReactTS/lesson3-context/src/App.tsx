import ProductList from "./ProductList";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (<ProductProvider>
    <ProductList />
  </ProductProvider>)
};

export default App;
