// src/providers/ProductProvider.jsx
import React, { useState, useEffect, useCallback } from 'react';
import ProductContext from '../contexts/ProductContext';

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [worker, setWorker] = useState(null);

    useEffect(() => {
        const myWorker = new Worker('/fetchWorker.js');
        setWorker(myWorker);

        myWorker.onmessage = (e) => {
            setProducts(e.data);
        };

        return () => {
            myWorker.terminate();
        };
    }, []);

    const fetchProducts = useCallback(() => {
        const url = `${import.meta.env.VITE_APP_SERVER_API}/api/v1/products`
        
        if (worker) {
            worker.postMessage({ url });
        }
    }, [worker]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
