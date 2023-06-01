import Products from "./pages/user/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/user/ProductDetails";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Cart from "./pages/user/Cart";
import { getTotals } from './features/cart/cartSlice'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/user/Checkout";
import Dashboard from "./pages/admin/Dashboard";
import List from "./pages/admin/List";
import Order from "./pages/user/Order";
import User from "./pages/user/User";
import CreatePage from "./pages/admin/CreatePage";
import HomePage from "./pages/user/HomePage";
import Profile from "./pages/user/Profile";
import Payment from "./pages/user/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./pages/user/OrderSuccess";
import { productColumns, userColumns } from "./datatablesource";
import { fetchOrder } from "./features/order/orderSlice";
import { fetchProductsAsync } from "./features/products/productsSlice";
import FAQPage from "./pages/user/FaqPage";
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
          <Route path="/admin" element={<Dashboard />}/>
          <Route path="/products" element={<List columns={productColumns}/>}/>
          <Route path="/create" element={<CreatePage/>}/>
          <Route path="/users" element={<List columns={userColumns}/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="order/success" element={<OrderSuccess/>}/>
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App