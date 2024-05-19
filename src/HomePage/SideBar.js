import React from 'react';
import styled from 'styled-components';
import Icon from '../Atoms/Icon';
import SubscriptionList from "../Molecules/SubscriptionList"

const SidebarContainer = styled.div`
  width: 240px;
  background-color: #ffffff;
  color: #000000;
  padding-top: 10px;
  position: fixed;
  height: 100%;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: center;
    padding-top: 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const MenuIcon = styled.div`
  margin-right: 16px;
`;

const LogoContainer = styled.div`
  padding: 25px;

  @media (max-width: 500px) {
    text-align: center;
    padding: 0px 0;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' alt="Logo" />
      </LogoContainer>
      <ul>
        <MenuItem>
          <MenuIcon>
            <Icon name="home" />
          </MenuIcon>
          Home
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <Icon name="fire" />
          </MenuIcon>
          Trending
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <Icon name="subscriptions" />
          </MenuIcon>
          Subscriptions
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <Icon name="library" />
          </MenuIcon>
          Library
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <Icon name="history" />
          </MenuIcon>
          History
        </MenuItem>
        <SubscriptionList/>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

