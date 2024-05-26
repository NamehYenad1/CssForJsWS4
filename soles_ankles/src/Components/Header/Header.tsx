import React from 'react'
import styled from "styled-components";
import {WEIGHTS} from "@/constants.tsx";
import { useLocation } from 'react-router-dom';
import Select from "@/Components/Select";
import {SORTING_TYPES, SortingType} from "@/constants.tsx";

interface Props{
    sorting: SortingType,
    onChangeSorting:(value:SortingType)=>void,
}
const Header = ({sorting, onChangeSorting}:Props):React.JSX.Element=>{
    const location = useLocation()
    const path: string | undefined = location.pathname.split('/').pop();

    const formattedPath: string = path ? path.charAt(0).toUpperCase() + path.slice(1) : '';

    const sortingOptions = Object.entries(SORTING_TYPES).map(([key, label]) => (
        <option key={key} value={key}>
            {label}
        </option>
    ));


    return(
    <Wrapper>
        <Title>{formattedPath}</Title>
        <Select label='Sort' value={sorting} onChange={onChangeSorting}>
            {sortingOptions}
        </Select>
    </Wrapper>
    )
}

const Wrapper =  styled.header`
  display:flex; 
  flex-direction:row; 
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;


export default Header