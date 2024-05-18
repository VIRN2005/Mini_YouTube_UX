import React from 'react';
import styled from 'styled-components';

const QuickBarContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
`;

const QuickBarItem = styled.div`
  display: inline-block;
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #f1f1f1;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #0f0f0f;
  text-align: center;
  
  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const QuickBar = ({ items }) => {
  return (
    <QuickBarContainer>
      {items.map((item, index) => (
        <QuickBarItem key={index}>
          {item}
        </QuickBarItem>
      ))}
    </QuickBarContainer>
  );
};

export default QuickBar;