import React from 'react';
import { sortTypes } from '../../mocks/sort-types';
import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/data-process/selectors';
import SortItem from '../sort-item/sort-item';
import './sorting.css';

const DEFAULT_TAB_INDEX = 0;

function Sorting() : JSX.Element {
  const currentSortType = useAppSelector(getSortType);
  const [menuIsVisible, toggleMenu] = React.useState<boolean>();
  const handleSortMenuClick = () => toggleMenu(!menuIsVisible);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={DEFAULT_TAB_INDEX} onClick={handleSortMenuClick}>
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
              <SortItem
                key={sortType.id}
                sortType={sortType}
                isActive={sortType.id === currentSortType.id}
              />
            ))
          }
        </ul>
      }
    </form>
  );
}

export default Sorting;
