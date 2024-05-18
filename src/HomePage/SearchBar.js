// SearchBar.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
  width: 600px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  background: none;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchBar = ({ value, onChange, onSubmit }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput 
        type="text" 
        value={value} 
        onChange={onChange} 
        onKeyPress={handleKeyPress} 
        placeholder="Search" 
      />
      <SearchButton onClick={onSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
