import React, {useState, useEffect} from 'react';

export default function Dropdown({ placeholder, options, isMulti }) {

    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

    useEffect(() => {
        const handler = () => setShowMenu(false);
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeholder;
        }
        if (isMulti) {
            return (
                <div className='dropdown-tags'>
                    {selectedValue.map((option) => (
                        <div key={option.value} className='dropdown-tag-item'>
                            { option.label }
                            <span onClick={(e) => onTagRemove(e, option)} className='dropdown-tag-close'>
                                <img src={require("../images/close-icon.png")} className='close-icon' alt="close-icon" />
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue.label;
    };

    const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            }
            else {
                newValue = [...selectedValue, option];
            }
        }
        else {
            newValue = option;
        }
        setSelectedValue(newValue);
    };

    const isSelected = (option) => {
        if (isMulti) {
            return selectedValue.filter((o) => o.value === option.value).length > 0;
        }
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    }

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        setSelectedValue(removeOption(option));
    };

    return (
        <div className='all-clubs-dropdown-container'>
            <div onClick={ handleInputClick } className='all-clubs-dropdown-input'>
                <div className='all-clubs-dropdown-selected-value'> { getDisplay() } </div>
                <div className='all-clubs-dropdown-tools'>
                    <div className='all-clubs-dropdown-tool'>
                        <img src={require("../images/dropdown-logo.png")} className='dropdown-logo' alt="logo" />
                    </div>
                </div>
            </div>
            { showMenu && (
                <div className='all-clubs-dropdown-menu'>
                { options.map((option) => (
                    <div onClick={ () => onItemClick(option) } key={ option.value } className={`all-clubs-dropdown-item ${isSelected(option) && "selected"}`}>
                        { option.label }
                    </div>
                ))}
                </div>
            )}
        </div>
    )
    }
