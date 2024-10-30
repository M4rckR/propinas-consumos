import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id:MenuItem['id']) => void
}


export const OrderContents = ({order,removeItem}:OrderContentsProps) => {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0? <p className="text-center">La orden esta vacia</p> 
            :  (
                order.map((item) => (
                    <div key={item.id}
                        className="flex justify-between items-center border-b-2 border-gray-200 p-3" >

                    <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>
                        

                        <button
                            onClick={() => removeItem(item.id)}
                            className="bg-red-500 text-white h-8 w-8 rounded-full"    
                        >
                            X
                        </button>
                    </div>
                ))
                )
            }
        </div>
    </div>
  )
}
