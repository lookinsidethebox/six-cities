import { sortTypes } from '../../mocks/sortTypes';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { setSortType, updateOffers } from '../../store/action';
import React from 'react';

const DEFAULT_TAB_INDEX = 0;

function Sorting() : JSX.Element {
  const currentSortType = useAppSelector((state) => state.sortType);
  const [menuIsVisible, toggleMenu] = React.useState<boolean>();
  const dispatch = useAppDispatch();

  const onSortTypeClick = (id: number) => {
    dispatch(setSortType(id));
    dispatch(updateOffers());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" style={{ paddingRight: '5px' }}>Sort by</span>
      <span className="places__sorting-type" tabIndex={DEFAULT_TAB_INDEX} onClick={() => toggleMenu(!menuIsVisible)}>
        {currentSortType.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        menuIsVisible &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            sortTypes.map((sortType) => (
              <li
                key={sortType.id}
                className={`places__option ${currentSortType.id === sortType.id ? 'places__option--active' : ''}`}
                tabIndex={DEFAULT_TAB_INDEX}
                onClick={() => onSortTypeClick(sortType.id)}
              >
                {sortType.name}
              </li>
            ))
          }
        </ul>
      }
    </form>
  );
}

export default Sorting;
