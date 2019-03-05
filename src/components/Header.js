import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 50px;
    width: 100%;
    background-color: #4d4d4d;
    position: relative;
    display: flex;
    justify-content: space-between;
`
const NavTitle = styled.div`
    padding: 10px 10px 10px 10px;
    font-size: 20px;
    color: #ffffff;    
`
const MenuContainer = styled.div`
    padding: 10px 10px 10px 10px;
    width: 300px;
    display: flex;
`
const MenuItem = styled.div`
    font-size: 20px;
    color: #ffffff;
    flex: 1;
    text-align: center;
    @media only screen and ( max-width: 768px ) {
    display: none;
    }
`
const HambergerIcon = styled.i`
    &.hamburger {
        font-size: 1.5em;
        z-index: 2;
        align-items: flex-end;
        padding: 10px 10px 10px 10px;
    }
    @media only screen and ( min-width: 768px ) {
        &.hamburger {
            display: none;
        }
    }
`


const HeaderTitle = ({ title }) => (
    <NavTitle>
       {title}
    </NavTitle>
)

const MenuList = () => ( 
    <MenuContainer>
        <MenuItem >
            Github
        </MenuItem>
        <MenuItem >
            Github
        </MenuItem>
        <MenuItem >
            Github
        </MenuItem>
    </MenuContainer>
    )

export default ({ title = 'Teerapat' }) => (
    <Nav>
        <HeaderTitle title={title} />
        <MenuList/>
        <HambergerIcon className="fa fa-bars hamburger" />
    </Nav>
)