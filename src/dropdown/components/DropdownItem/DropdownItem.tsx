import { FC } from 'react'
import { IItems } from '../Dropdown/Dropdown'
import './dropdown-item.css'

type TProps = {
  item: IItems
  selectItem: () => void
}

const DropdownItem: FC<TProps> = ({ item, selectItem }) => (
  <li className={`${item.selected ? 'active' : ''}`} onClick={selectItem}>
    <span>{item.title}</span>
  </li>
)

export default DropdownItem
