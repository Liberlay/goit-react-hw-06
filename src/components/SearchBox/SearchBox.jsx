import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, filterByName } from '../../redux/filtersSlice'

import styles from './SearchBox.module.scss'

export default function SearchBox() {
  const dispatch = useDispatch()
  const filter = useSelector(filterByName)

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div className={styles.container}>
      <p>Find contacts by name</p>
      <input type="text" name="name" value={filter} onChange={handleFilter} />
    </div>
  )
}
