import React, { useContext } from 'react'
import tenis from '../assets/tenis.svg'
import { CartContext } from '../context/CartProvider'
import { ProductCard } from './ProductCard'


export const Carrinho = () => {
    const {qtd, setQtd, addToCart, removeFromCart, removeItem, itemVerify} = useContext(CartContext)
  
    return (
        <div className='h-fit'>
            <section className='h-full p-8'>
                <table className='w-full font-inter'>
                    <thead>
                        <tr className='flex text-[#474747]'>
                            <th className='flex-3 text-left'>MEU CARRINHO</th>
                            <th className='flex-1 font-medium'>QUANTIDADE</th>
                            <th className='flex-1'>UNITÁRIO</th>
                            <th className='flex-1'>TOTAL</th>
                        </tr>
                    </thead>
                    
                    
                    <tbody>
                        {itemVerify > 0 &&
                        <tr className='flex border-t border-b border-[#ccc] py-5 mt-5'>
                            <td className='flex-3 flex gap-2'>
                                <div className='bg-[#e2e3ff] h-28 w-32 flex items-center justify-center rounded-sm'>
                                    <img src={tenis} alt="" />
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <h2 className='font-bold'>Tênis Nike Revolution 6 Next
                                        Nature Masculino</h2>
                                    <p><span className='text-[#8f8f8f]'>Cor:</span> Vermelho / Branco</p>
                                    <p><span className='text-[#8f8f8f]'>Tamanho:</span> 42</p>
                                </div>
                            </td>
                            <td className='flex-1 text-center flex flex-col justify-center gap-4'>
                                <div>
                                    <button disabled={qtd == 0} className={`${qtd == 0 ? "opacity-50 cursor-not-allowed" : "cursor pointer"} border border-[#ccc] w-8 h-8 rounded-sm`} onClick={removeFromCart}>-</button>

                                    <span className='mx-2'>{qtd}</span>

                                    <button className='border border-[#ccc] w-8 h-8 rounded-sm cursor-pointer' onClick={addToCart}>+</button>
                                </div>
                                <button className='text-[#474747] underline' onClick={removeItem}>Remover item </button>
                                

                            </td>
                            <td className='flex-1'></td>
                            <td className='flex-1'></td>
                            
                        </tr>
                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}
