import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Select,
} from "@material-ui/core";
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
       <div className="tableWrap">
      <table class="role-header" id="table-to-xls" {...getTableProps()}>
        {/* Table Head */}
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th style={{padding: "10px 30px" , fontSize: "22px" , lineHeight: "33px" , fontWeight: "600" , fontFamily: "Poppins" , textAlign: "left"}}
                  className={
                    column.Header === "Heading"
                      ? "borderStart"
                      : column.Header === "2017"
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




        {/* Table Data */}

        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td style={{padding: "10px 30px" , fontSize: "22px" , lineHeight: "33px" , fontWeight: "400" , fontFamily: "Poppins" , textAlign: "left"}}
                    onClick={() => history.push()}

                    className={
                      cell.column.Header === "Heading"
                        ? "borderStart"
                        : cell.column.Header === "2017"
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
      {/* for Pagination */}
      <div className="pagination" style={{ justifyContent: "flex-end" }}>
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
