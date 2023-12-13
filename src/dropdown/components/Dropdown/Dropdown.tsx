import { FC, useState } from 'react'
import DropdownList from '../DropdownList/DropdownList'
import { items } from '../data'
import './dropdown.css'

export interface IItems {
  title: string
  selected: boolean
}

const Dropdown: FC = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className='container'>
      <button className='btn material-icons' onClick={() => setIsOpened(!isOpened)}>
        Account settings
      </button>
      {isOpened && <DropdownList items={items} />}
    </div>
  )
}

export default Dropdown
