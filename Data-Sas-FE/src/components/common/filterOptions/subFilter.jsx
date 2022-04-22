import React, { useState } from "react";
import styled from "styled-components";

const FilterMainItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    color: grey;
    cursor: pointer;
`;

const FilterMainItemLabel = styled.p`
    font-size: 16px;
    width: 100%;
    font-weight: 300;
    &:hover {
        color: black;
        font-weight: 400;
    }
`;

const FilterSubItem = styled.div`
    cursor: pointer;
    color: grey;
    width: 100%;
`;

const FilterSubItemLabel = styled.p`
    font-size: 14px;
    width: 100%;
    font-weight: 300;
    &:hover {
        color: black;
        font-weight: 400;
    }
`;

export const SubFilter = ({
    item,
    setSubFilterOptionsHeading,
    setSubFilterOptions,
}) => {
    const [subFilters, setSubFilters] = useState(false);
    const showSubFilters = () => setSubFilters(!subFilters);

    return (
        <>
            <FilterMainItem onClick={item.Sub && showSubFilters}>
                <div>
                    <FilterMainItemLabel>{item.Main}</FilterMainItemLabel>
                </div>
                <div>
                    {item.Sub.filter && subFilters
                        ? item.iconOpened
                        : item.Sub.filter
                        ? item.iconClosed
                        : null}
                </div>
            </FilterMainItem>
            {subFilters &&
                item.Sub.map((item, index) => {
                    return (
                        <FilterSubItem
                            key={index}
                            onClick={() => {
                                setSubFilterOptionsHeading(item.filter);
                                setSubFilterOptions(item.option);
                            }}
                        >
                            <FilterSubItemLabel>
                                {item.filter}
                            </FilterSubItemLabel>
                        </FilterSubItem>
                    );
                })}
        </>
    );
};
