import React from "react";
import * as FaIcons from "react-icons/fa";
import SearchBar from "./subFilterOptions/searchBar";
import SearchBarData from "./subFilterOptions/data.json";
import MinMax from "./subFilterOptions/minMax";
import DropdownSearch from "./subFilterOptions/dropdownSearch";
import DatePicker from "./subFilterOptions/datePicker";

const optionSearchBar = () => {
    return <SearchBar placeholder={"Search"} data={SearchBarData} />;
};

const optionMinMax = () => {
    return <MinMax />;
};

const optionDropDownAndSearch = () => {
    return <DropdownSearch searchNeeded={true} />;
};

const optionDropdown = () => {
    return <DropdownSearch searchNeeded={false} />;
};

const optionFromToDate = () => {
    return <DatePicker />;
};

export const filtersData = [
    {
        Main: "Company",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Company Name", option: optionSearchBar },
            { filter: "Company Number", option: optionSearchBar },
            { filter: "Reference Number", option: optionSearchBar },
            { filter: "Address", option: optionSearchBar },
            { filter: "Website", option: optionSearchBar },
            { filter: "Mail", option: optionSearchBar },
            { filter: "Telephone", option: optionSearchBar },
            { filter: "No. of Employees", option: optionMinMax },
            { filter: "Account Category", option: optionDropDownAndSearch },
        ],
    },
    {
        Main: "Location",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Post Code", option: optionSearchBar },
            { filter: "City", option: optionSearchBar },
            { filter: "County", option: optionSearchBar },
            { filter: "Region", option: optionSearchBar },
            { filter: "Country", option: optionSearchBar },
            { filter: "Constituency", option: optionSearchBar },
            { filter: "Local Authority", option: optionSearchBar },
        ],
    },
    {
        Main: "Status",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Legal Form", option: optionDropdown },
            { filter: "Status", option: optionDropdown },
            { filter: "Incorporation Date", option: optionFromToDate },
            { filter: "Liquidation Date", option: optionFromToDate },
            { filter: "Dissolution Date", option: optionFromToDate },
            { filter: "Company Category", option: optionDropdown },
            { filter: "Last Accounts Date", option: optionFromToDate },
        ],
    },
    {
        Main: "Activities",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "UK SIC Section", option: optionDropdown },
            { filter: "UK SIC", option: optionDropdown },
            { filter: "NACE", option: optionDropdown },
            { filter: "US SIC", option: optionDropdown },
            { filter: "NAICS", option: optionDropdown },
            { filter: "Sector", option: optionDropdown },
            { filter: "SubSector", option: optionDropdown },
        ],
    },
    {
        Main: "Financials",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Financials", option: optionMinMax },
            { filter: "Ratios", option: optionMinMax },
        ],
    },
    {
        Main: "Directors",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Name", option: optionSearchBar },
            { filter: "Role", option: optionSearchBar },
            { filter: "Occupation", option: optionDropdown },
            { filter: "Nationality", option: optionDropdown },
            { filter: "Country of Residence", option: optionDropdown },
            { filter: "Status", option: optionDropdown },
            { filter: "Appointment Date", option: optionFromToDate },
            { filter: "Resign Date", option: optionFromToDate },
        ],
    },
    {
        Main: "Ownership",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Name", option: optionSearchBar },
            { filter: "Kind", option: optionDropdown },
            { filter: "Nationality", option: optionDropdown },
            { filter: "Country of Residence", option: optionDropdown },
            { filter: "Status", option: optionDropdown },
            { filter: "Appointment Date", option: optionFromToDate },
            { filter: "Resign Date", option: optionFromToDate },
        ],
    },
    {
        Main: "Trade",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Importer Status", option: optionDropdown },
            { filter: "Exporter Status", option: optionDropdown },
        ],
    },
];
