import React, { useState } from 'react'
import styles from '../styles/dropdown.module.css';
import ArrrowIcon from '../images/down-arrow.png';

// Dropdown component
function Dropdown() {
  const options = ['...', 'Yes', 'Probably not']; //dropdown items list
  const [dropdownValue, setDropdownValue] = useState('');  // state to maintain selected item of dropdown
  const [displayDropdown, setDisplayDropdown] = useState(false); //state to show dropdown options

  // Handle clicking an option from dropdown list
  const handleSelect = (e) => {
    const data = e.target.innerHTML; //get target element value

    // toggle the value in dropdown with selected value
    if(data !== '...'){
      setDropdownValue(data);
    }else{
      setDropdownValue('');
    }
    setDisplayDropdown(false); //close dropdown options list
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
            { options.map((option, index) => (
                <li onClick={handleSelect} value={option} key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// export the component
export default Dropdown;