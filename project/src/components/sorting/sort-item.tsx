import { SortType } from '../../types/SortType';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeSortType } from '../../store/data-process/data-process';

const DEFAULT_TAB_INDEX = 0;

type SortItemProps = {
  sortType: SortType,
  isActive: boolean
}

function SortItem(props: SortItemProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const onSortTypeClick = (e: MouseEvent<HTMLLIElement>) => {
    dispatch(changeSortType(props.sortType));
  };

  return (
    <li
      key={props.sortType.id}
      className={`places__option ${props.isActive ? 'places__option--active' : ''}`}
      tabIndex={DEFAULT_TAB_INDEX}
      onClick={onSortTypeClick}
    >
      {props.sortType.name}
    </li>
  );
}

export default SortItem;
