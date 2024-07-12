"use client"
import { defaultCart } from "@/lib/features/cart/cartSlice"
import { defaultWishList } from "@/lib/features/wishlist/wishlistSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const DefaultLocalStorage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(defaultWishList(JSON.parse(localStorage.getItem("wishlist")) || []))
        dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []))
    }, [])

    return null
}

export default DefaultLocalStorage