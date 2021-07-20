import Product from '../Product/Product';
import React from 'react';

const products = [ 1,2,3,4,5 ];

const ProductsList = (): JSX.Element => {
  return (
    <div className="items">
      <div className={'items__list'}>

        {products.map(el => (<Product key={el}/>))}

      </div>
    </div>
  );
};

export default ProductsList;
