import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    
    const addItem = (item:MenuItem) => {

        const itemExists = order.find((orderItem) => orderItem.id === item.id)

        if(itemExists){
            const updatedOrder= order.map(orderItem => 
                orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem)
            setOrder(updatedOrder)
        }
        else{
            const newItem:OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

        console.log(order)
    }

    const removeItem = (id:MenuItem['id']) => {
        const updatedOrder = order.filter((orderItem) => orderItem.id !== id)
        setOrder(updatedOrder)
    }

    const placeOrder = () => {
        console.log('Order placed')
        setTip(0)
        setOrder([])
    }

    return {
        addItem,
        order,
        removeItem,
        tip,
        setTip,
        placeOrder
    }
}
