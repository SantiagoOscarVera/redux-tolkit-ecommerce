import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import BasketProduct from "./components/BasketProduct"
import Navbar from "./components/Navbar"
import { updateTotal } from "./features/basketSlices";

function App() {
  const {products} = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  }, [products,dispatch])

  return (
    <>
    <Navbar/>
     <h1 className="text-center text-3xl font-medium mt-2 py-4"> Bienvenidos clientes 🙌</h1>
     <BasketProduct/>
    </>
  )
}

export default App
