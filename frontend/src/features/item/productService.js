import axios from 'axios';

const API_URL = '/api/products/'

export const getProductById = async (id) => {
  const response = await axios.get(API_URL + id); 
    return response.data;
};

const productService = {
  getProductById
}

export default productService;
