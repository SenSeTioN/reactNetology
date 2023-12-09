import { FC } from 'react'
import Button from './ui/Button'

interface IProps {
  filters: string[]
  selected: string
  onSelectFilter: (filter: string) => void
}

const Toolbar: FC<IProps> = ({ filters, selected, onSelectFilter }) => {
  return filters.map((filter, i) => (
    <Button
      key={i}
      onClick={() => onSelectFilter(filter)}
      selected={filter === selected}
      text={filter}
    />
  ))
}

export default Toolbar
