import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3001/produtos')
      .then(data => {
        setProdutos(data.data)})
      .catch(err => console.error("Erro ao buscar produtos: ", err))
  }, [])


  return (
    <ProductContext.Provider value={produtos}>
      {children}
    </ProductContext.Provider>
  )
}
