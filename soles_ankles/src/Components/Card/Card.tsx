import React from 'react'
import styled from "styled-components";
import {COLORS, WEIGHTS} from "@/constants.tsx";

const STYLES={
    sale:{
        backgroundColor: COLORS.primary,
        display:'inherit',
        text: 'Sale'
    },
    new:{
        backgroundColor: COLORS.secondary,
        display:'inherit',
        text: 'Just Released'
    },
    standard:{
        backgroundColor: 'inherit',
        display:'none',
        text:''
    }

}
interface Props{
    variant: 'new'|'sale'|'standard',
    imageSrc: string,
    title: string,
    salePrice: number | null,
    price: number,
    colorTypes: string
}
const Card = ({variant, imageSrc, title, salePrice, price, colorTypes}: Props)=>{
    const styles = STYLES[variant]
    return(
        <Wrapper>
            <ImgWrapper>
                <Badge  style={{'--backgroundColor': styles.backgroundColor} as React.CSSProperties}>
                    {styles.text}
                </Badge>
            <Image src={imageSrc}/>
            </ImgWrapper>
            <Description>
                <DescriptionInnerWrappers>
                    <Title>
                        {title}
                    </Title>
                    <Price sale={salePrice}>
                        ${price}
                    </Price>
                </DescriptionInnerWrappers>
                <DescriptionInnerWrappers>
                    <ColorsTypes>
                        {colorTypes}
                    </ColorsTypes>
                    {salePrice &&
                    <SalePrice>
                        ${salePrice}
                    </SalePrice>
                    }
                </DescriptionInnerWrappers>
            </Description>
        </Wrapper>

    )
    }



const Wrapper = styled.article`
    flex:1 0 300px;
    display:flex; 
    flex-direction:column; 
    gap: 14px;
    max-width:max-content;
`


const Badge= styled.span`
  position: absolute;
  background-color:var(--backgroundColor);
  color:${COLORS.white};
  padding:7px 9px;
  font-weight:${WEIGHTS.bold};
  font-size:${14/16}rem;
  border-radius: 4px;
  top:14px;
  right:-6px;
    `
const ImgWrapper = styled.section`
  position: relative;
  & img {
    border-radius: 16px 16px 4px 4px;
  }
`
const Image = styled.img``

const Description = styled.section`
    display:flex;
  flex-direction:column;
  gap:3px;
`
const DescriptionInnerWrappers = styled.div` 
    display:flex;
  justify-content: space-between;
`
const Title = styled.span`
    font-size:${16/16}rem;
    font-weight:${WEIGHTS.medium}
`
interface PriceProp{
    sale:number|null
}
const Price = styled.span<PriceProp>`
  font-family:'Roboto';
  text-decoration:${props=>props.sale? 'line-through':'inherit'}
`

const ColorsTypes = styled.span``

const SalePrice = styled.span`
  font-family:'Roboto';
  color:${COLORS.primary};
  font-size:${16/16}rem;
  font-weight:${WEIGHTS.medium}
`

export default Card
