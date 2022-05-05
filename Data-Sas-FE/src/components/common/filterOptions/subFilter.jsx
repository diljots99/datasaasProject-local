import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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
    subFilterOptionsHeading
}) => {
    const [subFilters, setSubFilters] = useState(false);
    const showSubFilters = () => setSubFilters(!subFilters);

    return (
        <>
            {/* <FilterMainItem onClick={item.Sub && showSubFilters}>
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
                })} */}

<ListItemButton
        onClick={item.Sub && showSubFilters}
        style={{ backgroundColor: subFilters ? "#EBE9E9" : "", padding: "10px 35px" }}
        key={item.Main}
      >
        <ListItemText primary={item.Main} />
        {subFilters ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={subFilters}
        timeout="auto"
        unmountOnExit
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <List component="div" disablePadding>
            { 
            subFilters &&
            item.Sub.map((item, index) => {
                return (
                    <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
                setSubFilterOptionsHeading(item.filter);
                setSubFilterOptions(item.option);
            }}
            style={{
              fontWeight: subFilterOptionsHeading === item.filter ? "bold" : "",
              padding: "10px 35px",
            }}
            key={index}
          >
            <Typography variant="p">{item.filter}</Typography>
          </ListItemButton>
                )
             })
            }
         
        </List>
      </Collapse>
        </>
    );
};
