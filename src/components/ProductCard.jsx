import { useContext } from 'react'
import tenis from '../assets/tenis.svg'
import { CartContext } from '../context/CartProvider'
import { ProductContext, ProductProvider } from '../context/ProductProvider'



export const ProductCard = () => {

    let produtos = useContext(ProductContext);

    const { qtd, addToCart } = useContext(CartContext);
    return (
        <section className='ml-8'>
            <h1 className='font-bold text-2xl mb-5'>Produtos Relacionados</h1>
            <ul className='flex gap-15'>
                {
                    produtos.map((item) => (
                        <li className='border border-[#ccc] p-2' key={item.id}>
                            <div className='bg-[#e2e3ff] h-28 w-32 flex items-center justify-center rounded-sm'>
                                <img src={item.img} alt={item.produto} />
                            </div>
                            <div>
                                <h2 >{item.categoria}</h2>
                                <h2 className='text-xs'>{item.produto}</h2>
                                <p>{item.preco}</p>
                                <button className='bg-blue-500 text-white p-1 rounded-sm w-full' onClick={addToCart}>Add</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
