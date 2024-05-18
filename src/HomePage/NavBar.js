// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVideo, faTh } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../HomePage/SearchBar';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

const NavbarContainer = styled.div`
  background-color: #ffffff;
  color: #0f0f0f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  margin-left: 20px;
  border-radius: 50%;
  height: 30px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Logo src="logo.png" alt="Logo" />
        <SearchBar />
        <Button>
          <Icon name="mic" />
        </Button>
      </NavbarLeft>
      <NavbarRight>
        <Button>
          <FontAwesomeIcon icon={faVideo} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faTh} />
        </Button>
        <NotificationIcon>
          <FontAwesomeIcon icon={faBell} />
        </NotificationIcon>
        <ProfileImage src="profile.jpg" alt="Profile" />
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
