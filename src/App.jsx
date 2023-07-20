
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import About from "./components/About/About"
import Shop from './/components/Shop/Shop'
import Order from "./components/Order/Order"
import Inventory from "./components/Inventory/Inventory"
import { productAndCartLoader } from "./ProductAndCartLoder/ProductAndCartLoader"
function App() {
  
  const router = createBrowserRouter([

    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productAndCartLoader,
          element: <Order></Order>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <About></About>
        },

      ]
    },
   
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
