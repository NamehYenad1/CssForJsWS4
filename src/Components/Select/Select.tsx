import styled from 'styled-components'
import React,{ReactNode} from 'react'
import {SortingType,SORTING_TYPES} from "@/constants.tsx";
import {COLORS,WEIGHTS} from "@/constants.tsx";
import Icon from "@/Components/Icon";

interface Props  {
    children: ReactNode;
    value: SortingType;
    label: string;
    onChange:(value:SortingType|string)=>void;
}
const Select  = ({value, label, onChange, children, ...delegated}:Props):React.JSX.Element=>{


    return(
    <Wrapper>
        <VisibleLabel>{label}</VisibleLabel>

        <SelectWrapper>
            <NativeSelect {...delegated} onChange={(e)=>onChange(e.target.value)}>
                {children}
            </NativeSelect>
            <DisplayedBit>{SORTING_TYPES[value]}
                <IconWrapper>
                <Icon  id="chevron-down"
                       size={24}
                       strokeWidth={1.5}></Icon>
                </IconWrapper>
            </DisplayedBit>
        </SelectWrapper>


    </Wrapper>

)
}

const Wrapper = styled.div`
display:flex;
  gap: 16px;
  align-items: center;
`
const VisibleLabel = styled.label` 
    color:${COLORS.gray["700"]};
    font-size:${16/16}rem;
   font-weight:${WEIGHTS.normal}
`
const SelectWrapper = styled.div`
position:relative;
  width:fit-content;
`
const NativeSelect = styled.select`
  opacity:0; 
  top:0;
  left:0;
  width:100%;
  height:100%;
  appearance: none;
  -webkit-appearance: none;            
  position:absolute;
  cursor: pointer;
`


const DisplayedBit = styled.div`
  background-color:${COLORS.gray['100']};
  border-radius:8px;
  padding:12px 40px 12px 16px;
  color:${COLORS.gray['700']};
  font-size:${16/16}rem;
  font-weight:${WEIGHTS.medium};
  
  ${NativeSelect}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + &{
    color:${COLORS.gray["900"]};
  }
`

const IconWrapper = styled.div`
position:absolute;
  height:fit-content;
  right:10px;
  top:0;
  bottom:0;
  margin: auto;
  pointer-events: none;
`

export default Select

