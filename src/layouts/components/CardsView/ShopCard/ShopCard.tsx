import { FC } from 'react'
import { TIconState } from '../../Store'
import './ShopCard.css'

interface IProps {
  name: string
  price: string
  color: string
  img: string
  iconState: TIconState
}

const ShopCard: FC<IProps> = ({ name, price, color, img, iconState }) => {
  console.log(iconState)

  return (
    <>
      {iconState === 'view_module' ? (
        <div className={`shop-card-${iconState}`}>
          <div className={`shop-card__info-${iconState}`}>
            <h2>{name}</h2>
            <p>{color}</p>
          </div>
          <img src={img} alt={name} className={`shop-card__img-${iconState}`} />
          <div className={`shop-card__price-${iconState}`}>
            <p>{`${price}$`}</p>
            <button className='shop-card__btn'>add to card</button>
          </div>
        </div>
      ) : (
        <div className={`shop-card-${iconState}`}>
          <img src={img} alt={name} className={`shop-card__img-${iconState}`} />
          <div className={`shop-card__info-${iconState}`}>
            <h2>{name}</h2>
            <p>{color}</p>
          </div>
          <div className={`shop-card__price-${iconState}`}>
            <p>{`${price}$`}</p>
            <button className='shop-card__btn'>add to card</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ShopCard
