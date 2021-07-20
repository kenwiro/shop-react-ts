import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ok from '../../assets/ok-hand.png';
import CartProduct from '../CartProduct/CartProduct';
import CartSectionTitle from '../CartSectionTitle/CartSectionTitle';
import InputField from '../InputField/InputField';
import BaseButton from '../BaseButton/BaseButton';

const Cart = (): JSX.Element => {
  return (

    <div className={'cart'}>
      <div className="cart__body">
        <div className="cart__body__content">

          <div className="cart__body__content__header">
            <span className={'cart__body__content__header__title'}>Корзина</span>
            <span className={'cart__body__content__header__close'}>x</span>
          </div>

          <p className={'cart__body__content__section_title'}>Товары в корзине</p>

          <div className={'cart__body__content__products'}>

            <CartProduct />

          </div>

          <CartSectionTitle />

          <form className={'cart__body__content__form'}>
            <InputField />
            <InputField />
            <InputField />
            <BaseButton />
          </form>

          <div className="cart__body__content__text">
            <p>Пока что вы ничего не добавили в корзину.</p>
          </div>

          <BaseButton />

          <div className={'cart__body__content__success'}>
            <img src={ok} alt="ok"/>
            <span>Заявка успешно отправлена</span>
            <span>Вскоре наш менеджер свяжется с Вами</span>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Cart;
