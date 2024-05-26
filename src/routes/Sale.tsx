import React, {useState} from 'react'
import styled from'styled-components'
import Header from "@/Components/Header/Header.tsx";
import { SortingType} from "@/constants.tsx";
import {SHOES} from '@/data.tsx'
import ShoeGrid from "@/Components/ShoeGrid";


function Sale():React.JSX.Element {
    const [sorting, setSorting] = useState<SortingType>('newest');
    const onChangeSorting = (value:SortingType)=>{
        setSorting(value)
    }

    return (
        <Wrapper>
            <Header sorting={sorting} onChangeSorting={onChangeSorting} ></Header>
            <ShoeGrid shoes={SHOES}></ShoeGrid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width:100%;
  display:flex;
  flex-direction:column;
  gap:32px;
`
export default Sale
