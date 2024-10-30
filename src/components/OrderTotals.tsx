import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}

export const OrderTotals = ({order,tip,placeOrder}:OrderTotalsProps) => {


  const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useMemo(() => subTotal * tip, [order, tip])
  const totalAmount = useMemo(() => subTotal + tipAmount, [order, tip])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>Suntotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>

        <p>Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
        >
        Guardar Orden
      </button>
    </>

  )
}
