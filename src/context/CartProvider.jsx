import { createContext, useState } from "react"
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [qtd, setQtd] = useState(0);

  const [itemVerify, setItemVerify] = useState(true)

  function addToCart(){
      setQtd(qtd + 1)
      setItemVerify(true)
  }
  function removeFromCart(){
      setQtd(qtd - 1)
  }

  function removeItem(){
    setItemVerify(!itemVerify)
    setQtd(0)
  }

  return (
    <>
    <CartContext.Provider value={{qtd,setQtd,addToCart, removeFromCart, removeItem, itemVerify}}>
        {children}
    </CartContext.Provider>
    </>
  )
}
