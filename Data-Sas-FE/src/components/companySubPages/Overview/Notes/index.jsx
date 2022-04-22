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
import AddNotes from "../../../../components/common/AddNotes";
import { useTable, usePagination } from "react-table";
import { useSelector } from "react-redux";
import moment from 'moment';

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
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

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
    <div >
      <table class="role-header" id="table-to-xls" {...getTableProps()}>
        {/* Table Head */}
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th
                  className={
                    column.Header === "Note"
                      ? "borderStart"
                      : column.Header === "Updated On"
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
                        cell.column.Header === "Note"
                          ? "borderStart"
                          : cell.column.Header === "Updated On"
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

const BussinessWatch = ({ data }) => {
  const [showmodel, setshowmodel] = useState(false);
  const classess = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const businessfetchIdRef = React.useRef(0);
  const { companyDetail } = useSelector((state) => state.watch);
  const [tabledata, settableData] = React.useState([]);

//   const { companyNotes } = useSelector((state) => state.watch);
   console.log(companyDetail, " notes________________________");
  //if(companyDetail.business_watches){

  
  const columns = React.useMemo(
    () => [
      {
        Header: "Note",
        accessor: "n_text",
        // Cell: (val) => {
        //   // console.log("val", val.cell.row.cells[3].value);
        //   return (
        //     <Link to={`/company/${val.row.original.uuid}/Key-Data`}>
        //       {val.value}
        //     </Link>
        //   );
        // },
        width: 200,
      },

      {
        Header: "Created At",
        accessor: "createdAt",
        width: 200,
        Cell:({value})=>{
          return moment(value).format("YYYY/MM/DD hh:mm a")
        }
      },
      {
        Header: "Updated On",
        accessor: "updatedAt",
        width: 200,
        Cell:({value})=>{
          return moment(value).format("YYYY/MM/DD hh:mm a")
        }
      },

    ],
    []
  );

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++businessfetchIdRef.current;
      setLoading(true);
      setTimeout(() => {
        console.log("@@@@@@@@@@@@@@#################@@@@@@@@@@@@@@",companyDetail.notes);
        if (fetchId === businessfetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData(companyDetail.notes.slice(startRow, endRow));
          setPageCount(Math.ceil(companyDetail.notes.length / pageSize));
          setLoading(false);
        }
      }, 3000);
    },
    [companyDetail.notes]
  );

  return (
    <div>
      <Grid container style={{ marginBottom: "10px" , justifyContent:"space-between" }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            style={{ fontWeight: 600 }}
            className={classess.watchHeading}
          >
            Notes
          </Typography>
        </Grid>
        <Grid item>
          <Button
            //className={classes.filterButton}
            color="primary"
            style={{ backgroundColor: "#40acfb", marginLeft: "20px" }}
            variant="contained"
            onClick={() => {
              setshowmodel(true);
            }}
          >
            Add Notes
          </Button>
        </Grid>
      </Grid>
      {companyDetail.notes?.length > 0 ? (
        <Table
          columns={columns}
          data={tabledata}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
        />
      ) : (
        <Typography variant="h6">No results found</Typography>
      )}
      <AddNotes open={showmodel} setAddNotes={setshowmodel} />
    </div>
  );
};

export default BussinessWatch;
