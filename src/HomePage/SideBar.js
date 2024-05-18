import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 240px;
  background-color: #ffffff;
  color: #000000;
  padding-top: 70px; 
  position: fixed;
  height: 100%;
  border-right: 1px solid #e0e0e0;
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <MenuItem>Home</MenuItem>
        <MenuItem>Trending</MenuItem>
        <MenuItem>Subscriptions</MenuItem>
        <MenuItem>Library</MenuItem>
        <MenuItem>History</MenuItem>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
