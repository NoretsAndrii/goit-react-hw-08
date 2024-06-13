import { useId } from 'react';
import { useSelector } from 'react-redux';

import css from './SearchBox.module.css';

import { useDispatch } from 'react-redux';
import {
  setFilter,
  selectNameFilter,
  selectTypeFilter,
  setFilterType,
} from '../../redux/filters/filtersSlice';
import { setModalOpen } from '../../redux/modal/modalSlice';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const filterType = useSelector(selectTypeFilter);
  const searchNameFieldId = useId();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  const handleSelect = e => {
    dispatch(setFilterType(e.target.value));
  };

  function openModal() {
    const data = {
      isModalOpen: true,
      typeModal: 'Add contact',
      initialValues: {
        name: '',
        number: '',
      },
      id: null,
    };
    dispatch(setModalOpen(data));
  }

  return (
    <div className={css.wrapper}>
      <button onClick={openModal}>Add contact</button>
      <div className={css.search}>
        <label className={css.label} htmlFor={searchNameFieldId}>
          Find contacts by
        </label>
        <select
          className={css.select}
          name="type"
          onChange={handleSelect}
          value={filterType}
        >
          <option value="name">name</option>
          <option value="phone">phone</option>
        </select>
        <input
          className={css.input}
          type="text"
          name="searchName"
          id={searchNameFieldId}
          value={filter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
