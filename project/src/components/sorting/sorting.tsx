import React from 'react';
import { sortTypes } from '../../mocks/sortTypes';
import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/data-process/selectors';
import SortItem from './sort-item';

const DEFAULT_TAB_INDEX = 0;

function Sorting() : JSX.Element {
  const currentSortType = useAppSelector(getSortType);
  const [menuIsVisible, toggleMenu] = React.useState<boolean>();
  const onSortMenuClick = () => toggleMenu(!menuIsVisible);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" style={{ paddingRight: '5px' }}>Sort by</span>
      <span className="places__sorting-type" tabIndex={DEFAULT_TAB_INDEX} onClick={onSortMenuClick}>
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
