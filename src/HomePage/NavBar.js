// Navbar.js
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faVideo, faTh } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../HomePage/SearchBar";
import Button from "../Atoms/Button";
import Icon from "../Atoms/Icon";

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;

  @media (max-width: 768px) {
    height: 30px;
    margin-right: 10px;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-end;
    width: 80%;
  }
`;

const ProfileImage = styled.img`
  margin-left: 20px;
  border-radius: 30%;
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
    height: 25px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s" alt="Logo" />
        <SearchBar />
        <Button>
          <Icon name="mic" />
        </Button>
        <Button>
          <Icon name="video" />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faTh} />
        </Button>
        <Button>
          <Icon name="bell" />
        </Button>
        <ProfileImage src="https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" alt="Profile" />
      </NavbarLeft>
    </NavbarContainer>
  );
};

export default Navbar;
