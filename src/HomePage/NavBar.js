import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

const NavbarContainer = styled.div`
  background-color: #f00;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <img src="logo.png" alt="Logo" />
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
          <img src="profile.jpg" alt="Profile" />
        </Button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
