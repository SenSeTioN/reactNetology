import { FC } from 'react'
import './Button.css'

interface IProps {
  text: string
  onClick: () => void
  selected: boolean
}

const Button: FC<IProps> = ({ text, onClick, selected }) => {
  return (
    <button onClick={onClick} className={`btn ${selected ? 'selected' : ''}`}>
      {text}
    </button>
  )
}

export default Button
