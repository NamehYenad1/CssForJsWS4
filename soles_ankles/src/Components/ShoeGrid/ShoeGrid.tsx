import styled from 'styled-components'
import React from 'react'
import {Shoe} from "@/data.tsx";
import Card from "@/Components/Card";
interface Props{
    shoes:Array<Shoe>
}
const ShoeGrid = ({shoes}:Props):React.JSX.Element=>{

    return(
        <Wrapper>
            {shoes.map(shoe=>{
                return <Card key={shoe.slug} variant={shoe.variantType} price={shoe.price} salePrice={shoe.salePrice} colorTypes={`${shoe.numOfColors} colors`} imageSrc={shoe.imageSrc} title={shoe.name} ></Card>
            })}
        </Wrapper>
    )
}

export default ShoeGrid

const Wrapper = styled.section`
  display:flex; 
  flex-direction:row;
  flex-wrap:wrap;
  gap:36px;
`