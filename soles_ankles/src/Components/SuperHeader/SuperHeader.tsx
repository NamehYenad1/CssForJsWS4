import React from 'react'
import styled from 'styled-components';
import IconInput from '@/Components/IconInput'
import {COLORS} from "@/constants.tsx";
import Icon from '@/Components/Icon'
import UnstyledButton from "@/Components/UnstyledButton";
const SuperHeader = ():React.JSX.Element =>{
return <>
    <Wrapper>
        <Title>Free shipping on domestic orders over $75!</Title>
        <RightContent>
            <IconInput placeholder='Search' label='search' icon='search' size={16}>
            </IconInput>
              <HelpLink>
              Help
              </HelpLink>
             <UnstyledButton>
             <Icon color={COLORS.gray['300']} size={16} id="shopping-bag" strokeWidth={3}></Icon>
             </UnstyledButton>
        </RightContent>
    </Wrapper>
</>
}
const Wrapper = styled.div`
  display:flex;
  align-items:center;
  padding:8px 32px; 
  justify-content: space-between;
  background-color: ${COLORS.gray["900"]};
  width:100%;
  color:hsla(0,0%, 100%, 1);
  
`

const Title = styled.span `
  font-size: ${14/16}rem;
  height: ${16/16}rem; 
  font-weight:500; 
  color:inherit;
`

const RightContent = styled.div`
  display:flex;
  flex-direction: row;
  gap:${24/16}rem; 
`


const HelpLink = styled.a`
  color:inherit;
  text-decoration: none;
  outline-offset:2px; 
  cursor:pointer;
  &:not(:focus-visible){
    outline:none;
  }
`

export default SuperHeader