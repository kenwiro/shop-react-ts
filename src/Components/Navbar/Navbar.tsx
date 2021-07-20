import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cart from '../../assets/cart.svg';

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className={'navbar__items gutters'}>
          <div className={'navbar__items__logo'}>
            <span>Test list</span>
          </div>
          <div className={'navbar__items__cart'}>
            <img src={cart} alt='cart'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
