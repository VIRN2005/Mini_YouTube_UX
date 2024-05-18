import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

const NavbarContainer = styled.div`
  background-color: white;
  color: black;
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

const Navbar = () => {
  return (
    <NavbarContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo src="logo.png" alt="Logo" />
        <SearchBar />
        <Button>
          <Icon name="mic" />
        </Button>
      </div>
      <div>
        <Button>
          <Icon name="notifications" />
        </Button>
        <Button>
          <img src="profile.jpg" alt="Profile" style={{ borderRadius: '50%', height: '30px' }} />
        </Button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
