"use client"
import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log({cart});
        
    }, [cart])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

