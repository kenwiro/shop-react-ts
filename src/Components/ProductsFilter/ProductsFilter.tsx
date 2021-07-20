import React from 'react';

const ProductsFilter = (): JSX.Element => {
  return (
    <div className={'header__filter'}>
      <span>Сортировать по: <span className={'header__filter__current'}>цене</span></span>
      <div className={'header__filter__body'}>
        <ul className={'header__filter__body__list'}>
          <li className="header__filter__body__list__item">
            <span>По встратости</span>
          </li>
          <li className="header__filter__body__list__item">
            <span>По встратости</span>
          </li>
          <li className="header__filter__body__list__item">
            <span>По встратости</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilter;
