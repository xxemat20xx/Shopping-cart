import Cart from "./components/Cart/Cart";
import Home from "./components/Homepage/Home";
import NavBar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";

const routes = [
    {
        path: '/',
        element: <NavBar />,
        children:[
            {index: true, element: <Home />},
            {path: 'products', element: <ProductList />},
            {path: 'cart', element:<Cart />}

        ]
    }
]   
export default routes;