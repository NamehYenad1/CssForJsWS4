import styled from 'styled-components'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {WEIGHTS,COLORS} from "@/constants.tsx";

interface Props{
    path:string,
    text:string
}
const SideBarCategoryListItem = ({ path, text}:Props):React.JSX.Element=>{
return (
    <li>
        <NavLink to={path}>
            {({ isActive })  => (
                <NavigationText isActive={isActive}>{text}</NavigationText>
            )}
        </NavLink>
    </li>
)
}

interface NavigationTextProps {
    isActive:boolean
}
const NavigationText = styled.span<NavigationTextProps>`
        font-size:${16/16}rem;
        font-weight:${WEIGHTS.medium};
        color: ${(props) => (props.isActive ? COLORS.red : 'inherit')};
        `

export default SideBarCategoryListItem
