import React from 'react';

import Select from 'react-select'
import MyOption from './MyOption';

import './css/itemForm.scss';

function SmallSelectBox({options, placeholder}) {

    const customStyles = {
        control: (provided, state) => ({
            backgroundColor: '#6f76c1',
            borderRadius: state.menuIsOpen ? '10px 10px 0px 0px' : 10,
            display: 'flex',
            color: '#fff',
            height: 30
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
        }),
        indicatorSeparator: (provided, state) => ({
            display: 'none'
        }),
        menu: (provided, state) => ({
            backgroundColor: '#6f76c1',
            borderRadius: '0px 0px 10px 10px',
            color: '#fff',
        }),
        option: (provided, state) => ({
            height: 30,
            color: state.isFocused ? '#f9c153' : null,
        }),
    }

    return (
        <Select 
            className="menuSelect" 
            classNamePrefix='menuSelect'
            options={options} 
            styles={customStyles} 
            isSearchable={false} 
            components={{ Option: MyOption }}
            placeholder= {placeholder}
        />
    );
}

export default SmallSelectBox;