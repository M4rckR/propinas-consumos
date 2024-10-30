import { Dispatch } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentajeFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>
    tip: number
  }

export const TipPercentajeForm = ({setTip, tip}: TipPercentajeFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map((option)=> (
                <div key={option.id}>
                    <input type="radio" id={option.id} onChange={e => setTip(+e.target.value)} name="tip" value={option.value} checked={option.value === tip}/>
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            ))}
        </form>
    </div>

  )
}
