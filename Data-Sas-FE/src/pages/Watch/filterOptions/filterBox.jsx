import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./filterBox.css";
import { filtersData } from "./filterData";
import styled from "styled-components";
import { SubFilter } from "./subFilter";
import * as BiIcons from "react-icons/bi";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const FiltersWrap = styled.div`
    margin: 0px;
    padding: 15px 20px;
    background-color: #f8f8f8;
    width: 200px;
    padding-bottom: 0px;
`;

export const FilterBox = () => {
    // Open / Close filters
    const [openFilters, setOpenFilters] = useState(false);
    const handleOpen = () => setOpenFilters(true);
    const handleClose = () => setOpenFilters(false);

    // Sub-Filter Secion
    const [subFilterOptionsHeading, setSubFilterOptionsHeading] =
        useState("Options");
    const [SubFilterOptions, setSubFilterOptions] = useState();

    const [AppliedFilters, setAppliedFilters] = useState([]);

    return (
        <div>
            <Button
                onClick={handleOpen}
                sx={{
                    padding: 0.3,
                    paddingRight: 1,
                }}
            >
               <BiIcons.BiMenuAltRight
                    className="FilterMenuIcon"
                    size={"40px"}
                /> 
                <h4 className="filterButtonText">Filter</h4>
            </Button>
            <Modal open={openFilters} onClose={handleClose}>
                <Box sx={style}>
                    <h1 className="filterOptionsBoxHeading">
                         <BiIcons.BiMenuAltRight
                            className="FilterMenuIcon"
                            size={"25px"}
                        />
                        Filter Options
                    </h1>
                    <div className="filtersBox">
                        <div className="filtersListContainer">
                            <FiltersWrap>
                                {filtersData.map((item, index) => {
                                    return (
                                        <SubFilter
                                            item={item}
                                            setSubFilterOptionsHeading={
                                                setSubFilterOptionsHeading
                                            }
                                            setSubFilterOptions={
                                                setSubFilterOptions
                                            }
                                            key={index}
                                        />
                                    );
                                })}
                            </FiltersWrap>
                        </div>
                        <div className="subFiltersContainer">
                            <div className="subFiltersContainerHeading">
                                {subFilterOptionsHeading}
                                <div className="subFilterOptionsContainer">
                                    {SubFilterOptions}
                                </div>
                            </div>

                            <div className="subFiltersContainerButton">
                                <button className="subFilterApply">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className="clearFiltersContainer">
                            <div className="clearFiltersContainerText">
                                Clear Filters
                            </div>
                            <div className="appliedFilters">
                                {AppliedFilters}
                            </div>
                            <div className="clearFiltersContainerButtons">
                                <button className="clearFilterSave">
                                    Save
                                </button>
                                <button className="clearFilterSearch">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default FilterBox;
