import Cart from "./components/Cart/Cart";
import Home from "./components/Homepage/Home";
import ProductList from "./components/Products/ProductList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Modal from "./components/Products/Modal"; // make sure it's imported

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'products',
        element: <ProductList />,
        children: [
          {
            path: ':title',
            element: <Modal />,
          },
        ],
      },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
