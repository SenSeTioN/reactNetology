import { FC, useState } from 'react'
import CardsView from './CardsView/CardsView'
import IconSwitch from './IconSwitch/IconSwitch'
import { products } from './data'

export type TIconState = 'view_module' | 'view_list'

const Store: FC = () => {
  const [iconState, setIconState] = useState<TIconState>('view_module')

  const onSwitch = () => {
    setIconState(iconState === 'view_module' ? 'view_list' : 'view_module')
  }

  return (
    <>
      <IconSwitch icon={iconState} onSwitch={onSwitch} />
      <CardsView products={products} iconState={iconState} />
    </>
  )
}

export default Store
