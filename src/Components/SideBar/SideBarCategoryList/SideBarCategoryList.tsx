import React from "react";
import {SHOES_CATEGORY} from "@/data.tsx";
import styled from "styled-components";
import SideBarCategoryListItem from "@/Components/SideBar/SideBarCategoryList/SideBarCategoryLIstItem";
// interface Props {
//     children?: ReactNode;
//
// }
const SideBarCategoryList = ():React.JSX.Element=>{
    const renderShoeCategories = SHOES_CATEGORY.map((category)=>{
        return <SideBarCategoryListItem path={category.path} text={category.name}></SideBarCategoryListItem>
    })

    return(
        <CategoryList>
            {renderShoeCategories}
        </CategoryList>
    )

}

const CategoryList = styled.ol`
  display:flex;
  flex-direction:column;
  gap:10px
`

export default SideBarCategoryList

