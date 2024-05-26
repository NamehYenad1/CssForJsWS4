import React from 'react'
import styled from 'styled-components'
import Icon from '@/Components/Icon'
import VisuallyHidden from "@/Components/VisuallyHidden";
import {COLORS} from "@/constants.tsx";

interface Props{
    label:string,
    icon:string,
    width?:number,
    size:number,
    [key: string]: any;
}
const IconInput = ({
    label,
    icon,
    width=250,
    size,
    ...delegated}:Props):React.JSX.Element=>{
    return (
        <Label>
            <VisuallyHidden>Search</VisuallyHidden>
            <Input {...delegated} placeholder="Search…" />
            <SearchIcon id="search" color={COLORS.gray["300"]} strokeWidth={1} size={16} />
        </Label>
    )
}

const Label = styled.label`
  position: relative;
  height:100%
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;


export default IconInput