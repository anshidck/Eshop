import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { getTotals } from './features/cart/cartSlice'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import AdminProduct from "./pages/AdminProduct";
import Order from "./pages/Order";
import User from "./pages/User";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./pages/OrderSuccess";
import { fetchOrder } from "./features/order/orderSlice";
import { fetchProductsAsync } from "./features/products/productsSlice";
import FAQPage from "./pages/FaqPage";
import Footer from "./components/Footer";


function App() {
  const [stripeApikey, setStripeApiKey] = useState("");
  const { cartItems } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  async function getStripeApikey() {
    const response = await axios.get(`api/payment/stripeapikey`);
    setStripeApiKey(response.data);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals())
    dispatch(fetchProductsAsync())
    dispatch(fetchOrder(user?._id))
    getStripeApikey();
  }, [dispatch, cartItems, user?._id])

  return (
    <>
      <Router>
        <Navbar />
        {stripeApikey && (
          <Elements stripe={loadStripe(stripeApikey)}>
            <Routes>
              <Route path="/payment" element={<Payment />}/>
            </Routes>
          </Elements>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Products />}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />}>
            <Route path='order' element={<Order />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route path='product' element={<AdminProduct/>}>
              <Route path="create" element={<CreatePage/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="order/success" element={<OrderSuccess/>}/>
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
