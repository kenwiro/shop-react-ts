// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import rating from '../../assets/popular.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import backpack from '../../assets/louis-vuitton.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import bin from '../../assets/bin.svg';

import React from 'react';

const CartProduct = (): JSX.Element => {
  return (
    <div className={'cart__body__content__products__product'}>
      <div className={'cart__body__content__products__product__image'}>
        <img src={backpack} alt="backpack"/>
      </div>
      <div className={'cart__body__content__products__product__description'}>
        <span className={'cart__body__content__products__product__description__name'}>
          Рюкзак Louis Vuitton Discovery
        </span>
        <span className={'cart__body__content__products__product__description__price'}>
          150 000 ₽
        </span>
        <div className={'cart__body__content__products__product__description__rating'}>
          <img src={rating} alt="rating" />
        </div>
      </div>
      <div className={'cart__body__content__products__product__delete'}>
        <img src={bin} alt="bin"/>
      </div>
    </div>
  );
};

export default CartProduct;
