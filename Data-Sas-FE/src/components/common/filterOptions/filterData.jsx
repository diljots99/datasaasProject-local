import React from "react";
import * as FaIcons from "react-icons/fa";
import SearchBar from "./subFilterOptions/searchBar";
import SearchBarData from "./subFilterOptions/data.json";
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
import OwnershipName from "./filterOptionsPage/OwnershipName";
import OwnershipKind from "./filterOptionsPage/OwnershipKind";
import OwnershipNationality from "./filterOptionsPage/OwnershipNationality";
import OwnershipCountryofResidence from "./filterOptionsPage/OwnershipCountryofResidence";
import OwnershipStatus from "./filterOptionsPage/OwnershipStatus";
import OwnershipAppointmentDate from "./filterOptionsPage/OwnershipAppointmentDate";
import OwnershipResignDate from "./filterOptionsPage/OwnershipResignDate";
import ImporterStatus from "./filterOptionsPage/ImporterStatus";
import ExporterStatus from "./filterOptionsPage/ExporterStatus";
import AccountCategory from "./filterOptionsPage/AccountCategory";
import LastAccountFiled from "./filterOptionsPage/LastAccountFiled";
import CurrentAssets from "./filterOptionsPage/CurrentAssets";
import FixedAssets from "./filterOptionsPage/FixedAssets";
import CompanyAccountCategory  from './filterOptionsPage/CompanyAccountCategory'
import TotalAssets from "./filterOptionsPage/TotalAssets";
import NetAssets from "./filterOptionsPage/NetAssets";
import MinMax from "./filterOptionsPage/MinMax";
import MinMaxDate from "./filterOptionsPage/MinMaxDate";
import TextSearch from "./filterOptionsPage/TextSearch";
 
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
            { filter: "Account Category", option: <CompanyAccountCategory />},
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
            { filter: "Account Category", option: <AccountCategory /> },
            { filter: "Last Account Filed", option: <LastAccountFiled /> },
            { filter: "Current Assets", option: <MinMax name="Current Assets" category="Financials" /> },
            { filter: "Fixed Assets", option: <FixedAssets /> },
            { filter: "Total Assets", option: <TotalAssets /> },
            { filter: "Net Assets", option: <MinMax name="Net Assets" category="Financials"  />},
            { filter: "Current Liabilities", option: <MinMax name="Current Liabilities" category="Financials"  /> },
            { filter: "Long Term Liabilities", option: <MinMax name="Long Term Liabilities" category="Financials"  />},
            { filter: "Total Liabilities", option: <MinMax name="Total Liabilities" category="Financials"  />},
            { filter: "Turnover", option: <MinMax name="Turnover" category="Financials"  />},
            { filter: "Number of Employees", option: <MinMax name="Number of Employees" category="Financials"  /> },
            { filter: "EBITDA", option: <MinMax name="EBITDA" category="Financials"  /> },
            { filter: "Equity", option: <MinMax name="Equity" category="Financials"  /> },
            { filter: "Gross Profit", option: <MinMax name="Gross Profit" category="Financials"  />},
            { filter: "Trade Creditors", option: <MinMax name="Trade Creditors" category="Financials"  /> },
            { filter: "Trade Debtors", option: <MinMax name="Trade Debtors" category="Financials"  /> },            
        ],
    },
    {
        Main: "Ratios",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Gross Profit Margin", option: <Financials /> },
            { filter: "Operating Profit Margin", option: <Ratios /> },
            { filter: "Profit Margin (before Tax)", option: <Ratios /> },
            { filter: "Profit Margin (after Tax)", option: <Ratios /> },
            { filter: "Current Ratio", option: <Ratios /> },
            { filter: "Liquidity Ratio", option: <Ratios /> },
            { filter: "Asset Turnover Ratio", option: <Ratios /> },
            { filter: "Return on Net Assets", option: <Ratios /> },
            { filter: "Return on Equity", option: <Ratios /> },
            { filter: "Return on Capital Employed", option: <Ratios /> },
            { filter: "Gearing (Total Liabilities", option: <Ratios /> },
            { filter: "Debt to Capital Ratio", option: <Ratios /> },
            { filter: "Debt to Equity Ratio", option: <Ratios /> },
        ],
    },
    {
        Main: "Directors",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Name", option: <TextSearch name="Director Name" category="Directors" />},
            { filter: "Role", option: <DirectorRole />},
            { filter: "Occupation", option: <DirectorOccupation /> },
            { filter: "Nationality", option: <DirectorNationality />},
            { filter: "Country of Residence", option: <DirectorCountryofResidence /> },
            { filter: "Status", option: <DirectorStatus /> },
            { filter: "Director Appointment Date", option: <MinMaxDate  name="Director Appointment Date" category="Directors" />},
            { filter: "Director Resign Date", option: <MinMaxDate  name="Director Resign Date" category="Directors" /> },
        ],
    },
    {
        Main: "Ownership",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Name", option:  <TextSearch name="Ownership Name" category="Ownership" /> },
            { filter: "Kind", option: <OwnershipKind />},
            { filter: "Nationality", option: <OwnershipNationality /> },
            { filter: "Country of Residence", option: <OwnershipCountryofResidence /> },
            { filter: "Status", option: <OwnershipStatus /> },
            { filter: "Appointment Date", option: <MinMaxDate  name="Ownership Appointment Date" category="Ownership" />},
            { filter: "Resign Date", option: <MinMaxDate  name="Ownership Resign Date" category="Ownership" /> },
        ],
    },
    {
        Main: "Trade",
        iconClosed: <FaIcons.FaAngleRight />,
        iconOpened: <FaIcons.FaAngleDown />,
        Sub: [
            { filter: "Importer Status", option: <ImporterStatus /> },
            { filter: "Exporter Status", option: <ExporterStatus /> },
        ],
    },
];
