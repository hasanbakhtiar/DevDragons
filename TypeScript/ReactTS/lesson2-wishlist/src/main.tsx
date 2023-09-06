import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./List";
import NotFoundPage from "./NotFoundPage";
import { WishlistProvider } from "react-use-wishlist";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
);
