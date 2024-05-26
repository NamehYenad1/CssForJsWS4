import BreadCrumbs from "@/Components/BreadCrumbs";
import styled from 'styled-components';
import React from 'react';
import SideBarCategoryList from "@/Components/SideBar/SideBarCategoryList";
const SideBar = ():React.JSX.Element=>{

    return(
        <Wrapper>
        <BreadCrumbs></BreadCrumbs>
        <SideBarCategoryList></SideBarCategoryList>
        </Wrapper>

    )
}

const Wrapper = styled.aside`
  display:flex; 
  flex-direction: column;
  align-items: flex-start;
  gap:36px;
  position: sticky;
  height: fit-content;
  top: 176px;
 
  
`

export default SideBar