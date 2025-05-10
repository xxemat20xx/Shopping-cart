import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; 
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.jsx';
import ProductProvider from './components/Products/ProductProvider.jsx';
const router =  createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
        <ProductProvider>
            <RouterProvider router={router}/>
        </ProductProvider>
)
