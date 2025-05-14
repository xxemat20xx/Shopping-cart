import Cart from "./components/Cart/Cart";
import Home from "./components/Homepage/Home";
import ProductList from "./components/Products/ProductList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Modal from "./components/Products/Modal";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />, // ✅ correct prop for error boundary
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
      // ✅ Catch-all fallback route
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
