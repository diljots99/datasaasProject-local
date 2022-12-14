import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import "./style.css";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Select,
} from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";
import { useTable, usePagination, useSortBy } from "react-table";

export default function Table({
  columns,
  data,
  fetchData,
  pageCount: controlledPageCount,
}) {
  const history = useHistory();
  const classess = useStyles();
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
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,

    },
    useSortBy,
    usePagination,

  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const renderPageButton = () => {
    let buttons = [];
    for (let i = 0; i < pageCount; i++) {
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
    return buttons;
  };


  return (
    <div className="main">
       <div className={[classess.tableWrap,"tableWrap" ]}>
      <table class="role-header" id="table-to-xls" {...getTableProps()} className={classess.chargesTable}>
        {/* Table Head */}
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th
                  className={
                    column.Header === "Charge No."
                      ? "borderStart"
                      : column.Header === "Short Particulars"
                        ? "borderEnd"
                        : "borderCenter"
                  }
                  // width="250px"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // width: "250px !importent",
                    justifyContent: "space-between",
                  }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span style={{marginLeft:"5px"}}>
                    <img src={"/images/Sort.png"} alt="company-note-list" />
                  </span>
                </th>
              );
            })}
          </tr>
        ))}

<tr>
  <td style={{background: "transparent" , height: "48px"}}></td>
  <td style={{background: "transparent" , height: "48px"}}></td>
  <td style={{background: "transparent" , height: "48px"}}></td>
  <td style={{background: "transparent" , height: "48px"}}></td>
  <td style={{background: "transparent" , height: "48px"}}></td>
</tr>

        {/* Table Data */}

        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log("cell data", cell);
                return (
                  <td
                    onClick={() => history.push()}

                    className={
                      cell.column.Header === "Charge No."
                        ? "borderStart"
                        : cell.column.Header === "Short Particulars"
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
      </div>
      <div className={classess.exportMain}>
      <div className={classess.exportInner}>
         <div className={classess.checkBox} >
                                {/* <Checkbox size="small" /><Typography variant="h6">Select all </Typography> */}
                            </div>
         
              <Button
                className={classess.exportButton}
                color="primary"
                variant="contained"
              >
                Export
              </Button>
              </div>
              </div>
      {/* for Pagination */}
      <div className="pagination" style={{ justifyContent: "flex-end" , marginTop: "20px" }}>
        <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}

        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        <span aria-hidden="true" style={{ position: "relative" , top: "-3px"}}>&laquo;</span>
    </li>
    {renderPageButton()}
    <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <span aria-hidden="true" style={{ position: "relative" , top: "-3px"}}>&raquo;</span>
    </li>
  </ul>
</nav>
      </div>
    </div>
  );
}
