import './App.css';
import './reset.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ConfirmOrderPage from './page/ConfirmOrderPage/ConfirmOrderPage';
import ENDPOINTS from './constants/endpoints';
import OrderConfirmationPage from './page/OrderConfirmationPage/OrderConfrimationPage';
import ShoppingCartPage from './page/ShoppingCartPage/ShoppingCartPage';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: ENDPOINTS.shoppingCart,
    element: <ShoppingCartPage />,
  },
  {
    path: ENDPOINTS.orderConfirmation,
    element: <OrderConfirmationPage />,
  },
  {
    path: ENDPOINTS.confirmOrder,
    element: (
      <Suspense>
        <ConfirmOrderPage />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
