import { FC } from 'react'
import { TIconState } from '../Store'
import './CardsView.css'
import ShopCard from './ShopCard/ShopCard'

type TProducts = {
  products: IProduct[]
  iconState: TIconState
}

export interface IProduct {
  name: string
  price: string
  color: string
  img: string
}

const CardsView: FC<TProducts> = ({ products, iconState }) => {
  return (
    <div className={`container ${iconState}`}>
      {products.map((product, index) => (
        <ShopCard key={index} {...product} iconState={iconState} />
      ))}
    </div>
  )
}

export default CardsView
