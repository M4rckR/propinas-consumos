import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem) => void
}   

export const MenuItems = ({item,addItem}:MenuItemProps) => {
  return (
    <button onClick={() => addItem(item)}
        className="border-2 border-teal-400 w-full p-3 flex hover:bg-teal-200 justify-between items-center"
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

