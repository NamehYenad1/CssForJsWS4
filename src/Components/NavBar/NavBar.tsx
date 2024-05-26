import React from 'react'
import styled from 'styled-components';
import {COLORS, WEIGHTS} from "@/constants.tsx";
import {NavLink} from 'react-router-dom'
import SuperHeader from "@/Components/SuperHeader";
import Logo from "@/Components/Logo";
const NavBar = ({...delegated}):React.JSX.Element=>{
    return(
        <>
            <Wrapper { ...delegated}>
                <SuperHeader>
                </SuperHeader>
                <MainHeader>
                    <MainHeaderWrapper>
                    <StyledLogo></StyledLogo>
                        <Nav>
                            <NavLink to={`sale/shoes`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>SALE</NavigationText>
                                )}
                            </NavLink>

                            <NavLink to={`newReleases`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>NEW RELEASES</NavigationText>
                                )}

                            </NavLink>
                            <NavLink to={`men`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>MEN</NavigationText>
                                )}

                            </NavLink>
                            <NavLink to={`women`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>WOMEN</NavigationText>
                                )}

                            </NavLink>
                            <NavLink to={`kids`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>KIDS</NavigationText>
                                )}

                            </NavLink>
                            <NavLink to={`collections`}>
                                {({ isActive })  => (
                                    <NavigationText isActive={isActive}>COLLECTIONS</NavigationText>
                                )}

                            </NavLink>
                        </Nav>
                    </MainHeaderWrapper>
                </MainHeader>

            </Wrapper>
        </>
    )

}

const Wrapper = styled.div`
position: fixed;
  top:0;
  display:flex;
  flex-direction:column; 
  width:100%;
`

const MainHeader = styled.div`
 display:flex;
  flex-direction: column;
  justify-content: center;
  height:72px;
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  background-color:hsl(0, 0%, 100%);
`;

const MainHeaderWrapper = styled.div`
  width:100%;
  position:relative;
  display:flex;
  justify-content: center;
  height:fit-content;
  align-items:baseline
`

const StyledLogo=styled(Logo)`
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  margin: auto;

`

const Nav = styled.nav`
  display:flex;
  justify-content: center;
  height:fit-content;
  align-items: center;
  gap:48px;
  
`

interface NavigationTextProps {
    isActive:boolean
}
const NavigationText = styled.span<NavigationTextProps>`
    font-size:${18/16}rem;
    font-weight:${WEIGHTS.medium};
    color: ${(props) => (props.isActive ? COLORS.secondary : 'inherit')};
  
`







export default NavBar

