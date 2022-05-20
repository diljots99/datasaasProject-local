import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";
import { useTable, usePagination } from "react-table";
import { useSelector } from "react-redux";
import { FilterBox } from "../../components/common/filterOptions/filterBox";
import moment from 'moment'
import { CSVLink } from "react-csv";

const Table = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) => {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    pageCount,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize:10 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );
  const classess = useStyles();
  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const renderPageButton = () => {
    let buttons = [];
    for (let i = 0; i < pageCount; i++) {
      if (pageIndex === 0) {
        if (
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2 ||
          i == pageIndex + 3 ||
          i == pageIndex + 4
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === 1) {
        if (
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2 ||
          i == pageIndex + 3
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === pageCount - 1) {
        if (
          i == pageIndex - 4 ||
          i == pageIndex - 3 ||
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === pageCount - 2) {
        if (
          i == pageIndex - 3 ||
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else {
        if (
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      }
    }
    return buttons;
  };

  return (
    <div className="main" style={{display:"contents"}}>
      <table class="role-header" id="table-to-xls" {...getTableProps()}>
        {/* Table Head */}
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th
                  className={
                    column.Header === "Company Name"
                      ? "borderStart"
                      : column.Header === "Notification"
                      ? "borderEnd"
                      : "borderCenter"
                  }
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}

        {/* <tr>
          <td>  <div className={classess.checkBox}>
                <Checkbox
                  size="small"
                  checked={true}
                  onChange={() => {
                    // setAllSelected(!allSelected);
                  }}
                />
                <Typography variant="h6">Select all </Typography>
              </div></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> */}

        {/* Table Data */}
        {!loading && data.length === 0 && <Typography variant="h6">No results found</Typography>}
        {loading && <div>Loading ...</div>}
        {!loading &&
          rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className={
                        cell.column.Header === "Company Name"
                          ? "borderStart"
                          : cell.column.Header === "Notification"
                          ? "borderEnd"
                          : "borderCenter"
                      }
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </table>
      {/* for Pagination */}
      <div
        className="pagination"
        style={{ justifyContent: "flex-end", marginBottom: "5%" }}
      >
        {/* <select
          className="select"
          val ue={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        > */}
        <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option className="select" key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <span
                aria-hidden="true"
                style={{ position: "relative", top: "-3px" }}
              >
                &laquo;
              </span>
            </li>
            {renderPageButton()}
            <li
              className="page-item"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <span
                aria-hidden="true"
                style={{ position: "relative", top: "-3px" }}
              >
                &raquo;
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

 const SearchResults = ({ data }) => {
  const classess = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const businessfetchIdRef = React.useRef(0);
  const { filterSearchResults } = useSelector(
    (state) => state.filter
  );
  const [tabledata, settableData] = React.useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
console.log("Filter Results",  filterSearchResults )
  useEffect(() => {
    if (searchKey) {
      let re = new RegExp(`${searchKey}`, "gi");
      let results = filterSearchResults.filter((company) =>
        company.company_name.match(re)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchKey]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
        Cell: (val) => {
          // console.log("val", val.cell.row.cells[3].value);
          return (
            <Link to={`/company/${val.row.original.uuid}/Key-Data`}>
              {val.value}
            </Link>
          );
        },
        width: 200,
      },
      {
        Header: "Company Number",
        accessor: "company_number",
        width: 200,
      },
      {
        Header: "Company Status",
        accessor: "company_status",
        width: 200,
      },
      {
        Header: "Postal Code",
        accessor: "regaddress_postcode_trim",
        width: 200,
      },
      {
        Header: "Address",
        accessor: "regaddress_addressline1",
        width: 200,
      },
      {
        Header: "Updated On",
        accessor: "updatedAt",
        width: 200,
        Cell:({value})=>{
          return moment(value).format("YYYY/MM/DD")
        }
      },
      {
        Header: "SIS Code",
        accessor: "siccode_1",
        width: 200,
      },
      // {
      //   Header: "Notification",
      //   width: 200,
      //   accessor: "id",
      //   Cell: (val) => {
      //     return (
      //       <Grid container style={{ justifyContent: "center" }}>
      //         <Grid item>
      //           <img src={"/images/notification.png"} alt="logo" />
      //         </Grid>
      //       </Grid>
      //     );
      //   },
      // },
    ],
    []
  );

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++businessfetchIdRef.current;
      setLoading(true);

      setTimeout(() => {
        if (fetchId === businessfetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData(filterSearchResults.slice(startRow, endRow));
          setPageCount(Math.ceil(filterSearchResults.length / pageSize));
          setLoading(false);
        }
      }, 3000);
    },
    [filterSearchResults]
  );

  return (
    <div style={{margin:"10px"}}>
      <Grid container style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {/* <Typography
            variant="h5"
            style={{ fontWeight: 600 }}
            className={classess.watchHeading}
          >
            Business Search
          </Typography> */}
           <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          style={{width:"130px", marginLeft: "10px"}}
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={0}
          placeholder="Export"
          label="Export"
          // onChange={handleChange}
        >
         <MenuItem value={0} disabled>
          Export
        </MenuItem>
         <CSVLink
                data={tabledata}
                filename={'Search result all List'}
          >
          <MenuItem value={10} onClick={()=>{}} >Export All</MenuItem>
          </CSVLink>
          <MenuItem value={21}>Export Selected</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} sm={6} className={classess.searchcontainer}>
          <TextField
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCD9D9",
              textTransform: "capitalize",
              borderRadius: "6px",
            }}
            variant="outlined"
            size="small"
            placeholder="Search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* <FilterBox/> */}
        </Grid>
      </Grid>

      <Table
          columns={columns}
          data={searchResults.length > 0 ? searchResults : tabledata}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
          pagination={true}
        />

      {/* {filterSearchResults.length > 0 ? (
        <Table
          columns={columns}
          data={searchResults.length > 0 ? searchResults : tabledata}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
          pagination={true}
        />
      ) : (
        <Typography variant="h6">No results found</Typography>
      )} */}
    </div>
  );
};

export default SearchResults