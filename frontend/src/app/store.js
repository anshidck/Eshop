import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/item/productSlice'
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    item: productReducer,
    orders: orderReducer
  },
});
