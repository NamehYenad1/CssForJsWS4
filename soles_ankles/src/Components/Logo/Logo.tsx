import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <StyledLink {...props} to="/">
      <Wrapper >Sole&amp;Ankle</Wrapper>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
