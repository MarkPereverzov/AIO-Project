import React, { ReactEventHandler, useState } from 'react';
import { Form, Button,Dropdown } from 'react-bootstrap';

import styles from "./DropDownInput.module.css";

interface DropDownInputProps {
    suggestions: string[];
    onEnter: (value: string) => void;
}

export const DropDownInput: React.FC<DropDownInputProps> = ({ suggestions, onEnter }) => {
    const [currentInput, setCurrentInput] = useState<string>('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setCurrentInput(value);
        const filtered = suggestions?.filter((item: string) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered as any);
    };

    const handleSubmit = (suggestion: string) => {
        if (currentInput.trim().length === 0) {
            return;
        }

        onEnter(suggestion);
        setCurrentInput("");
    }

    const handleSelect = (suggestion: string) => {
        setCurrentInput(suggestion); // Заполняем поле
        setFilteredSuggestions([]); // Скрываем подсказки
        handleSubmit(suggestion);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleSubmit(currentInput);
        }
    };

  return (
    <div className={styles.InputListElement}>
        <Form.Control
            type="text"
            placeholder="Група мышц"
            value={currentInput}
            onChange={(e) => {handleInputChange(e)}}
            onKeyDown={handleKeyDown}
        />
        {filteredSuggestions?.length > 0 && (
            <Dropdown show>
                <div className={styles.dropDownMenu}>
                    {filteredSuggestions.map((suggestion, index) => (
                    <Dropdown.Item
                        key={index}
                        className={styles.dropDownItem}
                        onClick={() => handleSelect(suggestion)}
                    >
                        {suggestion}
                    </Dropdown.Item>
                    ))}
                </div>
            </Dropdown>
        )}
    </div>
  );
};