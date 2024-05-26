
import NavBar from "@/Components/NavBar/NavBar.tsx";
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import SideBar from '@/Components/SideBar'
function Root() {
    return (
        <Wrapper>
            <StyledNavBar></StyledNavBar>
            <MainContent>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display:flex; 
  flex-direction: column;
  width:100%;
  isolation:isolate;
`
const StyledNavBar = styled(NavBar)`
z-index: 2;
`
const MainContent = styled.main`
    margin-top: 112px;
    display:flex; 
    padding:64px 32px;
  z-index: 1;
  gap:75px;
  align-items: baseline;
`


export default Root
