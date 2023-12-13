import { FC } from 'react'
import './IconSwitch.css'

interface IProps {
  icon: string
  onSwitch: () => void
}

const IconSwitch: FC<IProps> = ({ icon, onSwitch }) => {
  return (
    <i className='material-icons' onClick={onSwitch}>
      {icon}
    </i>
  )
}

export default IconSwitch
