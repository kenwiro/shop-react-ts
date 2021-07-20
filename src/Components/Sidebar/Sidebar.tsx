import React from 'react';

const Sidebar = (): JSX.Element => {
  return (
    <div className={'sidebar'}>
      <ul className={'sidebar__list'}>
        <li className={'sidebar__list__item'}>
          <a className={'sidebar__list__item__link sidebar__list__item__link--current'} href="/">Рюкзаки</a>
        </li>
        <li className={'sidebar__list__item'}>
          <a className={'sidebar__list__item__link'} href="/">Майки</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
