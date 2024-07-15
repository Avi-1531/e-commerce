import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        <img src="./images/logo.png" style={{height:'156px',width:'170px'}} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header
