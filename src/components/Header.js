import React from 'react'
import { compose, withProps, withHandlers, withState } from 'recompose'
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
    @media only screen and ( max-width: 768px ) {
        /* display: block; */
        display: none;
    }
`
const MenuItem = styled.div`
    font-size: 20px;
    color: #ffffff;
    flex: 1;
    /* text-align: center; */
    @media only screen and ( max-width: 768px ) {
      margin: 20px 20px 20px 20px;
    }
`
const HambergerIcon = styled.i`
    &.hamburger {
        font-size: 1.5em;
        z-index: 2;
        align-items: flex-end;
        padding: 10px 10px 10px 10px;
    }
    &.hamburger:hover {
        /* background-color: red; */
    }

    @media only screen and ( min-width: 768px ) {
        &.hamburger {
            display: none;
        }
    }
`
const SideBarContainer = styled.div`
    display: block;
    width: 300px;
    height: 100vh;
    background-color: #4d4d4d;
    padding: 30px 30px 30px 30px;
    flex-direction: column;

`

const HeaderTitle = ({ title }) => (
    <NavTitle>
       {title}
    </NavTitle>
)

const MenuItems = () => (
    <React.Fragment>
        <MenuItem >
            Github
        </MenuItem>
        <MenuItem >
            Github
        </MenuItem>
        <MenuItem >
            Github
        </MenuItem>
    </React.Fragment>
)
const SideBar = () => (
    <SideBarContainer>
      <MenuItems />
    </SideBarContainer>
)
const MenuList = () => ( 
    <MenuContainer>
      <MenuItems />
    </MenuContainer>
    )


const Header = ({title, onClick, toggle}) => (
    <Nav>
        {/* {console.log(click)} */}
        <HeaderTitle title={title} />
        <MenuList/>
        <HambergerIcon className="fa fa-bars hamburger" onClick={onClick}/>
        {toggle && <SideBar />}
    </Nav>
)

const isToggle = withState('toggle','setToggle', false)

const addHandlers = withHandlers({
    onClick: ({setToggle, toggle}) => () => setToggle(!toggle)
})

export default compose(
    withProps( props => {
        return {
            ...props
        }
      }
    ),
    isToggle,
    addHandlers,
)(Header)