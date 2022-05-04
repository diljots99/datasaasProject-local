import React from "react";
import * as FaIcons from "react-icons/fa";
import SearchBar from "./subFilterOptions/searchBar";
import SearchBarData from "./subFilterOptions/data.json";
import MinMax from "./subFilterOptions/minMax";
import DropdownSearch from "./subFilterOptions/dropdownSearch";
import DatePicker from "./subFilterOptions/datePicker";

//FilterOptions
import CompanyName from './filterOptionsPage/CompanyName'
import CompanyNumber from './filterOptionsPage/CompanyNumber'
import ReferenceNumber from './filterOptionsPage/ReferenceNumber'
import Address from './filterOptionsPage/Address'
import Website from './filterOptionsPage/Website'
import Mail from './filterOptionsPage/Mail'
import Telephone from './filterOptionsPage/Telephone'
import NoOfEmployees from "./filterOptionsPage/NoOfEmployees";
import PostalCode from "./filterOptionsPage/PostalCode";
import City from "./filterOptionsPage/City";
import County from "./filterOptionsPage/County";
import Region from "./filterOptionsPage/Region";
import Country from "./filterOptionsPage/Country";
import Constituency from "./filterOptionsPage/Constituency";
import LocalAuthority from "./filterOptionsPage/LocalAuthority";
import LeagalForm from "./filterOptionsPage/LegalForm";
import Status from "./filterOptionsPage/Status";
import IncorporationDate from "./filterOptionsPage/IncorporationDate";
import LiquidationDate from "./filterOptionsPage/LiquidationDate";
import DissolutionDate from './filterOptionsPage/DissolutionDate'
import CompanyCategory from './filterOptionsPage/CompanyCategory'
import LastAccountsDate from './filterOptionsPage/LastAccountsDate'
import UKSICSection from './filterOptionsPage/UKSICSection'
import UKSIC from './filterOptionsPage/UKSIC'
import NACE from './filterOptionsPage/NACE'
import USSIC from './filterOptionsPage/USSIC'
import NAICS from './filterOptionsPage/NAICS'
import Sector from "./filterOptionsPage/Sector"
import SubSector from "./filterOptionsPage/SubSector";
import Financials from "./filterOptionsPage/Financials";
import Ratios from "./filterOptionsPage/Ratios"
import DirectorsName from "./filterOptionsPage/DirectorsName";
import DirectorRole from "./filterOptionsPage/DirectorRole";
import DirectorOccupation from "./filterOptionsPage/DirectorOccupation";
import DirectorNationality from "./filterOptionsPage/DirectorNationality"
import DirectorCountryofResidence from "./filterOptionsPage/DirectorCountryofResidence";
import DirectorStatus from './filterOptionsPage/DirectorStatus'
import DirectorAppointmentDate from "./filterOptionsPage/DirectorAppointmentDate";
import DirectorResignDate from "./filterOptionsPage/DirectorResignDate";

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
            { filter: "Company Name", option: <CompanyName /> },
            { filter: "Company Number", option: <CompanyNumber />},
            { filter: "Reference Number", option: <ReferenceNumber /> },
            { filter: "Address", option: <Address />},
            { filter: "Website", option: <Website /> },
            { filter: "Mail", option: <Mail />},
            { filter: "Telephone", option: <Telephone /> },
            { filter: "No. of Employees", option: <NoOfEmployees /> },
            { filter: "Account Category", option: optionDropDownAndSearch },
        ],
    },
    {
        Main: "Location",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Post Code", option: <PostalCode  /> },
            { filter: "City", option: <City /> },
            { filter: "County", option: <County /> },
            { filter: "Region", option: <Region />},
            { filter: "Country", option: <Country /> },
            { filter: "Constituency", option: <Constituency /> },
            { filter: "Local Authority", option: <LocalAuthority /> },
        ],
    },
    {
        Main: "Status",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Legal Form", option: <LeagalForm/> },
            { filter: "Status", option: <Status /> },
            { filter: "Incorporation Date", option: <IncorporationDate /> },
            { filter: "Liquidation Date", option: <LiquidationDate /> },
            { filter: "Dissolution Date", option: <DissolutionDate /> },
            { filter: "Company Category", option: <CompanyCategory /> },
            { filter: "Last Accounts Date", option: <LastAccountsDate /> },
        ],
    },
    {
        Main: "Activities",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "UK SIC Section", option: <UKSICSection /> },
            { filter: "UK SIC", option: <UKSIC /> },
            { filter: "NACE", option: <NACE /> },
            { filter: "US SIC", option: <USSIC /> },
            { filter: "NAICS", option: <NAICS /> },
            { filter: "Sector", option: <Sector /> },
            { filter: "SubSector", option: <SubSector /> },
        ],
    },
    {
        Main: "Financials",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Financials", option: <Financials /> },
            { filter: "Ratios", option: <Ratios /> },
        ],
    },
    {
        Main: "Directors",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Name", option: <DirectorsName />},
            { filter: "Role", option: <DirectorRole />},
            { filter: "Occupation", option: <DirectorOccupation /> },
            { filter: "Nationality", option: <DirectorNationality />},
            { filter: "Country of Residence", option: <DirectorCountryofResidence /> },
            { filter: "Status", option: <DirectorStatus /> },
            { filter: "Appointment Date", option: <DirectorAppointmentDate /> },
            { filter: "Resign Date", option: <DirectorResignDate /> },
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
