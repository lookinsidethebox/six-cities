import { sorts } from '../../mocks/sorts';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { setSort, getOffers } from '../../store/action';
import React from 'react';

const DEFAULT_TAB_INDEX = 0;

function Sorting() : JSX.Element {
  const currentSort = useAppSelector((state) => state.sort);
  const [menuIsVisible, toggleMenu] = React.useState<boolean>();
  const dispatch = useAppDispatch();

  const onSortClick = (id: number) => {
    dispatch(setSort(id));
    dispatch(getOffers());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" style={{ paddingRight: '5px' }}>Sort by</span>
      <span className="places__sorting-type" tabIndex={DEFAULT_TAB_INDEX} onClick={() => toggleMenu(!menuIsVisible)}>
        {currentSort.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        menuIsVisible &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            sorts.map((sort) => (
              <li
                key={sort.id}
                className={`places__option ${currentSort.id === sort.id ? 'places__option--active' : ''}`}
                tabIndex={DEFAULT_TAB_INDEX}
                onClick={() => onSortClick(sort.id)}
              >
                {sort.name}
              </li>
            ))
          }
        </ul>
      }
    </form>
  );
}

export default Sorting;
