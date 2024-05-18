import React from "react";
import styled from "styled-components";
import Icon from "../Atoms/Icon";

const SidebarContainer = styled.div`
  width: 240px;
  background-color: #ffffff;
  color: #000000;
  padding-top: 70px;
  position: fixed;
  height: 100%;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
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
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src="#000000" alt="Logo1" />
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
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
