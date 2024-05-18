import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 2px;
  margin-right: 20px;
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
  background: #f1f1f1;
  border: none;
  cursor: pointer;
  padding: 0 10px;
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <SearchBarContainer>
      <SearchInput type="text" value={value} onChange={onChange} placeholder="Search" />
      <SearchButton>
        <i className="icon-search" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
