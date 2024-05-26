
import styled from 'styled-components'
import { ReactNode } from "react";
import {NavLink} from 'react-router-dom'


interface Props {
    children?: ReactNode;
    path:string;
    text:string;
}
const Crumbs = ({ path,text}:Props)=>{
      return(
        <>
            <StyledNavLink to={path}>
                {text}
            </StyledNavLink>
        </>
    )
}

const StyledNavLink = styled(NavLink)`

  --spacing:12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);

    }
  }
`

export default Crumbs