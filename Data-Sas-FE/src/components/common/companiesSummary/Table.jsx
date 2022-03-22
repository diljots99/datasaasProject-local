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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";
import { useTable, usePagination } from "react-table";
import Checkbox from "@mui/material/Checkbox";

export default function Table({
  columns,
  data,
  fetchData,
  loading,
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
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
console.log("TTTt",data);
  const renderPageButton = () => {
    let buttons = [];
    for (let i = 0; i < pageCount; i++) {
      console.log("for rend button");
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

  console.log("pageCount", pageCount, pageIndex);
  return (
    <div className="main">
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
                      : column.Header === "SIC Code"
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
        {/* spacial header for table   */}
        <tr>
          <td style={{backgroundColor:"#fafafa"}}>
            <div className={classess.checkBox}>
              <Checkbox size="small" />
              <Typography variant="h6">Select all </Typography>
            </div>
          </td>
          <td style={{backgroundColor:"#fafafa"}}></td>
          <td style={{backgroundColor:"#fafafa"}}></td>
          <td style={{backgroundColor:"#fafafa"}}></td>
          <td style={{backgroundColor:"#fafafa"}}></td>
          <td style={{ float: "right",backgroundColor:"#fafafa" }}>
            <div>
              <Button
                className={classess.exportButton}
                color="primary"
                size="small"
                variant="contained"
              >
                Export Ratios
              </Button>
            </div>
          </td>
        </tr>

        {/* Table Data */}
        {loading && <div>Loading ...</div>}
        {!loading &&
        rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log("cell data", cell);
                return (
                  <td
                    onClick={() => history.push()}
                    className={
                      cell.column.Header === "Company Name"
                        ? "borderStart"
                        : cell.column.Header === "SIC Code"
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
      <div className="pagination" style={{ justifyContent: "flex-end" }}>
        {/* <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        > */}

        {/* <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
         
        >
          {[5,10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
            {pageSize}
            </option>
          ))}
       </Select>
       <div className="buttondiv">
        <button  className="pagination-button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        {renderPageButton()}
        <button className="pagination-button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}  
        </div>*/}
      </div>
    </div>
  );
}
