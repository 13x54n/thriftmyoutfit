// src/contexts/ProductContext.js
import { createContext } from 'react';

const ProductContext = createContext({
  products: [],
  fetchProducts: () => {}
});

export default ProductContext;
