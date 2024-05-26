import React from 'react'
import { useRouteError } from "react-router-dom";
import styled from 'styled-components'
const ErrorPage = ():React.JSX.Element=>{
    const error:any = useRouteError();
    console.error(error);

    return (
        <Wrapper id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display:flex; 
  flex-direction: column;
  justify-content: center;
  height:100%;
  gap:20px;
  align-items:center;
`

export default ErrorPage