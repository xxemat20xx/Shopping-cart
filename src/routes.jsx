import Cart from "./components/Cart/Cart";
import Home from "./components/Homepage/Home";

import ProductList from "./components/Products/ProductList";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const routes = [
    {
        path: '/',
        element: <SharedLayout />,
        children:[
            {index: true, element: <Home />},
            {path: 'products', element: <ProductList />},
            {path: 'cart', element:<Cart />}

        ]
    }
]   
export default routes;