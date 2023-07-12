import React, { useState } from 'react'
import styles from '../styles/dropdown.module.css';
import ArrrowIcon from '../images/down-arrow.png';

// Dropdown component
function Dropdown() {
  const items = ['...', 'Yes', 'Probably not']; //dropdown items list
  const [dropdownValue, setDropdownValue] = useState('');  // state to maintain selected item of dropdown
  const [displayDropdown, setDisplayDropdown] = useState(false); //state to show dropdown items

  // Handle clicking an option from dropdown list
  const handleSelect = (e) => {
    const data = e.target.innerHTML;

    // if selected option is not default
    if(data !== '...'){
      setDropdownValue(data);
    }else{
      setDropdownValue('');
    }
    setDisplayDropdown(false);
  }

  return (
    <div className={styles.dropdownContainer}>
      <p>Should you use a dropdown?</p>

      {/* Dropdown switch */}
      <div className={styles.dropdownSwitch} onMouseEnter={() => setDisplayDropdown(true)}>
        <p>
          {dropdownValue !== '' ? dropdownValue : 'Select'}
        </p>
       <img src={ArrrowIcon} alt='dropdown-icon' height='50px' width='50px' />
      </div>

      {/* Dropdown options */}
      {displayDropdown && (
        <div className={styles.dropdownList}>
          <ul>
            { items.map((item, index) => (
                <li onClick={handleSelect} value={item} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// export the component
export default Dropdown;