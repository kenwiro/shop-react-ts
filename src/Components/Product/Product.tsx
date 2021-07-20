// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import rating from '../../assets/popular.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cart from '../../assets/cart.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backpack from '../../assets/louis-vuitton.png';
import React from 'react';

const Product = (): JSX.Element => {
  return (
    <div className="items__list__item">
      <div className={'items__list__item__header'}>
        <div className={'items__list__item__header__rating'}>
          <img src={rating} alt="rate"/>
        </div>
        <div className={'items__list__item__header__cart'}>
          <img src={cart} alt="cart"/>
        </div>
      </div>
      <div className={'items__list__item__content'}>
        <img src={backpack} alt="backpack"/>
      </div>
      <div className={'items__list__item__footer'}>
        <div className="items__list__item__footer__description">
          <span>Рюкзак Louis Vuitton Discovery</span>
        </div>
        <div className="items__list__item__footer__coast">
          <span>150 000 ₽</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
