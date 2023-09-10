import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sk from "./Pages/Sk";
import Shop from "./Pages/Shop";
import Features from "./Pages/Features";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";
import { StoreProvider } from "./Contexts/StoreContext";
import Details from "./Components/Details";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Sk />} />
          <Route path="shop" element={<Shop />}>
            <Route path="shop/:details" element={<Details />} />
          </Route>
          <Route path="features" element={<Features />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
