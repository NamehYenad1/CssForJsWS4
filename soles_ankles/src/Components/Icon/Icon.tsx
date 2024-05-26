import React from 'react';
import styled from 'styled-components';
import {
    Search,
    Menu,
    ShoppingBag,
    ChevronDown,
} from 'react-feather';

interface IconComponents {
    [key: string]:React.JSX.ElementType;
}

const icons: IconComponents = {
    search: Search,
    menu: Menu,
    'shopping-bag': ShoppingBag,
    'chevron-down': ChevronDown,
};

interface Props {
    id: string;
    color?: string;
    size: number;
    strokeWidth: number;
    [key: string]: any;  // Allows for any other additional props
}

const Icon = ({ id, color, size, strokeWidth, ...delegated }: Props): React.JSX.Element => {
    const Component = icons[id];

    if (!Component) {
        throw new Error(`No icon found for ID: ${id}`);
    }


    return (
        <Wrapper strokeWidth={strokeWidth} {...delegated}>
            <Component color={color} size={size} />
        </Wrapper>
    );
};

interface WrapperProps {
    strokeWidth: number;
}

const Wrapper = styled.div<WrapperProps>`
  & > svg {
    display: block;
    stroke-width: ${(props) => props.strokeWidth}px;
  }
`;

export default Icon;
