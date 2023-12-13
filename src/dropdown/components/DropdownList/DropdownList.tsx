import { FC, useState } from 'react'
import { IItems } from '../Dropdown/Dropdown'
import DropdownItem from '../DropdownItem/DropdownItem'
import './dropdown-list.css'

type TProps = {
  items: IItems[]
}

const DropdownList: FC<TProps> = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  return (
    <div className='dropdown-wrapper open'>
      <ul className='dropdown'>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            item={{ ...item, selected: index === selectedItemIndex }}
            selectItem={() => setSelectedItemIndex(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default DropdownList
