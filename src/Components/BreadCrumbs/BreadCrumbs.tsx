
import styled from 'styled-components';
import {useMatches} from "react-router-dom";
import Crumbs from "@/Components/BreadCrumbs/Crumbs/Crumbs.tsx";
import {COLORS, WEIGHTS} from "@/constants.tsx";
const BreadCrumbs=()=>{
let matches = useMatches();
// @ts-ignore
    let crumbs = matches.filter((match)=>Boolean(match.handle?.crumb)).map((match)=>match.handle.crumb(match.data));

    return (
        <Nav aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => (
                <Crumbs key={index} path={crumb.path} text={crumb.text}></Crumbs>
            ))}
        </Nav>
    );
}
const Nav = styled.nav`
    font-size:${14/16}rem;
    color:${COLORS.gray["700"]};
    font-weight:${WEIGHTS.normal}
`


export default BreadCrumbs