import axios from 'axios';

const API_URL = '/api/products/'

export const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
};

export const createProducts = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};



const productService = {
    fetchProducts,
    createProducts
}

export default productService;