import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const SearchBar = ({ value, onChange }) => {
  return <SearchBarContainer type="text" value={value} onChange={onChange} />;
};

export default SearchBar;
