import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Views from "./pages/view/Views";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/view" element={<Views/>}/>
        </Routes>
  );
}

export default App;
